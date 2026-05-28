# Copy ProbeJS-generated typings into the pack for agent + IDE use.
# Run after /probejs dump in-game with this pack's mods loaded.
#
# Each pack folder can have a .env with MINECRAFT_INSTANCE pointing at the
# Prism/MultiMC/etc. instance root. ProbeJS writes to <gameDir>/.probe
# (Prism: instance/.minecraft/.probe; some launchers use instance/minecraft/.probe).

param(
    [string]$Pack = "main_1_21",
    [string]$Source,
    [string]$Dest
)

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$packRoot = Join-Path $repoRoot $Pack

if (-not (Test-Path $packRoot)) {
    Write-Error "Pack folder not found: $packRoot"
    exit 1
}

function Read-DotEnv {
    param([string]$Path)
    $vars = @{}
    if (-not (Test-Path $Path)) { return $vars }
    foreach ($line in Get-Content -LiteralPath $Path -Encoding UTF8) {
        $line = $line.Trim()
        if ($line -eq "" -or $line.StartsWith("#")) { continue }
        $eq = $line.IndexOf("=")
        if ($eq -lt 1) { continue }
        $key = $line.Substring(0, $eq).Trim()
        $val = $line.Substring($eq + 1).Trim()
        if (($val.StartsWith('"') -and $val.EndsWith('"')) -or ($val.StartsWith("'") -and $val.EndsWith("'"))) {
            $val = $val.Substring(1, $val.Length - 2)
        }
        $vars[$key] = $val
    }
    return $vars
}

if (-not $Dest) {
    $Dest = Join-Path $packRoot ".probe"
}

if (-not $Source) {
    $envFile = Join-Path $packRoot ".env"
    $dotenv = Read-DotEnv $envFile
    $instance = $dotenv["MINECRAFT_INSTANCE"]

    if ($instance) {
        $candidates = @(
            (Join-Path $instance ".minecraft\.probe"),
            (Join-Path $instance "minecraft\.probe"),
            (Join-Path $instance ".probe")
        )
        foreach ($candidate in $candidates) {
            if (Test-Path $candidate) {
                $Source = $candidate
                break
            }
        }
    }
}

if (-not $Source -or -not (Test-Path $Source)) {
    $envExample = Join-Path $packRoot ".env.example"
    Write-Error @"
.probe folder not found for pack '$Pack'.

1. Run /probejs dump in singleplayer with this modpack loaded.
2. Copy '$envExample' to '$Pack/.env' and set MINECRAFT_INSTANCE to your launcher instance folder.
   Example: C:\Users\you\AppData\Roaming\PrismLauncher\instances\test (1.21)
3. Re-run: .\scripts\sync_probe_types.ps1 -Pack $Pack

Or pass -Source explicitly: .\scripts\sync_probe_types.ps1 -Source 'C:\path\to\instance\.probe'
"@
    exit 1
}

$Source = [System.IO.Path]::GetFullPath($Source)
$Dest = [System.IO.Path]::GetFullPath($Dest)
New-Item -ItemType Directory -Force -Path $Dest | Out-Null

Write-Host "Syncing ProbeJS types ($Pack)"
Write-Host "  From: $Source"
Write-Host "  To:   $Dest"

if (Test-Path $Dest) {
    Get-ChildItem -Path $Dest -Force | Remove-Item -Recurse -Force
}
New-Item -ItemType Directory -Force -Path $Dest | Out-Null
Copy-Item -Path (Join-Path $Source "*") -Destination $Dest -Recurse -Force

$fileCount = (Get-ChildItem -Path $Dest -Recurse -File).Count
Write-Host "Done. $fileCount files in .probe"
