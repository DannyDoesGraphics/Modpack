import zipfile, json, sys
path = sys.argv[1]
with zipfile.ZipFile(path) as zf:
    idx = json.loads(zf.read('modrinth.index.json'))
    print("name:", idx.get('name'))
    print("version:", idx.get('versionId'))
    print("deps:", idx.get('dependencies'))
    print("files:", len(idx.get('files', [])))
    dirs = sorted({str(__import__('pathlib').Path(f['path']).parent) for f in idx.get('files', [])})
    print("dirs:", dirs)
    entries = [n for n in zf.namelist() if not n.startswith('overrides/') and n != 'modrinth.index.json'][:5]
    print("other entries:", entries)
