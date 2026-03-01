use anyhow::{Context, Result};
use serde::{Deserialize, Serialize};
use std::path::{Path, PathBuf};
use std::time::Duration;
use tokio::time::sleep;
use walkdir::WalkDir;

use crate::models::PwToml;

// CurseForge API configuration (matching packwiz-installer)
const CURSEFORGE_API_SERVER: &str = "api.curseforge.com";
// Base64 encoded API key from packwiz-installer source
const CURSEFORGE_API_KEY: &str = "JDJhJDEwJHNBWVhqblU1N0EzSmpzcmJYM3JVdk92UWk2NHBLS3BnQ2VpbGc1TUM1UGNKL0RYTmlGWWxh";

// Base delay between different mods (very short)
const BASE_DELAY_MS: u64 = 50;
// Initial retry delay for exponential backoff
const INITIAL_RETRY_DELAY_MS: u64 = 100;
// Maximum delay between retries (cap)
const MAX_RETRY_DELAY_MS: u64 = 30000; // 30 seconds max

/// Represents a .pw.toml file found in the pack
#[derive(Debug, Clone)]
pub struct PwTomlFile {
    pub path: PathBuf,
    pub content: PwToml,
}

/// Represents a CurseForge mod that needs API download check
#[derive(Debug, Clone)]
pub struct CfModInfo {
    pub pw_path: PathBuf,
    pub filename: String,
    pub file_id: u64,
    pub project_id: u64,
}

/// Represents a failed download that needs manual intervention
#[derive(Debug, Clone)]
pub struct FailedMod {
    pub pw_path: PathBuf,
    pub filename: String,
    pub file_id: u64,
    pub project_id: u64,
    pub reason: String,
}

// CurseForge API request/response types (matching packwiz-installer)
#[derive(Serialize)]
struct GetFilesRequest {
    fileIds: Vec<u64>,
}

#[derive(Deserialize)]
struct GetFilesResponse {
    data: Vec<CfFile>,
}

#[derive(Deserialize)]
struct CfFile {
    id: u64,
    #[serde(rename = "modId")]
    mod_id: u64,
    downloadUrl: Option<String>,
}

#[derive(Serialize)]
struct GetModsRequest {
    modIds: Vec<u64>,
}

#[derive(Deserialize)]
struct GetModsResponse {
    data: Vec<CfMod>,
}

#[derive(Deserialize)]
struct CfMod {
    id: u64,
    name: String,
    links: Option<CfLinks>,
}

#[derive(Deserialize)]
struct CfLinks {
    websiteUrl: String,
}

/// Decode the base64 API key (matches packwiz-installer)
fn get_curseforge_api_key() -> String {
    use base64::Engine;
    let decoded = base64::engine::general_purpose::STANDARD
        .decode(CURSEFORGE_API_KEY)
        .unwrap_or_default();
    String::from_utf8(decoded).unwrap_or_default()
}

/// Phase 1: Discover all .pw.toml files in the pack directory (recursive)
/// This is exported for use by other modules
pub fn discover_pwtoml_files(dir: &Path) -> Result<Vec<PwTomlFile>> {
    let mut files = Vec::new();

    if !dir.exists() {
        return Ok(files);
    }

    for entry in WalkDir::new(dir) {
        let entry = entry?;
        if !entry.file_type().is_file() {
            continue;
        }

        let path = entry.path();
        if path.extension().map(|e| e != "toml").unwrap_or(true) {
            continue;
        }
        if !path.to_string_lossy().ends_with(".pw.toml") {
            continue;
        }

        // Try to parse the file
        let content = match std::fs::read_to_string(path) {
            Ok(c) => c,
            Err(_) => continue,
        };

        let pw_toml: PwToml = match toml::from_str(&content) {
            Ok(p) => p,
            Err(_) => continue,
        };

        files.push(PwTomlFile {
            path: path.to_path_buf(),
            content: pw_toml,
        });
    }

    Ok(files)
}

/// Filter to only CurseForge mods that need API download (no URL)
pub fn filter_curseforge_mods(files: Vec<PwTomlFile>) -> Vec<CfModInfo> {
    files
        .into_iter()
        .filter_map(|file| {
            // Must be CurseForge mode
            if !file.content.is_curseforge() {
                return None;
            }

            // Must not have a direct URL (needs API download)
            if file.content.download.url.is_some() {
                return None;
            }

            // Extract CurseForge IDs
            let cf = file.content.update?.curseforge?;

            Some(CfModInfo {
                pw_path: file.path,
                filename: file.content.filename,
                file_id: cf.file_id,
                project_id: cf.project_id,
            })
        })
        .collect()
}

