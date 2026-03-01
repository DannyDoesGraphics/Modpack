use crate::{
    cf_to_modrinth, download_cf_mods, mod_sides, override_handler, packwiz, prompt, zip_extractor,
};
use crate::download_cf_mods::discover_pwtoml_files;
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
    auto_server: bool,
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

    let pack_dir = pack_file
        .parent()
        .context("Pack file must have a parent directory")?;
    let mods_dir = pack_dir.join("mods");

    // Step 3: Discover all .pw.toml files once (used by both CF→Modrinth and CF download checking)
    println!("Step 3: Discovering all .pw.toml files...");
    let all_pwtoml_files = discover_pwtoml_files(&pack_dir)?;
    println!("  Found {} .pw.toml files", all_pwtoml_files.len());
    println!();

    // Step 4: CurseForge to Modrinth conversion
    if do_cf_convert {
        println!("Step 4: Converting CurseForge mods to Modrinth...");
        let (migrated, skipped, errors) = cf_to_modrinth::convert_curseforge_to_modrinth(
            all_pwtoml_files.clone(),
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
        println!("Step 4: Skipping CurseForge to Modrinth conversion");
        println!();
    }

    // Step 5: Side assignment
    if do_sides {
        println!("Step 5: Analyzing client/server mod sides...");

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
            analysis.mismatches.len(),
        )?;

        // Handle version mismatches with user prompts
        let user_decisions = prompt::prompt_for_mismatches(&analysis.mismatches, auto_accept, auto_server)?;

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
        println!("Step 5: Skipping side assignment");
        println!();
    }

    // Step 6: Refresh packwiz index
    println!("Step 6: Refreshing packwiz index...");
    packwiz::refresh(pack_file)?;
    println!();

    // Step 7: Test and fix CurseForge downloads that fail API
    println!("Step 7: Testing CurseForge downloads (will fix any that fail)...");

    // Re-discover files after migration (files may have been converted to Modrinth)
    let current_pwtoml_files = discover_pwtoml_files(&pack_dir)?;
    println!("  Re-discovered {} .pw.toml files after migration", current_pwtoml_files.len());

    // Use freshly discovered files for CF download checking (filter to CF mods without URL)
    let cf_mods = download_cf_mods::filter_curseforge_mods(current_pwtoml_files);
    let (downloaded, failed) = if cf_mods.is_empty() {
        println!("  No CurseForge mods need API checking");
        (0, vec![])
    } else {
        // Check which ones fail via CF API, then download those
        let failed_mods = download_cf_mods::check_curseforge_downloads(cf_mods).await?;
        if failed_mods.is_empty() {
            println!("  All CurseForge mods available via API");
            (0, vec![])
        } else {
            download_cf_mods::download_failed_mods(failed_mods).await?
        }
    };

    if downloaded > 0 || !failed.is_empty() {
        println!("  Downloaded: {} fixed, {} failed", downloaded, failed.len());
    }

    // If we downloaded anything, refresh again
    if downloaded > 0 {
        println!();
        println!("  Re-refreshing packwiz index with new files...");
        packwiz::refresh(pack_file)?;
    }
    println!();

    // Step 8: Apply local overrides last (so they take precedence)
    println!("Step 8: Applying local overrides...");
    override_handler::apply_overrides_keep_folder(pack_dir)?;
    println!("  Overrides applied successfully");
    println!();

    Ok(())
}
