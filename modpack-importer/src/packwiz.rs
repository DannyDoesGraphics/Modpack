use crate::override_handler;
use anyhow::{Context, Result};
use std::env;
use std::fs;
use std::path::{Path, PathBuf};
use std::process::Command;

/// Find the packwiz executable in PATH or common locations
fn find_packwiz() -> Option<PathBuf> {
    // First try the PATH directly
    if let Ok(output) = Command::new("packwiz").arg("--help").output() {
        if output.status.success() || !output.stdout.is_empty() {
            return Some(PathBuf::from("packwiz"));
        }
    }

    // Check common installation directories
    #[cfg(windows)]
    let common_paths: Vec<PathBuf> = vec![
        PathBuf::from("C:\\Users\\danny\\go\\bin\\packwiz.exe"),
    ];

    #[cfg(not(windows))]
    let common_paths: Vec<PathBuf> = vec![
        PathBuf::from("/usr/local/bin/packwiz"),
        PathBuf::from("/usr/bin/packwiz"),
        PathBuf::from("/home/danny/go/bin/packwiz"),
    ];

    // Add GOPATH/bin if set
    if let Ok(gopath) = env::var("GOPATH") {
        let mut path = PathBuf::from(gopath);
        path.push("bin");
        path.push(if cfg!(windows) { "packwiz.exe" } else { "packwiz" });
        if path.exists() {
            return Some(path);
        }
    }

    // Check home directory
    if let Ok(home) = env::var("HOME") {
        let mut path = PathBuf::from(home);
        path.push("go");
        path.push("bin");
        path.push(if cfg!(windows) { "packwiz.exe" } else { "packwiz" });
        if path.exists() {
            return Some(path);
        }
    }

    #[cfg(windows)]
    if let Ok(userprofile) = env::var("USERPROFILE") {
        let mut path = PathBuf::from(userprofile);
        path.push("go");
        path.push("bin");
        path.push("packwiz.exe");
        if path.exists() {
            return Some(path);
        }
    }

    // Check common paths
    for path in &common_paths {
        if path.exists() {
            return Some(path.clone());
        }
    }

    // Search through PATH environment variable
    if let Ok(path_var) = env::var("PATH") {
        let separator = if cfg!(windows) { ';' } else { ':' };
        let exe_name = if cfg!(windows) { "packwiz.exe" } else { "packwiz" };
        for dir in path_var.split(separator) {
            let packwiz_path = PathBuf::from(dir).join(exe_name);
            if packwiz_path.exists() {
                return Some(packwiz_path);
            }
        }
    }

    None
}

fn get_packwiz_cmd() -> Command {
    match find_packwiz() {
        Some(path) => Command::new(path),
        None => Command::new("packwiz"),
    }
}

/// Run packwiz cf import for a zip file
pub fn import_curseforge_zip(pack_file: &Path, zip_path: &Path) -> Result<()> {
    let pack_dir = pack_file
        .parent()
        .context("Pack file must have a parent directory")?;
    let pack_file_name = pack_file
        .file_name()
        .and_then(|n| n.to_str())
        .unwrap_or("pack.toml");

    println!(
        "  Importing {}...",
        zip_path.file_stem().unwrap_or_default().to_string_lossy()
    );

    // Convert zip path to absolute since we're changing working directory
    let zip_absolute = zip_path
        .canonicalize()
        .with_context(|| format!("Failed to resolve zip path: {}", zip_path.display()))?;

    let mut cmd = get_packwiz_cmd();
    let output = cmd
        .arg("--pack-file")
        .arg(pack_file_name)
        .arg("cf")
        .arg("import")
        .arg(zip_absolute)
        .current_dir(pack_dir)
        .output()
        .context("Failed to execute packwiz cf import command")?;

    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        let stdout = String::from_utf8_lossy(&output.stdout);
        anyhow::bail!("packwiz cf import failed:\nstderr: {}\nstdout: {}", stderr, stdout);
    }

    println!("  Import successful");
    Ok(())
}

/// Run packwiz refresh to rebuild the index
pub fn refresh(pack_file: &Path) -> Result<()> {
    let pack_dir = pack_file
        .parent()
        .context("Pack file must have a parent directory")?;
    let pack_file_name = pack_file
        .file_name()
        .and_then(|n| n.to_str())
        .unwrap_or("pack.toml");

    println!("  Running packwiz refresh...");

    let mut cmd = get_packwiz_cmd();
    let output = cmd
        .arg("--pack-file")
        .arg(pack_file_name)
        .arg("refresh")
        .current_dir(pack_dir)
        .output()
        .context("Failed to execute packwiz refresh command")?;

    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        anyhow::bail!("packwiz refresh failed: {}", stderr);
    }

    println!("  Refresh successful");
    Ok(())
}