/// Phase 2: Check which CurseForge mods are available via API
/// Uses CurseForge API (like packwiz-installer) to check downloadUrl availability
/// Returns Vec<FailedMod> containing mods that need manual download
pub async fn check_curseforge_downloads(mods: Vec<CfModInfo>) -> Result<Vec<FailedMod>> {
    let total = mods.len();

    if total == 0 {
        return Ok(vec![]);
    }

    println!("Checking {} CurseForge files via API...", total);

    // Use CurseForge API to check availability (matches packwiz-installer behavior)
    let (api_available, needs_manual) = check_curseforge_api(mods).await?;

    println!("  {} mods available via API", api_available.len());
    if !needs_manual.is_empty() {
        println!("  {} mods need manual download", needs_manual.len());
        for m in &needs_manual {
            println!("    - {}: {}", m.filename, m.reason);
        }
    }

    Ok(needs_manual)
}

/// Phase 3: Download failed mods manually with exponential backoff
/// Returns (number_downloaded, list of still-failed mods)
pub async fn download_failed_mods(mods: Vec<FailedMod>) -> Result<(usize, Vec<(String, String)>)> {
    let total = mods.len();

    if total == 0 {
        return Ok((0, vec![]));
    }

    println!("\nDownloading {} failed mods...", total);

    let client = reqwest::Client::new();
    let mut downloaded = 0;
    let mut still_failed = Vec::new();

    for (i, failed) in mods.iter().enumerate() {
        // Put the downloaded file in the same directory as the .pw.toml file
        let output_path = failed.pw_path.parent()
            .map(|p| p.join(&failed.filename))
            .unwrap_or_else(|| failed.pw_path.with_file_name(&failed.filename));

        println!(
            "  [{}/{}] Downloading {}...",
            i + 1,
            total,
            failed.filename
        );

        // Skip if already exists
        if output_path.exists() {
            println!("    -> Already exists, removing .pw.toml");
            if let Err(e) = tokio::fs::remove_file(&failed.pw_path).await {
                still_failed.push((failed.filename.clone(), format!("Failed to remove .pw.toml: {}", e)));
            } else {
                downloaded += 1;
            }
            continue;
        }

        // Construct CDN URL and download with infinite exponential backoff
        let url = construct_cdn_url(failed.file_id, &failed.filename);
        match download_from_url(&client, &url, &output_path).await {
            Ok(_) => {
                // Delete the .pw.toml file after successful download
                if let Err(e) = tokio::fs::remove_file(&failed.pw_path).await {
                    still_failed.push((failed.filename.clone(), format!("Downloaded but failed to remove .pw.toml: {}", e)));
                } else {
                    println!("    -> Downloaded and replaced .pw.toml");
                    downloaded += 1;
                }
            }
            Err(_e) => {
                // This should rarely happen now with infinite retries
                eprintln!("    -> ERROR (giving up after retries): {}", _e);
                still_failed.push((failed.filename.clone(), _e.to_string()));
            }
        }

        // Very short delay between different mods
        if i < total - 1 {
            sleep(Duration::from_millis(BASE_DELAY_MS)).await;
        }
    }

    println!("\nDownload complete: {} succeeded, {} failed", downloaded, still_failed.len());

    Ok((downloaded, still_failed))
}

/// Combined convenience function: discover → check → download
/// Returns (number_downloaded, list of failed)
pub async fn download_failing_mods(dir: &Path) -> Result<(usize, Vec<(String, String)>)> {
    // Phase 1: Discover all .pw.toml files
    let all_files = discover_pwtoml_files(dir)?;

    if all_files.is_empty() {
        println!("No .pw.toml files found in {}", dir.display());
        return Ok((0, vec![]));
    }

    // Filter to CurseForge mods needing API download
    let cf_mods = filter_curseforge_mods(all_files);

    if cf_mods.is_empty() {
        println!("No CurseForge-mode files need manual download in {}", dir.display());
        return Ok((0, vec![]));
    }

    // Phase 2: Check which ones fail
    let failed = check_curseforge_downloads(cf_mods).await?;

    if failed.is_empty() {
        println!("\nAll CurseForge mods can be downloaded via API!");
        return Ok((0, vec![]));
    }

    // Phase 3: Download the failed ones
    download_failed_mods(failed).await
}

