use anyhow::Result;
use clap::Parser;
use std::path::PathBuf;

mod cf_to_modrinth;
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
    /// Path to pack.toml file
    #[arg(long, short, value_name = "FILE")]
    file: PathBuf,

    /// Client modpack zip file to import
    #[arg(long, short, value_name = "ZIP")]
    import: Option<PathBuf>,

    /// Server modpack zip file to import
    #[arg(long = "server-import", value_name = "ZIP")]
    server_import: Option<PathBuf>,

    /// Only apply local overrides without importing a new modpack
    #[arg(long, conflicts_with = "import")]
    refresh: bool,

    /// Skip CurseForge to Modrinth conversion
    #[arg(long)]
    skip_cf_convert: bool,

    /// Skip side assignment (client/server)
    #[arg(long)]
    skip_sides: bool,

    /// Auto-accept all version mismatch prompts (defaults to "both")
    #[arg(long)]
    auto_accept: bool,

    /// Rate limit delay for Modrinth API calls (in milliseconds)
    #[arg(long, default_value = "250")]
    rate_limit: u64,
}

#[tokio::main]
async fn main() -> Result<()> {
    let cli = Cli::parse();

    println!("╔══════════════════════════════════════════════════════════╗");
    println!("║                 Modpack Importer Tool                    ║");
    println!("╚══════════════════════════════════════════════════════════╝");
    println!();

    // Validate pack file exists
    if !cli.file.exists() {
        anyhow::bail!("Pack file not found: {}", cli.file.display());
    }

    // Handle refresh mode (apply overrides only)
    if cli.refresh {
        println!("Mode: Apply overrides only (no import)");
        println!("  Pack file: {}", cli.file.display());
        println!();

        // Check packwiz is available
        println!("Step 1: Checking packwiz CLI...");
        packwiz::check_packwiz()?;
        println!();

        // Apply overrides only
        println!("Step 2: Applying local overrides...");
        let pack_dir = cli.file.parent()
            .ok_or_else(|| anyhow::anyhow!("Pack file must have a parent directory"))?;
        override_handler::apply_overrides_keep_folder(pack_dir)?;
        println!("  Overrides applied successfully");
        println!();

        // Refresh packwiz index
        println!("Step 3: Refreshing packwiz index...");
        packwiz::refresh(&cli.file)?;
        println!();

        println!("Overrides applied successfully!");
        return Ok(());
    }

    // Normal import mode - validate import paths
    let import = cli.import.ok_or_else(|| anyhow::anyhow!("--import is required (or use --refresh)"))?;
    let server_import = cli.server_import.ok_or_else(|| anyhow::anyhow!("--server-import is required (or use --refresh)"))?;

    if !import.exists() {
        anyhow::bail!("Client import zip not found: {}", import.display());
    }
    if !server_import.exists() {
        anyhow::bail!("Server import zip not found: {}", server_import.display());
    }

    println!("Configuration:");
    println!("  Pack file:      {}", cli.file.display());
    println!("  Client zip:       {}", import.display());
    println!("  Server zip:       {}", server_import.display());
    println!();

    // Run the import workflow
    importer::run_import(
        &cli.file,
        &import,
        &server_import,
        !cli.skip_cf_convert,
        !cli.skip_sides,
        cli.auto_accept,
        cli.rate_limit,
    )
    .await?;

    println!();
    println!("Import workflow completed successfully!");

    Ok(())
}
