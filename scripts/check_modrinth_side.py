"""
Check Modrinth mods for side mismatches between packwiz .pw.toml files and Modrinth API.

This script scans all .pw.toml files in mods/ folders, finds those with Modrinth update info,
fetches the project details from Modrinth API, and reports when the 'side' setting in the
packwiz file doesn't match what Modrinth reports.

Usage:
    python check_modrinth_side.py [path_to_pack] [--fix]

If no path is provided, defaults to sunlit_valley/.
Use --fix to automatically correct mismatches.
"""

import os
import re
import sys
import tomllib
from pathlib import Path
from typing import NamedTuple
import urllib.request
import urllib.error
import json
import argparse


class Mismatch(NamedTuple):
    path: str
    name: str
    modrinth_id: str
    packwiz_side: str
    modrinth_client_side: str
    modrinth_server_side: str
    expected_packwiz_side: str


def get_modrinth_side(project_id: str) -> tuple[str, str] | None:
    """Fetch client_side and server_side from Modrinth API."""
    url = f"https://api.modrinth.com/v2/project/{project_id}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "packwiz-side-checker/1.0"})
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode("utf-8"))
            return (data.get("client_side", "unknown"), data.get("server_side", "unknown"))
    except urllib.error.HTTPError as e:
        if e.code == 404:
            print(f"    WARNING: Project {project_id} not found on Modrinth")
        else:
            print(f"    ERROR: HTTP {e.code} for {project_id}")
        return None
    except Exception as e:
        print(f"    ERROR: Failed to fetch {project_id}: {e}")
        return None


def determine_expected_side(client_side: str, server_side: str) -> str:
    """
    Determine what packwiz 'side' should be based on Modrinth values.

    Modrinth values: required, optional, unsupported, unknown
    Packwiz values: both, client, server
    """
    # Required on one side = that side only
    client_required = client_side == "required"
    server_required = server_side == "required"

    # Unsupported on one side = other side only
    client_unsupported = client_side == "unsupported"
    server_unsupported = server_side == "unsupported"

    if client_required and server_unsupported:
        return "client"
    if server_required and client_unsupported:
        return "server"

    # If both are required, or one is required and other is optional, it's both
    # If both are optional, it's both
    # If unknown on either, assume both
    return "both"


def check_mod_side(pw_path: Path) -> Mismatch | None:
    """Check a single .pw.toml file for side mismatches."""
    try:
        with open(pw_path, "rb") as f:
            data = tomllib.load(f)
    except Exception as e:
        print(f"  ERROR: Failed to parse {pw_path}: {e}")
        return None

    # Check if this mod uses Modrinth
    update_modrinth = data.get("update", {}).get("modrinth")
    if not update_modrinth:
        return None  # Not a Modrinth mod, skip

    mod_id = update_modrinth.get("mod-id")
    if not mod_id:
        return None

    packwiz_side = data.get("side", "both")
    mod_name = data.get("name", "Unknown")

    # Fetch from Modrinth
    result = get_modrinth_side(mod_id)
    if result is None:
        return None

    client_side, server_side = result
    expected_side = determine_expected_side(client_side, server_side)

    if packwiz_side != expected_side:
        return Mismatch(
            path=str(pw_path),
            name=mod_name,
            modrinth_id=mod_id,
            packwiz_side=packwiz_side,
            modrinth_client_side=client_side,
            modrinth_server_side=server_side,
            expected_packwiz_side=expected_side,
        )

    return None


def find_mods_folder(base_path: Path) -> Path | None:
    """Find the mods folder relative to the pack root."""
    mods_path = base_path / "mods"
    if mods_path.exists():
        return mods_path
    return None


def apply_fix(mismatch: Mismatch) -> bool:
    """Apply the side fix to a .pw.toml file."""
    try:
        with open(mismatch.path, "r", encoding="utf-8") as f:
            content = f.read()

        # Replace the side line
        old_pattern = rf'side = "{re.escape(mismatch.packwiz_side)}"'
        new_value = f'side = "{mismatch.expected_packwiz_side}"'

        if old_pattern not in content:
            # Try without quotes too
            old_pattern = rf"side = '{re.escape(mismatch.packwiz_side)}'"

        new_content = re.sub(
            r'side\s*=\s*["\']' + re.escape(mismatch.packwiz_side) + r'["\']',
            new_value,
            content
        )

        with open(mismatch.path, "w", encoding="utf-8") as f:
            f.write(new_content)

        return True
    except Exception as e:
        print(f"    ERROR: Failed to fix {mismatch.path}: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(
        description="Check Modrinth mods for side mismatches in packwiz .pw.toml files"
    )
    parser.add_argument(
        "path",
        nargs="?",
        default="sunlit_valley",
        help="Path to pack directory (default: sunlit_valley)"
    )
    parser.add_argument(
        "--fix",
        action="store_true",
        help="Automatically fix mismatches"
    )
    args = parser.parse_args()

    base_path = Path(args.path).resolve()

    if not base_path.exists():
        print(f"ERROR: Path not found: {base_path}")
        sys.exit(1)

    # If pointing to a pack.toml, get the parent directory
    if base_path.name == "pack.toml":
        base_path = base_path.parent

    mods_path = find_mods_folder(base_path)
    if not mods_path:
        print(f"ERROR: No mods/ folder found in {base_path}")
        sys.exit(1)

    print(f"Scanning {mods_path} for Modrinth mods...")
    print()

    mismatches: list[Mismatch] = []
    checked = 0

    for pw_file in mods_path.glob("*.pw.toml"):
        checked += 1
        mismatch = check_mod_side(pw_file)
        if mismatch:
            mismatches.append(mismatch)

    print()
    print(f"Checked {checked} .pw.toml files")

    if mismatches:
        print()
        print("=" * 80)
        print(f"FOUND {len(mismatches)} SIDE MISMATCH(ES):")
        print("=" * 80)
        print()

        fixed = 0
        for m in mismatches:
            rel_path = Path(m.path).relative_to(base_path)
            print(f"  {rel_path}")
            print(f"    Mod: {m.name} (ID: {m.modrinth_id})")
            print(f"    Current side: '{m.packwiz_side}'")
            print(f"    Modrinth says: client='{m.modrinth_client_side}', server='{m.modrinth_server_side}'")
            print(f"    Should be: '{m.expected_packwiz_side}'")

            if args.fix:
                if apply_fix(m):
                    print(f"    [FIXED] Updated to '{m.expected_packwiz_side}'")
                    fixed += 1
            print()

        print("=" * 80)

        if args.fix:
            print(f"Fixed {fixed}/{len(mismatches)} mismatches.")
            print("Run 'packwiz refresh' to update the index.")
            sys.exit(0 if fixed == len(mismatches) else 1)
        else:
            print(f"To fix: Run with --fix flag to auto-correct these files")
            print(f"        python scripts/check_modrinth_side.py {args.path} --fix")
            print()
            print(f"Or manually edit the 'side' field in the .pw.toml files above")
            print(f"        Valid values: 'both', 'client', 'server'")
            sys.exit(1)
    else:
        print("All Modrinth mods have correct side settings!")
        sys.exit(0)


if __name__ == "__main__":
    main()
