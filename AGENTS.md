# Agent Instructions (Boilerplate)

This folder (`boilerplate/`) is a standalone, beginner-friendly Next.js newsletter starter that can be copied into a new repo.

## Goals

- Keep the project lightweight: static export, no backend, no database.
- Prefer small, targeted diffs that match existing patterns.
- Avoid adding new frameworks or major dependencies unless explicitly requested.

## Project structure

- `app/` – Next.js App Router pages and layout.
  - `app/page.tsx` – homepage.
  - `app/newsletter/page.tsx` – archive.
  - `app/newsletter/[slug]/page.tsx` – issue page.
  - `app/privacy/page.tsx` – privacy policy.
- `lib/` – domain logic:
  - `lib/newsletters.ts` – loads issues from `news_letter/` at build time.
  - `lib/seo.ts` – site name/url helpers for metadata.
- `styles/` – global CSS (`styles/globals.css`).
- `news_letter/` – Markdown files that become newsletter issues.
- `deploy-cloudflare.sh` / `wrangler.toml` – Cloudflare Pages CLI deployment.

## Newsletter content rules

- Issues are discovered from `news_letter/*.md`.
- Supported filename pattern: `<prefix>_YYYYMMDD_HHMMSS.md` (example: `newsletter_20250101_000000.md`).
- Slug format: `<prefix>-YYYY-MM-DD-HHMMSS` (derived from filename), used at `/newsletter/[slug]`.

## Environment variables

- `NEXT_PUBLIC_SITE_NAME` and `NEXT_PUBLIC_SITE_URL` should be set in `.env.local` for correct canonical URLs in a static export.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` is present only as an optional placeholder for users who later add GA4; this boilerplate does not ship with analytics code.

## Code style

- TypeScript + React (Next.js App Router).
- 2-space indentation.
- Use double quotes in imports and JSX props.
- Prefer simple, readable components (this is for hobbyists/beginners).

## Deployment notes

- `deploy-cloudflare.sh` runs `npm run build` then `wrangler pages deploy out`.
- This project uses `output: "export"` in `next.config.mjs`; the deploy artifact is the `out/` folder.
