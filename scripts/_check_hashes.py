import os, re, sys

base = sys.argv[1] if len(sys.argv) > 1 else r'c:\Users\danny\dev\Modpack\cobbleverse'
bad = []
total = 0
for root, dirs, files in os.walk(base):
    for f in files:
        if not f.endswith('.pw.toml'):
            continue
        total += 1
        path = os.path.join(root, f)
        content = open(path, encoding='utf-8').read()
        m_fmt = re.search(r'hash-format = "(\w+)"', content)
        m_hash = re.search(r'^hash = "([0-9a-fA-F]+)"', content, re.MULTILINE)
        if m_fmt and m_hash:
            fmt, val = m_fmt.group(1), m_hash.group(1)
            expected = {'sha512': 128, 'sha256': 64, 'sha1': 40, 'md5': 32}.get(fmt, -1)
            if expected != -1 and len(val) != expected:
                bad.append((os.path.relpath(path, base), fmt, len(val), expected))

print(f'Checked {total} .pw.toml files')
if bad:
    print(f'\nBAD HASH LENGTHS ({len(bad)}):')
    for b in bad:
        print(f'  {b[0]}: {b[1]} hash is {b[2]} chars, expected {b[3]}')
else:
    print('All hash lengths are correct')
