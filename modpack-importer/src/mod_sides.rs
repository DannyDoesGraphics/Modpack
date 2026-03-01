use crate::models::{SideAnalysis, VersionMismatch, UserDecision};
use anyhow::{Context, Result};
use regex::Regex;
use std::collections::HashMap;
use std::path::Path;
use walkdir::WalkDir;

/// Extract mod core identifier (same logic as analyze_sides)
fn extract_mod_core(filename: &str) -> String {
    let name = filename.trim_end_matches(".jar");
    let parts: Vec<&str> = name.split('-').collect();

    // Known loader and version indicator keywords to exclude
    let loaders = ["forge", "fabric", "quilt", "neoforge", "universal"];

    // Take parts until we hit a loader or something that looks like a version (starts with digit)
    let core_parts: Vec<&str> = parts
        .iter()
        .take_while(|part| {
            let lower = part.to_lowercase();
            !loaders.contains(&lower.as_str()) && !part.chars().next().map(|c| c.is_ascii_digit()).unwrap_or(false)
        })
        .copied()
        .collect();

    // Join the core parts (e.g., "letsdo-nethervinery" or "ftb-xmod-compat")
    core_parts.join("-").to_lowercase()
}

/// Update side assignments in .pw.toml files based on analysis
pub async fn update_sides(
    pack_dir: &Path,
    analysis: &SideAnalysis,
    user_decisions: &HashMap<String, UserDecision>,
) -> Result<(usize, usize)> {
    let mods_dir = pack_dir.join("mods");
    let mut updated = 0;
    let mut unchanged = 0;

    if !mods_dir.exists() {
        return Ok((0, 0));
    }

    for entry in WalkDir::new(&mods_dir).max_depth(1) {
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

        let filename = path.file_stem()
            .and_then(|s| s.to_str())
            .unwrap_or("")
            .replace(".pw", "");

        // Determine the new side
        let new_side = if analysis.server_mods.contains(&filename) {
            "server"
        } else if analysis.client_mods.contains(&filename) {
            "client"
        } else {
            "both"
        };

        // Check for version mismatches using same logic as analyze_sides
        let base_name = extract_mod_core(&filename);
        let mismatch = analysis.mismatches.iter()
            .find(|m| m.base_name.to_lowercase() == base_name);

        let final_side = if let Some(mismatch) = mismatch {
            if let Some(decision) = user_decisions.get(&mismatch.base_name) {
                if decision.use_server {
                    "server"
                } else if decision.use_client {
                    "client"
                } else {
                    "both"
                }
            } else {
                new_side
            }
        } else {
            new_side
        };

        // Read and check current side using regex to preserve all formatting
        let content = tokio::fs::read_to_string(path).await?;

        // Extract current side value using regex
        let side_regex = Regex::new(r#"(?m)^side\s*=\s*"([^"]+)""#).unwrap();
        let current_side = side_regex
            .captures(&content)
            .and_then(|c| c.get(1))
            .map(|m| m.as_str())
            .unwrap_or("both");

        if current_side == final_side {
            unchanged += 1;
            continue;
        }

        // Replace side value using regex to preserve all formatting including [update] headers
        let new_content = side_regex.replace(&content, format!(r#"side = "{}""#, final_side));

        // Write back
        tokio::fs::write(path, new_content.as_ref()).await
            .with_context(|| format!("Failed to write: {}", path.display()))?;

        updated += 1;
    }

    Ok((updated, unchanged))
}

/// Analyze client/server sides based on mod filenames
/// Logic: A (server) AND B (client) => Server
///        B - A (client only) => Client
pub fn analyze_sides(
    server_filenames: &std::collections::HashSet<String>,
    client_filenames: &std::collections::HashSet<String>,
) -> SideAnalysis {
    let server_set = server_filenames.clone();
    let client_set = client_filenames.clone();

    let mut server_mods = std::collections::HashSet::new();
    let mut client_mods = std::collections::HashSet::new();
    let mut mismatches = Vec::new();

    // Server mods: ANYTHING in server zip (A)
    // This includes mods that are in both A and B
    for filename in &server_set {
        server_mods.insert(filename.clone());
    }

    // Client mods: Only things in client (B) that are NOT in server (A)
    for filename in &client_set {
        if !server_set.contains(filename) {
            client_mods.insert(filename.clone());
        }
    }

    // Find version mismatches using core mod identifier
    // A mod is a mismatch if same core ID exists in both but different versions
    let mut server_by_core: HashMap<String, String> = HashMap::new();
    for filename in &server_set {
        let core = extract_mod_core(filename);
        server_by_core.entry(core.clone()).or_insert_with(|| filename.clone());
    }

    for client_filename in &client_set {
        let core = extract_mod_core(client_filename);
        if let Some(server_filename) = server_by_core.get(&core) {
            if server_filename != client_filename {
                mismatches.push(VersionMismatch {
                    server_filename: server_filename.clone(),
                    client_filename: client_filename.clone(),
                    base_name: core,
                });
            }
        }
    }

    SideAnalysis {
        server_mods,
        client_mods,
        both_mods: std::collections::HashSet::new(), // Always empty per user logic
        mismatches,
    }
}
