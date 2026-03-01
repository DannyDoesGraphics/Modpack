use anyhow::{Context, Result};
use std::fs;
use std::path::Path;

/// Clear the pack directory, preserving specified files and directories
pub fn clear_pack_directory(pack_dir: &Path, preserve_items: &[&str]) -> Result<()> {
    if !pack_dir.exists() {
        return Ok(());
    }

    let entries = fs::read_dir(pack_dir)
        .with_context(|| format!("Failed to read pack directory: {}", pack_dir.display()))?;

    for entry in entries {
        let entry = entry?;
        let path = entry.path();
        let file_name = entry.file_name();
        let file_name_str = file_name.to_string_lossy();

        // Skip preserved items (both files and directories)
        if preserve_items.contains(&file_name_str.as_ref()) {
            continue;
        }

        if path.is_dir() {
            fs::remove_dir_all(&path)
                .with_context(|| format!("Failed to remove directory: {}", path.display()))?;
        } else {
            fs::remove_file(&path)
                .with_context(|| format!("Failed to remove file: {}", path.display()))?;
        }
    }

    Ok(())
}

/// Apply overrides from the overrides/ folder to the pack root
/// Copies all files from overrides/ to the pack root, preserving directory structure
/// Then removes the overrides/ folder
pub fn apply_overrides(pack_dir: &Path) -> Result<()> {
    let overrides_dir = pack_dir.join("overrides");

    if !overrides_dir.exists() {
        return Ok(());
    }

    copy_dir_contents(&overrides_dir, pack_dir)?;

    // Remove the overrides directory after copying
    fs::remove_dir_all(&overrides_dir)
        .with_context(|| format!("Failed to remove overrides directory: {}", overrides_dir.display()))?;

    Ok(())
}

/// Apply overrides from the overrides/ folder to the pack root
/// Copies all files from overrides/ to the pack root, preserving directory structure
/// KEEPS the overrides/ folder intact for future updates
pub fn apply_overrides_keep_folder(pack_dir: &Path) -> Result<()> {
    let overrides_dir = pack_dir.join("overrides");

    if !overrides_dir.exists() {
        return Ok(());
    }

    copy_dir_contents(&overrides_dir, pack_dir)?;

    // Note: We intentionally do NOT remove the overrides directory
    // so it persists for future modpack updates

    Ok(())
}

/// Recursively copy all contents from src_dir to dst_dir
fn copy_dir_contents(src_dir: &Path, dst_dir: &Path) -> Result<()> {
    let entries = fs::read_dir(src_dir)
        .with_context(|| format!("Failed to read source directory: {}", src_dir.display()))?;

    for entry in entries {
        let entry = entry?;
        let src_path = entry.path();
        let file_name = entry.file_name();
        let dst_path = dst_dir.join(&file_name);

        if src_path.is_dir() {
            // Create the destination directory if it doesn't exist
            if !dst_path.exists() {
                fs::create_dir_all(&dst_path)
                    .with_context(|| format!("Failed to create directory: {}", dst_path.display()))?;
            }
            // Recursively copy subdirectory contents
            copy_dir_contents(&src_path, &dst_path)?;
        } else {
            // Copy the file
            fs::copy(&src_path, &dst_path)
                .with_context(|| format!("Failed to copy file from {} to {}", src_path.display(), dst_path.display()))?;
        }
    }

    Ok(())
}
