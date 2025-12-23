#!/bin/sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo "Building the application..."
npm run build

echo "Deploying to Cloudflare Pages..."
npx wrangler pages deploy out
