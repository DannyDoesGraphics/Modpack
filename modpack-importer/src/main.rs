use anyhow::{Context, Result};
use clap::{Parser, Subcommand};
use std::path::PathBuf;

mod cf_to_modrinth;
mod download_cf_mods;
mod importer;
mod models;
mod mod_sides;
mod override_handler;
mod packwiz;
mod prompt;
mod zip_extractor;

#[derive(Parser, Debug)]
#[command(
    name = "modpack-importer",
    about = "Import CurseForge modpacks with intelligent client/server mod separation",
    version = "0.1.0"
)]
struct Cli {
    #[command(subcommand)]
    command: Option<Commands>,

    /// Path to pack.toml file (for legacy import mode)
    #[arg(long, short, value_name = "FILE", global = true)]
    file: Option<PathBuf>,

    /// Client modpack zip file to import (legacy mode)
    #[arg(long, short, value_name = "ZIP", global = true)]
    import: Option<PathBuf>,

    /// Server modpack zip file to import (legacy mode)
    #[arg(long = "server-import", value_name = "ZIP", global = true)]
    server_import: Option<PathBuf>,

    /// Only apply local overrides without importing a new modpack
    #[arg(long, global = true)]
    refresh: bool,

    /// Skip CurseForge to Modrinth conversion
    #[arg(long, global = true)]
    skip_cf_convert: bool,

    /// Skip side assignment (client/server)
    #[arg(long, global = true)]
    skip_sides: bool,

    /// Auto-accept all version mismatch prompts (defaults to "both")
    #[arg(long, global = true)]
    auto_accept: bool,

    /// Auto-default all version mismatch prompts to "server" (overrides auto-accept)
    #[arg(long, global = true)]
    auto_server: bool,

    /// Rate limit delay for Modrinth API calls (in milliseconds)
    #[arg(long, default_value = "250", global = true)]
    rate_limit: u64,
}

#[derive(Subcommand, Debug)]
enum Commands {
    /// Import a new modpack (default)
    Import {
        /// Path to pack.toml file
        #[arg(long, short, value_name = "FILE")]
        file: PathBuf,

        /// Client modpack zip file to import
        #[arg(long, short, value_name = "ZIP")]
        import: PathBuf,

        /// Server modpack zip file to import
        #[arg(long = "server-import", value_name = "ZIP")]
        server_import: PathBuf,
    },
    /// Test which CurseForge mods fail API downloads
    TestCf {
        /// Path to pack.toml file
        #[arg(long, short, value_name = "FILE")]
        file: PathBuf,

        /// Test resource packs as well
        #[arg(long)]
        resource_packs: bool,
    },
    /// Download CurseForge mods that fail API downloads and replace .pw.toml files
    FixCf {
        /// Path to pack.toml file
        #[arg(long, short, value_name = "FILE")]
        file: PathBuf,

        /// Also fix resource packs from CurseForge
        #[arg(long)]
        resource_packs: bool,

        /// Specific mod filenames to fix (if empty, will test and fix all failing)
        #[arg(long, value_name = "FILE")]
        mods: Vec<String>,
    },
}

#[tokio::main]
async fn main() -> Result<()> {
    let cli = Cli::parse();

    println!("╔══════════════════════════════════════════════════════════╗");
    println!("║                 Modpack Importer Tool                    ║");
    println!("╚══════════════════════════════════════════════════════════╝");
    println!();

    // Handle subcommands
    match cli.command {
        Some(Commands::TestCf { file, resource_packs }) => {
            return run_test_cf(&file, resource_packs).await;
        }
        Some(Commands::FixCf { file, resource_packs, mods }) => {
            return run_fix_cf(&file, resource_packs, mods).await;
        }
        Some(Commands::Import { file, import, server_import }) => {
            return run_import(&file, &import, &server_import, !cli.skip_cf_convert, !cli.skip_sides, cli.auto_accept, cli.auto_server, cli.rate_limit).await;
        }
        None => {
            // Legacy mode - handle old CLI style
            return run_legacy_mode(&cli).await;
        }
    }
}

async fn run_test_cf(pack_file: &PathBuf, _resource_packs: bool) -> Result<()> {
    if !pack_file.exists() {
        anyhow::bail!("Pack file not found: {}", pack_file.display());
    }

    let pack_dir = pack_file
        .parent()
        .ok_or_else(|| anyhow::anyhow!("Pack file must have a parent directory"))?;

    println!("Mode: Test CurseForge API Downloads");
    println!("  Pack file: {}", pack_file.display());
    println!("  Testing all CurseForge files in pack (recursive)...");
    println!();

    let failing = download_cf_mods::test_curseforge_downloads(&pack_dir).await?;

    println!("\n=== Results ===");
    if failing.is_empty() {
        println!("All CurseForge mods can be downloaded via API!");
    } else {
        println!("{} files fail API downloads and need manual fixing:", failing.len());
        for (filename, reason) in &failing {
            println!("  - {}: {}", filename, reason);
        }
        println!("\nTo fix these mods, run:");
        println!("  modpack-importer fix-cf --file {}", pack_file.display());
    }

    Ok(())
}

