use crate::models::{PwToml, SideAnalysis, VersionMismatch};
use anyhow::Result;
use regex::Regex;
use std::collections::{HashMap, HashSet};
use std::path::{Path, PathBuf};
use walkdir::WalkDir;

/// Strip version numbers from a mod filename to get the base name
fn strip_version(filename: &str) -> String {
    // Common patterns:
    // - mod-1.20.1-1.2.3.jar
    // - mod-forge-1.20.1-1.2.3.jar
    // - mod-1.2.3.jar
    // Try to find where version starts (usually after the first - followed by a digit)
    
    let re = Regex::new(r"^(.*?)(?:-[vV]?\d+[\.\-\d]*.*)?\.jar$").unwrap();
    
    if let Some(caps) = re.captures(filename) {
        if let Some(base) = caps.get(1) {
            return base.as_str().to_string();
        }
    }
    
    // Fallback: just remove .jar
    filename.trim_end_matches(".jar").to_string()
}

/// Analyze mods and determine which are client vs server side
pub fn analyze_sides(
    server_filenames: &HashSet<String>,
    client_filenames: &HashSet<String>,
) -> SideAnalysis {
    let server_only: HashSet<String> = server_filenames
        .difference(client_filenames)
        .cloned()
        .collect();
    
    let client_only: HashSet<String> = client_filenames
        .difference(server_filenames)
        .cloned()
        .collect();
    
    let both: HashSet<String> = server_filenames
        .intersection(client_filenames)
        .cloned()
        .collect();

    // Build a map of base name -> original filename for client mods
    let client_base_map: HashMap<String, String> = client_filenames
        .iter()
        .map(|f| (strip_version(f), f.clone()))
        .collect();

    // Find version mismatches
    let mut mismatches: Vec<VersionMismatch> = Vec::new();

    for server_file in &server_only {
        let server_base = strip_version(server_file);
        
        // Check if any client mod has the same base name
        if let Some(client_file) = client_base_map.get(&server_base) {
            if client_file != server_file {
                mismatches.push(VersionMismatch {
                    server_filename: server_file.clone(),
                    client_filename: client_file.clone(),
                    base_name: server_base,
                });
            }
        }
    }

    SideAnalysis {
        server_mods: server_only,
        client_mods: client_only,
        both_mods: both,
        mismatches,
    }
}

/// Update side assignments in .pw.toml files based on analysis
pub async fn update_sides(
    pack_dir: &Path,
    analysis: &SideAnalysis,
    user_decisions: &HashMap<String, String>,
) -> Result<(usize, usize)> {
    let mods_dir = pack_dir.join("mods");
    let mut updated = 0;
    let mut unchanged = 0;

    if !mods_dir.exists() {
        return Ok((0, 0));
    }

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

    for path in pw_files {
        let content = tokio::fs::read_to_string(&path).await?;
        let mut pw_toml: PwToml = toml::from_str(&content)?;
        
        let filename = &pw_toml.filename;
        let current_side = &pw_toml.side;
        let mut new_side: Option<&str> = None;

        // Check if in both (server mod)
        if analysis.both_mods.contains(filename) {
            new_side = Some("server");
        }
        // Check if client only
        else if analysis.client_mods.contains(filename) {
            new_side = Some("client");
        }
        // Check if server only (with exact match)
        else if analysis.server_mods.contains(filename) {
            new_side = Some("server");
        }
        // Check user decisions for mismatches
        else if let Some(decision) = user_decisions.get(filename) {
            new_side = Some(decision);
        }

        // Update if needed
        if let Some(side) = new_side {
            if current_side != side {
                pw_toml.side = side.to_string();
                
                // Serialize and write back
                let new_content = toml::to_string_pretty(&pw_toml)?;
                tokio::fs::write(&path, new_content).await?;
                
                updated += 1;
                println!("    Updated {} -> side = \"{}\"", path.file_stem().unwrap_or_default().to_string_lossy(), side);
            } else {
                unchanged += 1;
            }
        } else {
            unchanged += 1;
        }
    }

    Ok((updated, unchanged))
}
