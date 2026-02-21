#!/usr/bin/env python3
"""Convert a .mrpack file into an existing packwiz pack.

Writes .pw.toml files directly (no packwiz CLI per mod, no dep resolution),
copies overrides/client-overrides/server-overrides, then runs packwiz refresh.

Usage:
    python mrpack_to_packwiz.py <path.mrpack> [--pack-file path/to/pack.toml]
"""

import argparse
import json
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.parse
import urllib.request
import zipfile
from pathlib import Path

MODRINTH_CDN_RE = re.compile(
    r"https://cdn\.modrinth\.com/data/([^/]+)/versions/([^/]+)/.+"
)
MODRINTH_API = "https://api.modrinth.com/v2"
BATCH_SIZE = 100


def get_side(env: dict | None) -> str:
    if not env:
        return "both"
    client = env.get("client", "required")
    server = env.get("server", "required")
    if client == "unsupported":
        return "server"
    if server == "unsupported":
        return "client"
    return "both"


def fetch_project_names(project_ids: list[str]) -> dict[str, str]:
    names: dict[str, str] = {}
    for i in range(0, len(project_ids), BATCH_SIZE):
        chunk = project_ids[i : i + BATCH_SIZE]
        url = f"{MODRINTH_API}/projects?ids={urllib.parse.quote(json.dumps(chunk))}"
        req = urllib.request.Request(
            url, headers={"User-Agent": "mrpack-to-packwiz/1.0"}
        )
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                for proj in json.loads(resp.read()):
                    names[proj["id"]] = proj["title"]
        except Exception as exc:
            print(f"  Warning: Modrinth API request failed: {exc}", file=sys.stderr)
    return names


def write_pw_toml(
    dest: Path,
    name: str,
    filename: str,
    side: str,
    url: str,
    hash_format: str,
    hash_value: str,
    project_id: str | None = None,
    version_id: str | None = None,
) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    lines = [
        f'name = "{name}"',
        f'filename = "{filename}"',
        f'side = "{side}"',
        "",
        "[download]",
        f'url = "{url}"',
        f'hash-format = "{hash_format}"',
        f'hash = "{hash_value}"',
    ]
    if project_id and version_id:
        lines += [
            "",
            "[update]",
            "[update.modrinth]",
            f'mod-id = "{project_id}"',
            f'version = "{version_id}"',
        ]
    dest.write_text("\n".join(lines) + "\n", encoding="utf-8")


def copy_tree(src: Path, dest: Path, label: str) -> None:
    if not src.is_dir():
        return
    count = 0
    for src_file in src.rglob("*"):
        if src_file.is_file():
            dest_file = dest / src_file.relative_to(src)
            dest_file.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src_file, dest_file)
            count += 1
    if count:
        print(f"  Copied {count} file(s) from {label}/")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Convert a .mrpack file into an existing packwiz pack"
    )
    parser.add_argument("mrpack", help="Path to the .mrpack file")
    parser.add_argument(
        "--pack-file",
        default="pack.toml",
        metavar="PATH",
        help="Path to pack.toml (default: pack.toml)",
    )
    args = parser.parse_args()

    mrpack_path = Path(args.mrpack).resolve()
    pack_file = Path(args.pack_file).resolve()
    pack_dir = pack_file.parent

    if not mrpack_path.exists():
        sys.exit(f"Error: mrpack not found: {mrpack_path}")
    if not pack_file.exists():
        sys.exit(f"Error: pack.toml not found: {pack_file}")

    with tempfile.TemporaryDirectory() as tmp:
        tmp_dir = Path(tmp)

        print(f"Extracting {mrpack_path.name} ...")
        with zipfile.ZipFile(mrpack_path) as zf:
            zf.extractall(tmp_dir)

        index_path = tmp_dir / "modrinth.index.json"
        if not index_path.exists():
            sys.exit("Error: modrinth.index.json not found inside the mrpack")

        index = json.loads(index_path.read_text(encoding="utf-8"))
        files: list[dict] = index.get("files", [])
        print(f"Found {len(files)} downloadable file(s) in mrpack")

        # Resolve Modrinth project/version IDs from CDN URLs
        # filename (jar name) -> (project_id, version_id)
        modrinth_ids: dict[str, tuple[str, str]] = {}
        project_ids: list[str] = []

        for entry in files:
            for url in entry.get("downloads", []):
                m = MODRINTH_CDN_RE.match(url)
                if m:
                    pid, vid = m.group(1), m.group(2)
                    fname = Path(entry["path"]).name
                    modrinth_ids[fname] = (pid, vid)
                    if pid not in project_ids:
                        project_ids.append(pid)
                    break

        print(f"Fetching display names for {len(project_ids)} Modrinth project(s) ...")
        project_names = fetch_project_names(project_ids) if project_ids else {}

        # Write .pw.toml files
        written = 0
        skipped = 0
        for entry in files:
            path_str: str = entry.get("path", "")
            downloads: list[str] = entry.get("downloads", [])
            env: dict | None = entry.get("env")
            hashes: dict = entry.get("hashes", {})

            if not downloads:
                print(f"  Warning: no download URL for {path_str!r} — skipping")
                skipped += 1
                continue

            url = downloads[0]
            filename = Path(path_str).name
            side = get_side(env)

            if "sha512" in hashes:
                hash_format, hash_value = "sha512", hashes["sha512"]
            elif "sha1" in hashes:
                hash_format, hash_value = "sha1", hashes["sha1"]
            elif hashes:
                hash_format, hash_value = next(iter(hashes.items()))
            else:
                print(f"  Warning: no hash for {path_str!r} — skipping")
                skipped += 1
                continue

            pid, vid = modrinth_ids.get(filename, (None, None))
            name = project_names.get(pid, Path(filename).stem) if pid else Path(filename).stem

            pw_toml_path = pack_dir / Path(path_str).parent / (Path(filename).stem + ".pw.toml")
            write_pw_toml(
                pw_toml_path, name, filename, side, url,
                hash_format, hash_value, pid, vid,
            )
            written += 1

        print(f"Wrote {written} .pw.toml file(s) ({skipped} skipped)")

        # Copy overrides into pack directory
        print("Copying overrides ...")
        copy_tree(tmp_dir / "overrides", pack_dir, "overrides")
        copy_tree(tmp_dir / "client-overrides", pack_dir, "client-overrides")
        copy_tree(tmp_dir / "server-overrides", pack_dir, "server-overrides")

    # Run packwiz refresh
    packwiz = shutil.which("packwiz") or "packwiz"
    print(f"\nRunning: {packwiz} refresh --pack-file {pack_file}")
    result = subprocess.run(
        [packwiz, "refresh", "--pack-file", str(pack_file)],
        cwd=pack_dir,
    )
    if result.returncode != 0:
        sys.exit(f"\nError: packwiz refresh exited with code {result.returncode}")

    print("\nDone.")


if __name__ == "__main__":
    main()
