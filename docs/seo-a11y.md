
# antonyaddy.com — SEO, A11y, Perf, PWA & CI

## SEOHead
Use `<SEOHead />` in every top-level page. Provide `title`, `description`, `canonical`, and `image` when defaults aren't correct.
JSON‑LD helpers available: `jsonLdPerson`, `jsonLdOrganization`, `jsonLdBreadcrumbs`, `jsonLdCourse`.

## Static files
`public/robots.txt` and `public/sitemap.xml` are served as-is. Keep `public/health.html` and `public/status.html` JS‑free so they render even if the app bundle fails.

## PWA
`public/manifest.webmanifest` + `src/pwa/sw.js` registered in `index.html`. Place icons in `public/icons/` (192/512). Test by "Add to Home Screen" on mobile.

## Analytics
Set `VITE_GA_ID` in `.env` or assign `window.__GA_ID__` in `index.html`. GA is disabled until a real ID is provided. IP anonymized.

## Core Web Vitals
Import `src/monitor/vitals.ts` once at bootstrap. Metrics log to console and GA if enabled.

## Sitemap & OG images
Edit `scripts/routes.json`.  
- `npm run build:sitemap` generates `public/sitemap.xml`.  
- Place a template at `public/og/og-template.png` then `npm run og` to generate per-route OG cards in `public/og/`.

## Link integrity
`npm run check:links` crawls the preview and fails on internal 4xx/5xx.

## Pre-deploy safety
Run: `npm run ci:preview && npm run ci:lh && npm run a11y && npm run check:links && npm run build:sitemap`. Fix failures before publishing.

## Apache rewrites
`public/.htaccess` forces HTTPS + non‑www, strips trailing slashes, and enables SPA fallback to `index.html`.
