
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

## Sitemap
The sitemap is generated automatically by the `prebuild` step (`node scripts/generate-sitemap.mjs`), which runs before every `npm run build`. It reads routes from `src/routes.tsx` and blog posts from `src/data/grammarBlogPosts.ts`.

## Link integrity
`node scripts/audit-internal-links.mjs` statically checks that internal links resolve to a route or a `vercel.json` redirect. `scripts/check-links.mjs` crawls a running preview server with Playwright and fails on internal 4xx/5xx:
```sh
npm run preview &
PW_BASE_URL=http://localhost:4173 node scripts/check-links.mjs
```

## Pre-deploy safety
```sh
npm run build
node scripts/verify-indexability.mjs
node scripts/audit-internal-links.mjs
node scripts/audit-assets.mjs
```
Fix failures before publishing. See the root [README](../README.md#checks) for the full list.

## Hosting
Deployed on Vercel. Redirects and security headers live in `vercel.json` — there is no `.htaccess` or Apache layer.
