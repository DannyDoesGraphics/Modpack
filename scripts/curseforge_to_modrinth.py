"""
Migrate sunlit_valey mods from CurseForge to Modrinth when the exact file
(hash, version, loader) exists on Modrinth. Uses Modrinth's version_from_hash API.
"""
import json
import os
import re
import sys
import time
from pathlib import Path

import urllib.request

MODS_DIR = Path(__file__).resolve().parent.parent / "sunlit_valey" / "mods"
MC_VERSION = "1.20.1"
LOADER = "forge"
API_BASE = "https://api.modrinth.com/v2"
USER_AGENT = "Modpack-Migration/1.0 (packwiz modrinth migration)"
RATE_LIMIT_DELAY = 0.25


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


def matches_version_and_loader(version_data: dict) -> bool:
    gv = version_data.get("game_versions") or []
    loaders = version_data.get("loaders") or []
    return MC_VERSION in gv and LOADER in loaders


def parse_pw_toml(path: Path) -> tuple[str, str, str] | None:
    content = path.read_text(encoding="utf-8")
    if "metadata:modrinth" in content:
        return None
    m_hash = re.search(r'hash = "([0-9a-fA-F]{40})"', content)
    m_fmt = re.search(r'hash-format = "(\w+)"', content)
    if not m_hash or not m_fmt:
        return None
    h, fmt = m_hash.group(1).lower(), m_fmt.group(1)
    if fmt != "sha1":
        return None
    return (content, h, path.name)


def migrate_to_modrinth(content: str, version_data: dict) -> str:
    project_id = version_data["project_id"]
    version_id = version_data["id"]
    files = version_data.get("files") or []
    primary = next((f for f in files if f.get("primary")), files[0] if files else None)
    if not primary:
        return content
    sha512 = primary.get("hashes", {}).get("sha512", "")
    url = primary.get("url", "")

    content = re.sub(r'mode = "metadata:curseforge"', 'mode = "metadata:modrinth"', content)
    content = re.sub(r'hash-format = "sha1"\s*\nhash = "[^"]+"', 
                     f'hash-format = "sha512"\nhash = "{sha512}"', content)

    if url:
        if re.search(r'url\s*=', content):
            content = re.sub(r'url = "[^"]*"', f'url = "{url}"', content)
        else:
            content = re.sub(r'(\[download\])', f'\\1\nurl = "{url}"', content)

    update_block = f'''[update]
[update.modrinth]
mod-id = "{project_id}"
version = "{version_id}"
'''
    content = re.sub(r'\[update\].*', update_block.rstrip(), content, flags=re.DOTALL)
    return content


def main():
    if not MODS_DIR.exists():
        print(f"Mods dir not found: {MODS_DIR}")
        sys.exit(1)

    migrated = 0
    skipped = 0
    errors = []

    pw_files = sorted(MODS_DIR.glob("*.pw.toml"))
    total = len(pw_files)

    for i, path in enumerate(pw_files):
        slug = path.stem
        parsed = parse_pw_toml(path)
        if not parsed:
            skipped += 1
            continue

        content, sha1_hash, _ = parsed
        version_data = fetch_version_from_hash(sha1_hash)
        time.sleep(RATE_LIMIT_DELAY)

        if not version_data:
            skipped += 1
            continue

        if not matches_version_and_loader(version_data):
            skipped += 1
            continue

        try:
            new_content = migrate_to_modrinth(content, version_data)
            path.write_text(new_content, encoding="utf-8")
            migrated += 1
            print(f"[{i+1}/{total}] MIGRATED: {slug}")
        except Exception as e:
            errors.append((slug, str(e)))
            print(f"[{i+1}/{total}] ERROR {slug}: {e}")

    print(f"\nDone. Migrated: {migrated}, Left as CurseForge: {skipped}")
    if errors:
        print("Errors:", errors)


if __name__ == "__main__":
    main()
