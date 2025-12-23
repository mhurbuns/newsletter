# Prompts (copy/paste) for beginners

Use these prompts with your preferred LLM (ChatGPT, Claude, Gemini, etc.). Replace placeholders like `{YOUR_OS}` and `{YOUR_GOAL}`.

## 1) Install Node.js (required)

**Prompt**

I’m a beginner. I’m on `{YOUR_OS}`. I need to install Node.js 18+ (LTS recommended) so I can run a Next.js project.

Please:
1) Tell me the safest recommended install method for my OS.
2) Give exact step-by-step commands/clicks.
3) Show how to verify the install with `node -v` and `npm -v`.
4) If something fails, list the most common fixes.

## 2) Install Git (recommended)

**Prompt**

I’m on `{YOUR_OS}` and I need Git installed to clone a repo.
Give step-by-step instructions and show how to verify with `git --version`.

Then show me exactly how to clone a GitHub repo and open it:
1) `git clone <repo-url>`
2) `cd <folder>`
3) run the project (include `npm install` and `npm run dev`)

## 3) Clone the repo and run locally

**Prompt**

I cloned a Next.js repo and I’m in the project folder.
Give the commands to:
1) install dependencies
2) start the dev server
3) open the site in my browser

Also explain what to do if I get a port-in-use error on 3000.

## 4) Set up `.env.local` correctly (important for static export SEO)

**Prompt**

I’m using a static Next.js export (`output: "export"`).
Explain what `.env.local` is and how to create it from `.env.example`.
Then tell me what these mean and what values to use:
- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (only if I add GA later)

## 5) Customize the site for a “travel newsletter”

**Prompt**

I want to turn this Next.js newsletter boilerplate into a travel website/newsletter.
Give me a beginner-friendly checklist of what to change first, including:
- site name + URL
- homepage copy
- navigation links
- privacy page
- adding a new newsletter issue in Markdown

Keep changes minimal and point me to the exact files to edit.

## 6) Create a new newsletter issue (Markdown)

**Prompt**

I’m publishing a new issue. Generate ONE Markdown file that matches this filename format:
- `newsletter_YYYYMMDD_HHMMSS.md`

Theme: `{THEME}` (example: “Budget travel in Japan”)
Requirements:
- Start with a `#` title line.
- Use headings and bullet points.
- Keep it skimmable and useful.

## 7) Deploy to Cloudflare Pages (CLI)

**Prompt**

I’m a beginner and want to deploy a static Next.js export to Cloudflare Pages using Wrangler.
My project outputs to the `out/` folder.

Please give:
1) how to install Wrangler
2) how to login
3) how to set `wrangler.toml` (project name and output dir)
4) how to deploy
5) common errors and fixes

Also include Windows instructions for PowerShell (e.g. `.\deploy-cloudflare.ps1`) and a cross-platform npm script option (e.g. `npm run deploy:cloudflare`).

## 7b) Deploy to GitHub Pages (free)

**Prompt**

I have a static Next.js export (`output: "export"`) that builds to an `out/` folder.
I want to deploy it to GitHub Pages for free using GitHub Actions.

Please:
1) Tell me which GitHub repo settings to enable for Pages (Source: GitHub Actions).
2) Provide a working `.github/workflows/deploy.yml` that builds and deploys `out/`.
3) Explain how to set required env vars as GitHub Actions Variables:
   - `NEXT_PUBLIC_SITE_NAME`
   - `NEXT_PUBLIC_SITE_URL`
4) Mention pitfalls if the site is hosted under a subpath like `/repo-name` and how to avoid it.

## 8) “Ship updates fast”

**Prompt**

I’m editing Markdown newsletters and want the fastest possible update loop on Cloudflare Pages.
Explain what parts take time (build vs upload), and give practical tips to make it faster without adding a backend.
