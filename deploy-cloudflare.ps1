Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

param(
  [switch]$SkipBuild
)

# Ensure we run from the boilerplate folder so relative paths resolve correctly.
Set-Location $PSScriptRoot

if (-not $SkipBuild) {
  Write-Host "Building the application..."
  npm run build
} else {
  Write-Host "Skipping build; deploying existing .\out..."
}

Write-Host "Deploying to Cloudflare Pages..."
npx wrangler pages deploy out

