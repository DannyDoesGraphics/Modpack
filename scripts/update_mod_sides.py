"""
Update mod side configuration in packwiz .pw.toml files.

This script reads mods_server.txt to determine which mods should be server-side.
For each .pw.toml file in the mods folder:
- If the filename is in mods_server.txt -> side = "server"
- If the filename is NOT in mods_server.txt -> side = "client"
"""

import os
import re
import sys
from pathlib import Path


def load_server_mods(server_file: Path) -> set[str]:
    """Load the set of server-side mod filenames from mods_server.txt."""
    server_mods = set()

    with open(server_file, 'r', encoding='utf-8') as f:
        for line in f:
            filename = line.strip()
            if filename:
                server_mods.add(filename)

    return server_mods


def get_filename_from_pw_toml(file_path: Path) -> str | None:
    """Extract the filename from a .pw.toml file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match filename = "something.jar"
    match = re.search(r'^filename\s*=\s*"([^"]+)"', content, re.MULTILINE)
    if match:
        return match.group(1)

    return None


def update_side_in_file(file_path: Path, new_side: str) -> bool:
    """
    Update the side value in a .pw.toml file.
    Returns True if the file was modified, False otherwise.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check current side value
    side_match = re.search(r'^side\s*=\s*"([^"]+)"', content, re.MULTILINE)
    if not side_match:
        print(f"  Warning: No side field found in {file_path.name}")
        return False

    current_side = side_match.group(1)

    if current_side == new_side:
        return False  # No change needed

    # Update the side value
    new_content = re.sub(
        r'^side\s*=\s*"[^"]+"',
        f'side = "{new_side}"',
        content,
        flags=re.MULTILINE
    )

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True


def main():
    # Determine workspace root (script is in scripts/ folder)
    script_dir = Path(__file__).parent
    workspace_root = script_dir.parent

    # Paths
    server_file = workspace_root / 'mods_server.txt'
    mods_dir = workspace_root / 'sunlit_valley' / 'mods'

    if not server_file.exists():
        print(f"Error: Server mods file not found: {server_file}")
        sys.exit(1)

    if not mods_dir.exists():
        print(f"Error: Mods directory not found: {mods_dir}")
        sys.exit(1)

    print(f"Loading server-side mods from: {server_file}")
    server_mods = load_server_mods(server_file)
    print(f"Found {len(server_mods)} server-side mods")

    # Get all .pw.toml files
    pw_files = list(mods_dir.glob('*.pw.toml'))
    print(f"Found {len(pw_files)} .pw.toml files in {mods_dir}")
    print()

    server_count = 0
    client_count = 0
    updated_count = 0
    not_found_count = 0

    for pw_file in sorted(pw_files):
        filename = get_filename_from_pw_toml(pw_file)

        if not filename:
            print(f"Warning: Could not extract filename from {pw_file.name}")
            continue

        # Determine side
        if filename in server_mods:
            new_side = "server"
            server_count += 1
        else:
            new_side = "client"
            client_count += 1

        # Update the file
        was_updated = update_side_in_file(pw_file, new_side)

        if was_updated:
            print(f"Updated: {pw_file.name} -> side = \"{new_side}\" (filename: {filename})")
            updated_count += 1

    print()
    print(f"Summary:")
    print(f"  Total .pw.toml files: {len(pw_files)}")
    print(f"  Server-side mods: {server_count}")
    print(f"  Client-side mods: {client_count}")
    print(f"  Files updated: {updated_count}")


if __name__ == '__main__':
    main()
