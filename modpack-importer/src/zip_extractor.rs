use crate::models::CurseForgeManifest;
use anyhow::{Context, Result};
use std::collections::HashSet;
use std::fs::File;
use std::io::{BufReader, Read};
use std::path::Path;
use zip::ZipArchive;

/// Extract mod filenames from a CurseForge modpack zip manifest
/// Falls back to scanning mods/ folder if no manifest.json exists
pub fn extract_mod_filenames(zip_path: &Path) -> Result<HashSet<String>> {
    let file = File::open(zip_path)
        .with_context(|| format!("Failed to open zip file: {}", zip_path.display()))?;
    let reader = BufReader::new(file);
    
    let mut archive = ZipArchive::new(reader)
        .with_context(|| format!("Failed to read zip archive: {}", zip_path.display()))?;

    // First try to find manifest.json (CurseForge format)
    let manifest_index = archive
        .file_names()
        .position(|name| name == "manifest.json");

    if let Some(index) = manifest_index {
        return extract_from_manifest(&mut archive, index, zip_path);
    }

    // Fallback: scan for mods/ folder (server pack format)
    extract_from_mods_folder(&mut archive, zip_path)
}

fn extract_from_manifest(
    archive: &mut ZipArchive<BufReader<File>>,
    manifest_index: usize,
    zip_path: &Path,
) -> Result<HashSet<String>> {
    let mut manifest_file = archive
        .by_index(manifest_index)
        .context("Failed to extract manifest.json from zip")?;

    let mut manifest_content = String::new();
    manifest_file
        .read_to_string(&mut manifest_content)
        .context("Failed to read manifest.json content")?;

    // Parse the manifest
    let manifest: CurseForgeManifest = serde_json::from_str(&manifest_content)
        .context("Failed to parse manifest.json")?;

    // Extract all filenames
    let filenames: HashSet<String> = manifest
        .files
        .iter()
        .map(|f| f.file_name.clone())
        .collect();

    println!("  Extracted {} mod filenames from manifest.json in {}", filenames.len(), zip_path.display());

    Ok(filenames)
}

fn extract_from_mods_folder(
    archive: &mut ZipArchive<BufReader<File>>,
    zip_path: &Path,
) -> Result<HashSet<String>> {
    let mut filenames = HashSet::new();

    // Look for files in mods/ folder
    for i in 0..archive.len() {
        let file = archive.by_index(i)?;
        let name = file.name();
        
        // Check if this is a jar file in the mods folder
        if name.starts_with("mods/") && name.ends_with(".jar") {
            // Extract just the filename part
            let filename = name.split('/').next_back().unwrap_or(name);
            filenames.insert(filename.to_string());
        }
    }

    if filenames.is_empty() {
        anyhow::bail!("No manifest.json or mods/ folder found in {}", zip_path.display());
    }

    println!("  Extracted {} mod filenames from mods/ folder in {}", filenames.len(), zip_path.display());

    Ok(filenames)
}

/// Get a list of all mod filenames from the mods directory's .pw.toml files
pub async fn get_client_mod_filenames(mods_dir: &Path) -> Result<HashSet<String>> {
    let mut filenames = HashSet::new();

    if !mods_dir.exists() {
        return Ok(filenames);
    }

    let mut entries = tokio::fs::read_dir(mods_dir).await?;

    while let Some(entry) = entries.next_entry().await? {
        let path = entry.path();
        if path.extension().map(|e| e == "toml").unwrap_or(false)
            && path.to_string_lossy().ends_with(".pw.toml")
        {
            let content = tokio::fs::read_to_string(&path).await?;
            
            // Parse toml to get filename
            if let Ok(pw_toml) = toml::from_str::<crate::models::PwToml>(&content) {
                filenames.insert(pw_toml.filename);
            }
        }
    }

    Ok(filenames)
}
