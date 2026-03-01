use crate::models::{ModrinthVersion, PackToml, PwToml};
use anyhow::{Context, Result};
use std::path::{Path, PathBuf};
use std::time::Duration;
use tokio::time::sleep;
use walkdir::WalkDir;

const API_BASE: &str = "https://api.modrinth.com/v2";
const USER_AGENT: &str = "modpack-importer/0.1.0 (packwiz modrinth migration)";

/// Convert CurseForge mods to Modrinth where possible
pub async fn convert_curseforge_to_modrinth(
    pack_file: &Path,
    pack_config: &PackToml,
    rate_limit_ms: u64,
) -> Result<(usize, usize, Vec<(PathBuf, String)>)> {
    let pack_dir = pack_file
        .parent()
        .context("Pack file must have a parent directory")?;
    let mods_dir = pack_dir.join("mods");

    if !mods_dir.exists() {
        return Ok((0, 0, vec![]));
    }

    let (mc_version, loader) = pack_config.versions.get_loader();
    println!("  Pack: {} | MC {} | {}", pack_dir.display(), mc_version, loader);

    let mut migrated = 0;
    let mut skipped = 0;
    let mut errors: Vec<(PathBuf, String)> = vec![];

    let pw_files: Vec<PathBuf> = WalkDir::new(&mods_dir)
        .max_depth(1)
        .into_iter()
        .filter_map(|e| e.ok())
        .filter(|e| {
            e.file_type().is_file()
                && e.path().extension().map(|e| e == "toml").unwrap_or(false)
                && e.path().to_string_lossy().ends_with(".pw.toml")
        })
        .map(|e| e.path().to_path_buf())
        .collect();

    let total = pw_files.len();
    println!("  Found {} .pw.toml files to process", total);

    let client = reqwest::Client::new();

    for (i, path) in pw_files.iter().enumerate() {
        let content = tokio::fs::read_to_string(path).await?;
        
        // Check if already Modrinth or not CurseForge
        let parsed: Result<PwToml, _> = toml::from_str(&content);
        let pw_toml = match parsed {
            Ok(p) => p,
            Err(e) => {
                println!("  [{}/{}] PARSE ERROR {}: {}", i + 1, total, path.display(), e);
                skipped += 1;
                continue;
            }
        };

        // Skip if already Modrinth or no CurseForge metadata
        if pw_toml.is_modrinth() {
            skipped += 1;
            continue;
        }

        if !pw_toml.is_curseforge() {
            skipped += 1;
            continue;
        }

        // Need SHA1 hash
        let sha1_hash = match pw_toml.get_sha1_hash() {
            Some(h) => h.to_string(),
            None => {
                skipped += 1;
                continue;
            }
        };

        // Query Modrinth API
        match fetch_version_from_hash(&client, &sha1_hash).await {
            Ok(Some(version_data)) => {
                // Hash match means it's the exact same file - migrate without any version checks
                // The file already works (it's from CurseForge pack), hash identity is proof enough
                match migrate_file(path, &content, &version_data).await {
                    Ok(_) => {
                        migrated += 1;
                        println!("  [{}/{}] MIGRATED: {}", i + 1, total, path.file_stem().unwrap_or_default().to_string_lossy());
                    }
                    Err(e) => {
                        errors.push((path.clone(), e.to_string()));
                        println!("  [{}/{}] ERROR {}: {}", i + 1, total, path.file_stem().unwrap_or_default().to_string_lossy(), e);
                    }
                }
            }
            Ok(None) => {
                skipped += 1;
                println!("  [{}/{}] NOT FOUND: {}", i + 1, total, path.file_stem().unwrap_or_default().to_string_lossy());
            }
            Err(e) => {
                errors.push((path.clone(), e.to_string()));
                println!("  [{}/{}] API ERROR {}: {}", i + 1, total, path.file_stem().unwrap_or_default().to_string_lossy(), e);
            }
        }

        // Rate limiting
        sleep(Duration::from_millis(rate_limit_ms)).await;
    }

    println!("  Conversion complete: {} migrated, {} skipped", migrated, skipped);
    if !errors.is_empty() {
        println!("  {} errors occurred", errors.len());
    }

    Ok((migrated, skipped, errors))
}

async fn fetch_version_from_hash(
    client: &reqwest::Client,
    sha1_hash: &str,
) -> Result<Option<ModrinthVersion>> {
    let url = format!("{}/version_file/{}?algorithm=sha1", API_BASE, sha1_hash);
    
    let response = client
        .get(&url)
        .header("User-Agent", USER_AGENT)
        .timeout(Duration::from_secs(15))
        .send()
        .await?;

    if response.status() == 404 {
        return Ok(None);
    }

    if !response.status().is_success() {
        anyhow::bail!("Modrinth API returned status: {}", response.status());
    }

    let version_data: ModrinthVersion = response.json().await?;
    Ok(Some(version_data))
}

async fn migrate_file(
    path: &Path,
    original_content: &str,
    version_data: &ModrinthVersion,
) -> Result<()> {
    use crate::models::PwToml;
    
    // Parse the original file
    let mut pw_toml: PwToml = toml::from_str(original_content)?;
    
    // Convert to Modrinth format
    pw_toml.convert_to_modrinth(version_data)?;
    
    // Build TOML manually to match packwiz format exactly
    let mut output = String::new();
    
    // Basic fields
    output.push_str(&format!("name = \"{}\"\n", pw_toml.name));
    output.push_str(&format!("filename = \"{}\"\n", pw_toml.filename));
    output.push_str(&format!("side = \"{}\"\n", pw_toml.side));
    output.push('\n');
    
    // Download section
    output.push_str("[download]\n");
    if let Some(ref url) = pw_toml.download.url {
        output.push_str(&format!("url = \"{}\"\n", url));
    }
    output.push_str(&format!("hash-format = \"{}\"\n", pw_toml.download.hash_format));
    output.push_str(&format!("hash = \"{}\"\n", pw_toml.download.hash));
    output.push('\n');
    
    // Update section
    if let Some(ref update) = pw_toml.update {
        output.push_str("[update]\n");
        if let Some(ref mr) = update.modrinth {
            output.push_str("[update.modrinth]\n");
            output.push_str(&format!("mod-id = \"{}\"\n", mr.mod_id));
            output.push_str(&format!("version = \"{}\"\n", mr.version));
        }
        if let Some(ref cf) = update.curseforge {
            output.push_str("[update.curseforge]\n");
            output.push_str(&format!("file-id = {}\n", cf.file_id));
            output.push_str(&format!("project-id = {}\n", cf.project_id));
        }
    }
    
    // Write back to file
    tokio::fs::write(path, output).await?;
    
    Ok(())
}
