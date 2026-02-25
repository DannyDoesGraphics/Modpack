"""Remove orphaned [update.curseforge] blocks from migrated Modrinth files."""
from pathlib import Path
import re

mods = Path(__file__).resolve().parent.parent / "sunlit_valey" / "mods"
fixed = 0
for f in mods.glob("*.pw.toml"):
    c = f.read_text(encoding="utf-8")
    if "[update.curseforge]" not in c or "[update.modrinth]" not in c:
        continue
    c2 = re.sub(r'\[update\.curseforge\]\s*\nfile-id = \d+\s*\nproject-id = \d+\s*', "", c)
    c2 = re.sub(r'"([^"]*)\[update\.curseforge\]', r'"\1', c2)
    if c2 != c:
        f.write_text(c2, encoding="utf-8")
        fixed += 1
print(f"Fixed {fixed} malformed files")