async fn run_fix_cf(
    pack_file: &PathBuf,
    _resource_packs: bool,
    specific_mods: Vec<String>,
) -> Result<()> {
    if !pack_file.exists() {
        anyhow::bail!("Pack file not found: {}", pack_file.display());
    }

    let pack_dir = pack_file
        .parent()
        .ok_or_else(|| anyhow::anyhow!("Pack file must have a parent directory"))?;

    println!("Mode: Fix CurseForge Downloads");
    println!("  Pack file: {}", pack_file.display());
    println!("  Scanning entire pack directory...");
    println!();

    // If specific mods provided, fix only those
    // Otherwise, test and fix all failing mods
    let (downloaded, failed) = if specific_mods.is_empty() {
        download_cf_mods::download_failing_mods(&pack_dir).await?
    } else {
        let mut downloaded = 0;
        let mut failed = Vec::new();
        for mod_name in &specific_mods {
            match download_cf_mods::download_specific_mod(&pack_dir, mod_name).await {
                Ok(true) => downloaded += 1,
                Ok(false) => failed.push((mod_name.clone(), "Not found or already fixed".to_string())),
                Err(e) => failed.push((mod_name.clone(), e.to_string())),
            }
        }
        (downloaded, failed)
    };

    println!("\n=== Results ===");
    println!("Downloaded: {}", downloaded);
    if !failed.is_empty() {
        println!("Failed: {}", failed.len());
        for (filename, reason) in &failed {
            println!("  - {}: {}", filename, reason);
        }
    }

    // Refresh packwiz index
    if downloaded > 0 {
        println!("\nRefreshing packwiz index...");
        packwiz::refresh(pack_file)?;
    }

    Ok(())
}

async fn run_import(
    file: &PathBuf,
    import: &PathBuf,
    server_import: &PathBuf,
    do_cf_convert: bool,
    do_sides: bool,
    auto_accept: bool,
    auto_server: bool,
    rate_limit: u64,
) -> Result<()> {
    if !file.exists() {
        anyhow::bail!("Pack file not found: {}", file.display());
    }
    if !import.exists() {
        anyhow::bail!("Client import zip not found: {}", import.display());
    }
    if !server_import.exists() {
        anyhow::bail!("Server import zip not found: {}", server_import.display());
    }

    println!("Configuration:");
    println!("  Pack file:      {}", file.display());
    println!("  Client zip:     {}", import.display());
    println!("  Server zip:     {}", server_import.display());
    println!();

    // Run the import workflow
    importer::run_import(
        file,
        import,
        server_import,
        do_cf_convert,
        do_sides,
        auto_accept,
        auto_server,
        rate_limit,
    )
    .await?;

    println!();
    println!("Import workflow completed successfully!");

    Ok(())
}

async fn run_legacy_mode(cli: &Cli) -> Result<()> {
    // Legacy mode requires file
    let file = cli.file.clone().ok_or_else(|| anyhow::anyhow!("--file is required (or use a subcommand like test-cf, fix-cf)"))?;

    if !file.exists() {
        anyhow::bail!("Pack file not found: {}", file.display());
    }

    // Handle refresh mode (apply overrides only)
    if cli.refresh {
        println!("Mode: Apply overrides only (no import)");
        println!("  Pack file: {}", file.display());
        println!();

        // Check packwiz is available
        println!("Step 1: Checking packwiz CLI...");
        packwiz::check_packwiz()?;
        println!();

        // Apply overrides only
        println!("Step 2: Applying local overrides...");
        let pack_dir = file.parent()
            .ok_or_else(|| anyhow::anyhow!("Pack file must have a parent directory"))?;
        override_handler::apply_overrides_keep_folder(pack_dir)?;
        println!("  Overrides applied successfully");
        println!();

        // Refresh packwiz index
        println!("Step 3: Refreshing packwiz index...");
        packwiz::refresh(&file)?;
        println!();

        println!("Overrides applied successfully!");
        return Ok(());
    }

    // Normal import mode - validate import paths
    let import = cli.import.clone().ok_or_else(|| anyhow::anyhow!("--import is required (or use --refresh or subcommand)"))?;
    let server_import = cli.server_import.clone().ok_or_else(|| anyhow::anyhow!("--server-import is required (or use --refresh or subcommand)"))?;

    if !import.exists() {
        anyhow::bail!("Client import zip not found: {}", import.display());
    }
    if !server_import.exists() {
        anyhow::bail!("Server import zip not found: {}", server_import.display());
    }

    run_import(&file, &import, &server_import, !cli.skip_cf_convert, !cli.skip_sides, cli.auto_accept, cli.auto_server, cli.rate_limit).await
}
