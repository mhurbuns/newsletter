# Newsletter + Cloudflare Pages Boilerplate

This is a generic, copyable version of the CodeMingle site structure:

- Next.js App Router
- Static export (`output: "export"`) → deploy to Cloudflare Pages
- Markdown-backed newsletter issues in `news_letter/`
- Basic pages (About, Contact, Privacy) + light/dark mode toggle

New here? Start with `prompts.md` for copy/paste setup prompts.

## Getting started video

<video src="getstarted.mov" controls playsinline></video>

## What you need (beginner-friendly)

- Node.js 18+ (LTS recommended)
- npm (comes with Node) or yarn
- Git
- VS Code (recommended editor)

For deployment:
- Cloudflare account
- Wrangler CLI (`npm i -g wrangler`)

## Quick start

```bash
cd newsletter
npm install
npm run dev
```

Open `http://localhost:3000`.

See `prompts.md` for step-by-step prompts you can paste into an LLM.

## Configure basics

Copy env example:

```bash
cp .env.example .env.local
```

Edit `.env.local` (required for correct SEO/canonical URLs in a static export):

- `NEXT_PUBLIC_SITE_NAME` – shown in metadata + nav.
- `NEXT_PUBLIC_SITE_URL` – used for canonical URLs and JSON-LD.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` – optional; only needed if you add GA4 later.

## Customize pages

- Home: `app/page.tsx`
- About: `app/about/page.tsx`
- Contact: `app/contact/page.tsx`
- Newsletter: `app/newsletter/*`
- Privacy: `app/privacy/page.tsx`
- Theme styles: `styles/globals.css` (dark mode uses `[data-theme="dark"]`)

## Favicon / logo

- Favicon: `public/favicon.svg`
- Simple logo/icon: `public/icon.svg` (also used for social previews by default)

## Newsletter format

Drop Markdown files into `news_letter/` using this filename pattern:

- `newsletter_YYYYMMDD_HHMMSS.md` (you can rename the prefix, e.g. `travel_20250101_000000.md`)

They appear at:

- Archive: `/newsletter`
- Issue: `/newsletter/[slug]` (slug derived from filename)

## Deploy to Cloudflare Pages (CLI)

1. Install/auth wrangler (one-time):
   - `npm i -g wrangler`
   - `wrangler login`
2. Update `wrangler.toml` `name` to your Pages project name.
3. Deploy:

```bash
./deploy-cloudflare.sh
```

Windows (PowerShell):

```powershell
.\deploy-cloudflare.ps1
```

Cross-platform (npm script):

```bash
npm run deploy:cloudflare
```

## Deploy to GitHub Pages (free)

This boilerplate includes a GitHub Actions workflow template at:

- `boilerplate/.github/workflows/deploy-github-pages.yml`

If you copy this folder into a new repo, keep the `.github/` folder at the repo root so GitHub Actions can see it.

Setup steps (high-level):

1. In your repo settings, enable GitHub Pages (Source: GitHub Actions).
2. In GitHub → Settings → Secrets and variables → Actions → Variables, set:
   - `NEXT_PUBLIC_SITE_NAME`
   - `NEXT_PUBLIC_SITE_URL`
3. Push to `main` and the workflow will build + deploy.

Note: GitHub Pages works best when your site is served at the domain root (for example via a `username.github.io` repo). If you deploy under a subpath like `/repo-name`, you’ll likely want a `basePath`/`assetPrefix` setup.

## Fast updates (aim for “under 5 seconds”)

Cloudflare upload is usually quick; the slow part is the build.

To get a very fast deploy loop:

- Keep `node_modules/` installed locally (don’t reinstall each time).
- Keep `.next/cache/` warm (don’t delete it).
- After the first build, small content changes often rebuild faster.
# newsletter