/// Check if packwiz is available in the system PATH
pub fn check_packwiz() -> Result<()> {
    match find_packwiz() {
        Some(path) => {
            println!("  Found packwiz at: {}", path.display());
            Ok(())
        }
        None => {
            anyhow::bail!(
                "packwiz not found in PATH. Please install packwiz first:\n\
                 https://packwiz.infra.link/\n\
                 Make sure packwiz is in your PATH or installed in ~/go/bin/"
            )
        }
    }
}

/// Import a CurseForge zip with clean-slate behavior:
/// - Preserves pack.toml (merges old name/author/version with new MC/modloader)
/// - Preserves index.toml
/// - Preserves local overrides/ folder (from existing pack, not from zip)
/// - Clears all other files/folders
/// - Runs packwiz cf import
/// - Restores and applies local overrides
pub fn import_with_overrides(pack_file: &Path, zip_path: &Path) -> Result<()> {
    use crate::models::PackToml;

    let pack_dir = pack_file
        .parent()
        .context("Pack file must have a parent directory")?;

    println!(
        "  Preparing to import {}...",
        zip_path.file_stem().unwrap_or_default().to_string_lossy()
    );

    // Step 1: Read and store current pack.toml values
    let old_pack_content = fs::read_to_string(pack_file)
        .with_context(|| format!("Failed to read pack.toml: {}", pack_file.display()))?;
    let old_pack: PackToml = toml::from_str(&old_pack_content)
        .with_context(|| format!("Failed to parse pack.toml: {}", pack_file.display()))?;

    let preserved_name = old_pack.name.clone();
    let preserved_version = old_pack.version.clone();
    let preserved_pack_format = old_pack.pack_format.clone();

    println!("  Preserving pack name: {}", preserved_name);

    // Step 2: Backup local overrides/ folder if it exists
    let overrides_backup = pack_dir.join(".overrides_backup");
    let overrides_dir = pack_dir.join("overrides");
    if overrides_dir.exists() {
        println!("  Backing up local overrides folder...");
        if overrides_backup.exists() {
            fs::remove_dir_all(&overrides_backup)?;
        }
        fs::rename(&overrides_dir, &overrides_backup)?;
    }

    // Step 3: Clear the pack directory, preserving pack.toml, index.toml, and the overrides backup
    println!("  Clearing pack directory (preserving pack.toml, index.toml, and overrides backup)...");
    override_handler::clear_pack_directory(pack_dir, &["pack.toml", "index.toml", ".overrides_backup"])?;

    // Step 4: Run packwiz cf import
    println!("  Running packwiz cf import...");
    import_curseforge_zip(pack_file, zip_path)?;

    // Step 5: Merge pack.toml - keep old name/version/pack_format, use new MC/modloader
    println!("  Merging pack.toml values...");
    let new_pack_content = fs::read_to_string(pack_file)
        .with_context(|| format!("Failed to read new pack.toml: {}", pack_file.display()))?;
    let mut new_pack: PackToml = toml::from_str(&new_pack_content)
        .with_context(|| format!("Failed to parse new pack.toml: {}", pack_file.display()))?;

    // Apply preserved values
    new_pack.name = preserved_name;
    new_pack.version = preserved_version;
    new_pack.pack_format = preserved_pack_format;

    // Write merged pack.toml back
    let merged_content = toml::to_string(&new_pack)
        .context("Failed to serialize merged pack.toml")?;
    fs::write(pack_file, merged_content)
        .with_context(|| format!("Failed to write merged pack.toml: {}", pack_file.display()))?;

    println!("  pack.toml merged successfully");

    // Step 6: Restore local overrides folder if it was backed up
    if overrides_backup.exists() {
        println!("  Restoring local overrides folder...");
        if overrides_dir.exists() {
            fs::remove_dir_all(&overrides_dir)?;
        }
        fs::rename(&overrides_backup, &overrides_dir)?;

        // Step 7: Apply local overrides (copy from overrides/ to root)
        // Note: overrides/ folder is kept for future updates
        println!("  Applying local overrides...");
        override_handler::apply_overrides_keep_folder(pack_dir)?;
        println!("  Overrides applied successfully (overrides/ folder preserved for future updates)");
    }

    Ok(())
}