/// Test mode: discover → check only, return list of failing mods
pub async fn test_curseforge_downloads(dir: &Path) -> Result<Vec<(String, String)>> {
    // Phase 1: Discover
    let all_files = discover_pwtoml_files(dir)?;

    if all_files.is_empty() {
        println!("No .pw.toml files found in {}", dir.display());
        return Ok(vec![]);
    }

    // Filter to CurseForge mods
    let cf_mods = filter_curseforge_mods(all_files);

    if cf_mods.is_empty() {
        println!("No CurseForge-mode files found in {}", dir.display());
        return Ok(vec![]);
    }

    // Phase 2: Check
    let failed = check_curseforge_downloads(cf_mods).await?;

    // Convert to (filename, reason) format for backwards compatibility
    Ok(failed.into_iter().map(|f| (f.filename, f.reason)).collect())
}

/// Check CurseForge mod availability using the official CurseForge API
/// Returns (mods_with_api_url, mods_needing_manual_download)
async fn check_curseforge_api(mods: Vec<CfModInfo>) -> Result<(Vec<CfModInfo>, Vec<FailedMod>)> {
    if mods.is_empty() {
        return Ok((vec![], vec![]));
    }

    let client = reqwest::Client::new();
    let api_key = get_curseforge_api_key();

    // Build request to get file info
    let file_ids: Vec<u64> = mods.iter().map(|m| m.file_id).collect();
    let request_body = GetFilesRequest { fileIds: file_ids };

    let url = format!("https://{}/v1/mods/files", CURSEFORGE_API_SERVER);

    let response = retry_forever(|| async {
        client
            .post(&url)
            .header("Accept", "application/json")
            .header("User-Agent", "packwiz-installer/0.1.0")
            .header("X-API-Key", &api_key)
            .json(&request_body)
            .timeout(Duration::from_secs(30))
            .send()
            .await
            .map_err(|e| anyhow::anyhow!("Failed to call CurseForge API: {}", e))
    }).await;

    let files_response: GetFilesResponse = response
        .json()
        .await
        .context("Failed to parse CurseForge API response")?;

    // Create lookup maps
    let mod_map: std::collections::HashMap<u64, &CfModInfo> =
        mods.iter().map(|m| (m.file_id, m)).collect();

    let mut api_available = Vec::new();
    let mut needs_manual = Vec::new();
    let mut manual_by_project: std::collections::HashMap<u64, Vec<u64>> = std::collections::HashMap::new();

    // Check for any files that didn't appear in the response at all (e.g. shaderpacks)
    let found_ids: std::collections::HashSet<u64> =
        files_response.data.iter().map(|f| f.id).collect();

    for file in &files_response.data {
        if let Some(cf_mod) = mod_map.get(&file.id) {
            if file.downloadUrl.is_some() {
                // API has a download URL - packwiz-installer can use this
                api_available.push((*cf_mod).clone());
            } else {
                // downloadUrl is null - mod is excluded from API, needs manual download
                manual_by_project.entry(file.mod_id).or_default().push(file.id);
            }
        }
    }

    for (file_id, cf_mod) in &mod_map {
        if !found_ids.contains(file_id) {
            manual_by_project.entry(cf_mod.project_id).or_default().push(*file_id);
        }
    }

    // If there are mods needing manual download, get mod info for URLs
    if !manual_by_project.is_empty() {
        let project_ids: Vec<u64> = manual_by_project.keys().copied().collect();
        let mods_request = GetModsRequest { modIds: project_ids };

        let mods_url = format!("https://{}/v1/mods", CURSEFORGE_API_SERVER);

        let mods_response = retry_forever(|| async {
            client
                .post(&mods_url)
                .header("Accept", "application/json")
                .header("User-Agent", "packwiz-installer/0.1.0")
                .header("X-API-Key", &api_key)
                .json(&mods_request)
                .timeout(Duration::from_secs(30))
                .send()
                .await
                .map_err(|e| anyhow::anyhow!("Failed to call CurseForge mods API: {}", e))
        }).await;

        let mods_data: GetModsResponse = mods_response
            .json()
            .await
            .context("Failed to parse CurseForge mods API response")?;

        let mod_info_map: std::collections::HashMap<u64, CfMod> =
            mods_data.data.into_iter().map(|m| (m.id, m)).collect();

        for (project_id, file_ids) in manual_by_project {
            if let Some(mod_info) = mod_info_map.get(&project_id) {
                let base_url = mod_info.links.as_ref().map(|l| l.websiteUrl.clone())
                    .unwrap_or_else(|| format!("https://www.curseforge.com/projects/{}", project_id));

                for file_id in file_ids {
                    if let Some(cf_mod) = mod_map.get(&file_id) {
                        let manual_url = format!("{}/files/{}", base_url, file_id);
                        needs_manual.push(FailedMod {
                            pw_path: cf_mod.pw_path.clone(),
                            filename: cf_mod.filename.clone(),
                            file_id: cf_mod.file_id,
                            project_id: cf_mod.project_id,
                            reason: format!("Excluded from CurseForge API - download manually from {}", manual_url),
                        });
                    }
                }
            } else {
                // Mod info not found, still mark as needing manual
                for file_id in file_ids {
                    if let Some(cf_mod) = mod_map.get(&file_id) {
                        needs_manual.push(FailedMod {
                            pw_path: cf_mod.pw_path.clone(),
                            filename: cf_mod.filename.clone(),
                            file_id: cf_mod.file_id,
                            project_id: cf_mod.project_id,
                            reason: "Excluded from CurseForge API (mod info not found)".to_string(),
                        });
                    }
                }
            }
        }
    }

    Ok((api_available, needs_manual))
}

