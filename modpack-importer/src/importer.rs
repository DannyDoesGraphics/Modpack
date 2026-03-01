use crate::{
    cf_to_modrinth, mod_sides, packwiz, prompt, zip_extractor,
};
use anyhow::{Context, Result};
use std::io::BufReader;
use std::path::Path;
use std::time::Duration;

/// Check if a zip file contains a manifest.json (CurseForge format)
fn is_curseforge_format(zip_path: &Path) -> bool {
    let Ok(file) = std::fs::File::open(zip_path) else {
        return false;
    };
    let reader = BufReader::new(file);
    let Ok(archive) = zip::ZipArchive::new(reader) else {
        return false;
    };
    let has_manifest = archive.file_names().any(|name| name == "manifest.json");
    has_manifest
}

pub async fn run_import(
    pack_file: &Path,
    client_zip: &Path,
    server_zip: &Path,
    do_cf_convert: bool,
    do_sides: bool,
    auto_accept: bool,
    rate_limit_ms: u64,
) -> Result<()> {
    // Check packwiz is available
    println!("Step 1: Checking packwiz CLI...");
    packwiz::check_packwiz()?;
    println!();

    // Step 2: Import the zips
    println!("Step 2: Importing modpack zips...");

    println!("  Importing client zip...");
    packwiz::import_with_overrides(pack_file, client_zip)?;

    println!("  Importing server zip...");
    // Server packs are rarely in CurseForge format - check first to avoid errors
    if is_curseforge_format(server_zip) {
        if let Err(e) = packwiz::import_with_overrides(pack_file, server_zip) {
            println!("  Server import failed: {}", e);
        } else {
            println!("  Server import successful");
        }
    } else {
        println!("  Server pack is not in CurseForge format (no manifest.json), skipping import");
        println!("  Will extract mod list directly from mods/ folder for side detection.");
    }
    
    println!();

    // Load pack config
    let pack_content = tokio::fs::read_to_string(pack_file).await
        .with_context(|| format!("Failed to read pack file: {}", pack_file.display()))?;
    let pack_config: crate::models::PackToml = toml::from_str(&pack_content)
        .with_context(|| format!("Failed to parse pack.toml: {}", pack_file.display()))?;
    
    let pack_dir = pack_file
        .parent()
        .context("Pack file must have a parent directory")?;
    let mods_dir = pack_dir.join("mods");

    // Step 3: CurseForge to Modrinth conversion
    if do_cf_convert {
        println!("Step 3: Converting CurseForge mods to Modrinth...");
        let (migrated, skipped, errors) = cf_to_modrinth::convert_curseforge_to_modrinth(
            pack_file,
            &pack_config,
            rate_limit_ms,
        ).await?;
        
        println!("  Migrated: {}, Skipped: {}", migrated, skipped);
        if !errors.is_empty() {
            println!("  Errors: {}", errors.len());
            for (path, err) in &errors {
                println!("    - {}: {}", path.display(), err);
            }
        }
        println!();

        // Small delay to let filesystem settle
        tokio::time::sleep(Duration::from_millis(100)).await;
    } else {
        println!("Step 3: Skipping CurseForge to Modrinth conversion");
        println!();
    }

    // Step 4: Side assignment
    if do_sides {
        println!("Step 4: Analyzing client/server mod sides...");
        
        // Get server mod filenames from zip
        let server_filenames = zip_extractor::extract_mod_filenames(server_zip)?;
        
        // Get client mod filenames from current .pw.toml files
        let client_filenames = zip_extractor::get_client_mod_filenames(&mods_dir).await?;
        
        println!("  Server zip has {} mods", server_filenames.len());
        println!("  Client directory has {} mods", client_filenames.len());
        
        // Analyze sides
        let analysis = mod_sides::analyze_sides(&server_filenames, &client_filenames);
        
        prompt::show_analysis_summary(
            analysis.server_mods.len(),
            analysis.client_mods.len(),
            analysis.both_mods.len(),
            analysis.mismatches.len(),
        )?;

        // Handle version mismatches with user prompts
        let user_decisions = prompt::prompt_for_mismatches(&analysis.mismatches, auto_accept)?;
        
        // Update sides in .pw.toml files
        println!("  Updating side assignments...");
        let (updated, unchanged) = mod_sides::update_sides(
            pack_dir,
            &analysis,
            &user_decisions,
        ).await?;
        
        println!("  Updated: {}, Unchanged: {}", updated, unchanged);
        println!();
    } else {
        println!("Step 4: Skipping side assignment");
        println!();
    }

    // Step 5: Refresh packwiz index
    println!("Step 5: Refreshing packwiz index...");
    packwiz::refresh(pack_file)?;
    println!();

    Ok(())
}
