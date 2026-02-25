"""
Migrate pack mods from CurseForge to Modrinth when the exact file
(hash, version, loader) exists on Modrinth. Uses Modrinth's version_file API.

Usage: python curseforge_to_modrinth.py <pack_dir>
Example: python curseforge_to_modrinth.py sunlit_valley
         python curseforge_to_modrinth.py main_1_21
"""
import argparse
import json
import re
import sys
import time
from pathlib import Path

import urllib.request

API_BASE = "https://api.modrinth.com/v2"
USER_AGENT = "Modpack-Migration/1.0 (packwiz modrinth migration)"
RATE_LIMIT_DELAY = 0.25


def load_pack_config(pack_dir: Path) -> tuple[str, str]:
    pack_toml = pack_dir / "pack.toml"
    if not pack_toml.exists():
        raise FileNotFoundError(f"pack.toml not found in {pack_dir}")
    content = pack_toml.read_text(encoding="utf-8")
    mc = re.search(r'minecraft\s*=\s*"([^"]+)"', content)
    loader = re.search(r'(forge|neoforge)\s*=\s*"[^"]+"', content)
    if not mc:
        raise ValueError("pack.toml missing [versions] minecraft")
    loader_name = loader.group(1) if loader else "forge"
    return mc.group(1), loader_name


def fetch_version_from_hash(sha1_hash: str) -> dict | None:
    url = f"{API_BASE}/version_file/{sha1_hash}?algorithm=sha1"
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        if e.code == 404:
            return None
        raise
    except Exception:
        return None


def parse_pw_toml(path: Path, content: str) -> tuple[str, str] | None:
    if "[update.modrinth]" in content:
        return None
    if "[update.curseforge]" not in content and 'mode = "metadata:curseforge"' not in content:
        return None
    m_hash = re.search(r'hash\s*=\s*"([0-9a-fA-F]{40})"', content)
    m_fmt = re.search(r'hash-format\s*=\s*"(\w+)"', content)
    if not m_hash or not m_fmt:
        return None
    h, fmt = m_hash.group(1).lower(), m_fmt.group(1)
    if fmt != "sha1":
        return None
    return content, h


def migrate_to_modrinth(content: str, version_data: dict, sha1_hash: str) -> str:
    """Output format matches packwiz modrinth add exactly: url, hash-format, hash; no mode."""
    project_id = version_data["project_id"]
    version_id = version_data["id"]
    files = version_data.get("files") or []
    sha1_lower = sha1_hash.lower()
    matching = next((f for f in files if (f.get("hashes") or {}).get("sha1", "").lower() == sha1_lower), None)
    if not matching:
        matching = next((f for f in files if f.get("primary")), files[0] if files else None)
    if not matching:
        raise ValueError("No matching file in Modrinth version")
    sha512 = matching.get("hashes", {}).get("sha512", "")
    url = matching.get("url", "")
    filename = matching.get("filename", "")
    if not sha512 or not url:
        raise ValueError("Missing sha512 or url in Modrinth file")

    name = re.search(r'name\s*=\s*"([^"]*)"', content)
    side = re.search(r'side\s*=\s*"([^"]*)"', content)
    name_val = name.group(1) if name else "Unknown"
    side_val = side.group(1) if side else "both"

    return f'''name = "{name_val}"
filename = "{filename}"
side = "{side_val}"

[download]
url = "{url}"
hash-format = "sha512"
hash = "{sha512}"

[update]
[update.modrinth]
mod-id = "{project_id}"
version = "{version_id}"
'''


def main():
    parser = argparse.ArgumentParser(description="Migrate CurseForge mods to Modrinth when file exists on Modrinth")
    parser.add_argument("pack_dir", help="Pack directory (e.g. sunlit_valley, main_1_21)")
    args = parser.parse_args()

    root = Path(__file__).resolve().parent.parent
    pack_dir = (root / args.pack_dir).resolve()
    mods_dir = pack_dir / "mods"

    if not mods_dir.exists():
        print(f"Mods dir not found: {mods_dir}")
        sys.exit(1)

    try:
        mc_version, loader = load_pack_config(pack_dir)
    except (FileNotFoundError, ValueError) as e:
        print(e)
        sys.exit(1)

    print(f"Pack: {pack_dir.name} | MC {mc_version} | {loader}")

    def matches_version_and_loader(version_data: dict) -> bool:
        gv = version_data.get("game_versions") or []
        loaders = version_data.get("loaders") or []
        return mc_version in gv and loader in loaders

    migrated = 0
    skipped = 0
    errors = []

    pw_files = sorted(mods_dir.glob("*.pw.toml"))
    total = len(pw_files)

    for i, path in enumerate(pw_files):
        content = path.read_text(encoding="utf-8")
        parsed = parse_pw_toml(path, content)
        if not parsed:
            skipped += 1
            continue

        content, sha1_hash = parsed
        version_data = fetch_version_from_hash(sha1_hash)
        time.sleep(RATE_LIMIT_DELAY)

        if not version_data:
            skipped += 1
            continue

        if not matches_version_and_loader(version_data):
            skipped += 1
            continue

        try:
            new_content = migrate_to_modrinth(content, version_data, sha1_hash)
            path.write_text(new_content, encoding="utf-8")
            migrated += 1
            print(f"[{i+1}/{total}] MIGRATED: {path.stem}")
        except Exception as e:
            errors.append((path.stem, str(e)))
            print(f"[{i+1}/{total}] ERROR {path.stem}: {e}")

    print(f"\nDone. Migrated: {migrated}, Skipped: {skipped}")
    if errors:
        print("Errors:", errors)


if __name__ == "__main__":
    main()
