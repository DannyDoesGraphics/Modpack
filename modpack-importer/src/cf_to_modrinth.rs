use crate::download_cf_mods::{filter_curseforge_mods, PwTomlFile};
use crate::models::{ModrinthVersion, PwToml};
use anyhow::{Context, Result};
use regex::Regex;
use std::path::{Path, PathBuf};
use std::time::Duration;
use tokio::time::sleep;

const API_BASE: &str = "https://api.modrinth.com/v2";
const USER_AGENT: &str = "modpack-importer/0.1.0 (packwiz modrinth migration)";

/// Convert CurseForge mods to Modrinth where possible
/// Takes pre-discovered .pw.toml files to avoid duplicate filesystem scanning
pub async fn convert_curseforge_to_modrinth(
    all_pwtoml_files: Vec<PwTomlFile>,
    rate_limit_ms: u64,
) -> Result<(usize, usize, Vec<(PathBuf, String)>)> {
    let mut migrated = 0;
    let mut skipped = 0;
    let mut errors: Vec<(PathBuf, String)> = vec![];

    // Filter to only CurseForge mods
    let cf_mods = filter_curseforge_mods(all_pwtoml_files);

    let total = cf_mods.len();
    if total == 0 {
        println!("  No CurseForge mods found to migrate");
        return Ok((0, 0, vec![]));
    }
    println!("  Found {} CurseForge mods to process", total);

    let client = reqwest::Client::new();

    for (i, cf_mod) in cf_mods.iter().enumerate() {
        let path = &cf_mod.pw_path;
        let content = match tokio::fs::read_to_string(path).await {
            Ok(c) => c,
            Err(e) => {
                errors.push((path.clone(), format!("Failed to read: {}", e)));
                continue;
            }
        };

        // Parse to get SHA1 hash
        let pw_toml: PwToml = match toml::from_str(&content) {
            Ok(p) => p,
            Err(e) => {
                println!("  [{}/{}] PARSE ERROR {}: {}", i + 1, total, path.display(), e);
                skipped += 1;
                continue;
            }
        };

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

    // Parse the original file to get the new values
    let mut pw_toml: PwToml = toml::from_str(original_content)?;

    // Convert to Modrinth format (computes new values)
    pw_toml.convert_to_modrinth(version_data)?;

    // Use regex replacements to preserve packwiz's original formatting
    let mut new_content = original_content.to_string();

    // Update filename
    let filename_regex = Regex::new(r#"(?m)^filename\s*=\s*"[^"]*""#).unwrap();
    new_content = filename_regex
        .replace(&new_content, format!(r#"filename = "{}""#, pw_toml.filename))
        .to_string();

    // Update or add URL in download section
    let url_regex = Regex::new(r#"(?m)^url\s*=\s*"[^"]*""#).unwrap();
    if let Some(ref url) = pw_toml.download.url {
        if url_regex.is_match(&new_content) {
            // Replace existing URL
            new_content = url_regex
                .replace(&new_content, format!(r#"url = "{}""#, url))
                .to_string();
        } else {
            // Add URL after [download] header if missing
            let download_regex = Regex::new(r"(?m)^\[download\]$").unwrap();
            if let Some(mat) = download_regex.find(&new_content) {
                let insert_pos = mat.end();
                new_content.insert_str(insert_pos, &format!("\nurl = \"{}\"", url));
            }
        }
    }

    // Update hash-format
    let hash_format_regex = Regex::new(r#"(?m)^hash-format\s*=\s*"[^"]*""#).unwrap();
    new_content = hash_format_regex
        .replace(&new_content, format!(r#"hash-format = "{}""#, pw_toml.download.hash_format))
        .to_string();

    // Update hash
    let hash_regex = Regex::new(r#"(?m)^hash\s*=\s*"[^"]*""#).unwrap();
    new_content = hash_regex
        .replace(&new_content, format!(r#"hash = "{}""#, pw_toml.download.hash))
        .to_string();

    // Remove mode field if it exists (not needed for Modrinth)
    if pw_toml.download.mode.is_none() {
        let mode_regex = Regex::new(r#"(?m)^mode\s*=\s*"[^"]*"\n?"#).unwrap();
        new_content = mode_regex.replace(&new_content, "").to_string();
    }

    // Replace or add [update] section with Modrinth info
    if let Some(ref update) = pw_toml.update {
        if let Some(ref mr) = update.modrinth {
            // Remove old [update.curseforge] section if present
            let curseforge_section_regex =
                Regex::new(r"(?m)^\[update\.curseforge\]\n(?:file-id\s*=\s*\d+\n?)(?:project-id\s*=\s*\d+\n?)").unwrap();
            new_content = curseforge_section_regex.replace(&new_content, "").to_string();

            // Check if [update] section exists
            let update_section_regex = Regex::new(r"(?m)^\[update\]$").unwrap();
            let modrinth_section_regex = Regex::new(r"(?m)^\[update\.modrinth\]$").unwrap();

            if modrinth_section_regex.is_match(&new_content) {
                // Update existing modrinth section
                let mod_id_regex = Regex::new(r#"(?m)^mod-id\s*=\s*"[^"]*""#).unwrap();
                new_content = mod_id_regex
                    .replace(&new_content, format!(r#"mod-id = "{}""#, mr.mod_id))
                    .to_string();

                let version_regex = Regex::new(r#"(?m)^version\s*=\s*"[^"]*""#).unwrap();
                new_content = version_regex
                    .replace(&new_content, format!(r#"version = "{}""#, mr.version))
                    .to_string();
            } else if update_section_regex.is_match(&new_content) {
                // Add modrinth section after [update]
                let update_match = update_section_regex.find(&new_content).unwrap();
                let insert_pos = update_match.end();
                new_content.insert_str(
                    insert_pos,
                    &format!(
                        "\n[update.modrinth]\nmod-id = \"{}\"\nversion = \"{}\"",
                        mr.mod_id, mr.version
                    ),
                );
            } else {
                // Add entire update section at end
                new_content.push_str(&format!(
                    "\n[update]\n[update.modrinth]\nmod-id = \"{}\"\nversion = \"{}\"",
                    mr.mod_id, mr.version
                ));
            }
        }
    }

    // Write back to file
    tokio::fs::write(path, new_content).await?;

    Ok(())
}
