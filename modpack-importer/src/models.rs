use serde::{Deserialize, Serialize};
use std::collections::HashSet;

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct PackToml {
    pub name: String,
    pub version: String,
    #[serde(rename = "pack-format")]
    pub pack_format: String,
    pub index: IndexConfig,
    pub versions: VersionsConfig,
    pub options: Option<OptionsConfig>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct IndexConfig {
    pub file: String,
    #[serde(rename = "hash-format")]
    pub hash_format: String,
    pub hash: String,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct VersionsConfig {
    pub minecraft: String,
    pub forge: Option<String>,
    pub neoforge: Option<String>,
    pub fabric: Option<String>,
    pub quilt: Option<String>,
}

impl VersionsConfig {
    pub fn get_loader(&self) -> (&str, &str) {
        if let Some(ref forge) = self.forge {
            return ("forge", forge);
        }
        if let Some(ref neoforge) = self.neoforge {
            return ("neoforge", neoforge);
        }
        if let Some(ref fabric) = self.fabric {
            return ("fabric", fabric);
        }
        if let Some(ref quilt) = self.quilt {
            return ("quilt", quilt);
        }
        ("unknown", "")
    }
}

#[derive(Debug, Clone, Deserialize, Serialize, Default)]
pub struct OptionsConfig {
    pub acceptable_game_versions: Option<Vec<String>>
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct PwToml {
    pub name: String,
    pub filename: String,
    pub side: String,
    pub download: DownloadConfig,
    pub update: Option<UpdateConfig>,
}

impl PwToml {
    pub fn is_curseforge(&self) -> bool {
        if let Some(ref update) = self.update {
            return update.curseforge.is_some();
        }
        if self.download.mode.as_deref() == Some("metadata:curseforge") {
            return true;
        }
        false
    }

    pub fn is_modrinth(&self) -> bool {
        if let Some(ref update) = self.update {
            return update.modrinth.is_some();
        }
        false
    }

    pub fn get_sha1_hash(&self) -> Option<&str> {
        if self.download.hash_format == "sha1" {
            return Some(&self.download.hash);
        }
        None
    }

    pub fn convert_to_modrinth(&mut self, version_data: &ModrinthVersion) -> anyhow::Result<()> {
        let files = &version_data.files;
        let sha1_lower = self.download.hash.to_lowercase();
        
        // Find matching file by SHA1
        let matching = files.iter().find(|f| {
            f.hashes.get("sha1").map(|h| h.to_lowercase()) == Some(sha1_lower.clone())
        }).or_else(|| {
            // Fall back to primary file or first file
            files.iter().find(|f| f.primary).or(files.first())
        });

        let matching = matching.ok_or_else(|| anyhow::anyhow!("No matching file in Modrinth version"))?;
        
        let sha512 = matching.hashes.get("sha512")
            .ok_or_else(|| anyhow::anyhow!("Missing sha512 in Modrinth file"))?;
        // Clone values first
        let url_val: String = matching.url.clone();
        let filename_val: String = matching.filename.clone();

        // Update download section
        self.download.url = Some(url_val);
        self.download.hash_format = "sha512".to_string();
        self.download.hash = sha512.clone();
        self.download.mode = None;
        self.filename = filename_val;

        // Update update section
        self.update = Some(UpdateConfig {
            modrinth: Some(ModrinthUpdateConfig {
                mod_id: version_data.project_id.clone(),
                version: version_data.id.clone(),
            }),
            curseforge: None,
        });

        Ok(())
    }
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct DownloadConfig {
    pub url: Option<String>,
    #[serde(rename = "hash-format")]
    pub hash_format: String,
    pub hash: String,
    pub mode: Option<String>,
}

#[derive(Debug, Clone, Default, Deserialize, Serialize)]
pub struct UpdateConfig {
    pub modrinth: Option<ModrinthUpdateConfig>,
    pub curseforge: Option<CurseForgeUpdateConfig>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct ModrinthUpdateConfig {
    #[serde(rename = "mod-id")]
    pub mod_id: String,
    pub version: String,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct CurseForgeUpdateConfig {
    #[serde(rename = "file-id")]
    pub file_id: u64,
    #[serde(rename = "project-id")]
    pub project_id: u64,
}

#[derive(Debug, Clone, Deserialize)]
pub struct ModrinthVersion {
    pub id: String,
    #[serde(rename = "project_id")]
    pub project_id: String,
    #[serde(rename = "game_versions")]
    pub game_versions: Vec<String>,
    pub loaders: Vec<String>,
    pub files: Vec<ModrinthFile>,
}

#[derive(Debug, Clone, Deserialize)]
pub struct ModrinthFile {
    pub hashes: std::collections::HashMap<String, String>,
    pub url: String,
    pub filename: String,
    pub primary: bool,
}

#[derive(Debug, Clone, Deserialize)]
pub struct CurseForgeManifest {
    pub files: Vec<CurseForgeFile>,
}

#[derive(Debug, Clone, Deserialize)]
pub struct CurseForgeFile {
    #[serde(rename = "fileName")]
    pub file_name: String,
}

#[derive(Debug, Clone)]
pub struct SideAnalysis {
    pub server_mods: HashSet<String>,
    pub client_mods: HashSet<String>,
    pub both_mods: HashSet<String>,
    pub mismatches: Vec<VersionMismatch>,
}

#[derive(Debug, Clone)]
pub struct VersionMismatch {
    pub server_filename: String,
    pub client_filename: String,
    pub base_name: String,
}