/// Retry forever with exponential backoff until operation succeeds
async fn retry_forever<F, Fut, T>(operation: F) -> T
where
    F: Fn() -> Fut,
    Fut: std::future::Future<Output = Result<T, anyhow::Error>>,
{
    let mut attempt = 0u32;
    let mut delay_ms = INITIAL_RETRY_DELAY_MS;

    loop {
        attempt += 1;

        match operation().await {
            Ok(result) => return result,
            Err(_e) => {
                // Exponential backoff: double the delay each attempt, cap at MAX
                delay_ms = (delay_ms * 2).min(MAX_RETRY_DELAY_MS);

                // Add jitter (±25%) to prevent synchronized retries
                let jitter_range = (delay_ms as f64 * 0.25) as i64;
                let jitter = fastrand::i64(-jitter_range..=jitter_range);
                let actual_delay = (delay_ms as i64 + jitter).max(50) as u64;

                eprintln!("    -> Attempt {} failed, retrying in {}ms...", attempt, actual_delay);
                sleep(Duration::from_millis(actual_delay)).await;

                // Continue loop - infinite retries
            }
        }
    }
}

/// Construct CurseForge CDN URL from file_id
fn construct_cdn_url(file_id: u64, filename: &str) -> String {
    let file_id_str = file_id.to_string();
    if file_id_str.len() <= 4 {
        format!("https://edge.forgecdn.net/files/0/{}/{}", file_id, filename)
    } else {
        let (first, rest) = file_id_str.split_at(4);
        format!(
            "https://edge.forgecdn.net/files/{}/{}/{}",
            first, rest, filename
        )
    }
}


/// Download file from URL to output path with infinite exponential backoff
async fn download_from_url(
    client: &reqwest::Client,
    url: &str,
    output_path: &Path,
) -> Result<()> {
    let bytes = retry_forever(|| async {
        let response = client
            .get(url)
            .header(
                "User-Agent",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            )
            .timeout(Duration::from_secs(60))
            .send()
            .await
            .with_context(|| format!("Failed to send request to {}", url))?;

        if !response.status().is_success() {
            anyhow::bail!("HTTP error: {}", response.status());
        }

        let bytes = response
            .bytes()
            .await
            .context("Failed to read response body")?;

        Ok::<Vec<u8>, anyhow::Error>(bytes.to_vec())
    }).await;

    tokio::fs::write(output_path, bytes)
        .await
        .with_context(|| format!("Failed to write file: {}", output_path.display()))?;

    Ok(())
}

/// Download a specific mod by filename (searching entire pack)
/// Returns Ok(true) if successful, Ok(false) if not found
pub async fn download_specific_mod(dir: &Path, filename: &str) -> Result<bool> {
    // Phase 1: Discover
    let all_files = discover_pwtoml_files(dir)?;

    // Filter to CurseForge
    let cf_mods = filter_curseforge_mods(all_files);

    // Find matching mod
    let cf_mod = cf_mods.iter().find(|m| {
        m.filename == filename || m.filename.replace("-", "_").replace(" ", "_") == filename
    });

    let cf_mod = match cf_mod {
        Some(m) => m,
        None => return Ok(false),
    };

    // Convert to FailedMod and download
    let failed = FailedMod {
        pw_path: cf_mod.pw_path.clone(),
        filename: cf_mod.filename.clone(),
        file_id: cf_mod.file_id,
        project_id: cf_mod.project_id,
        reason: "Specific mod request".to_string(),
    };

    let (downloaded, _) = download_failed_mods(vec![failed]).await?;
    Ok(downloaded > 0)
}
