# antonyaddy.com

Marketing site for Antony Addy, a native British English trainer based in Fréjus, teaching in the Var and Alpes-Maritimes and remotely.

Static site: every route is prerendered at build time and served as HTML, so search engines and social crawlers see full content without running JavaScript.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **vite-react-ssg** — static generation, one HTML file per route
- **Tailwind CSS** + **shadcn/ui** (Radix primitives)
- **react-helmet-async** — per-page title, meta description, canonical, Open Graph
- **i18next** — French/English copy
- **Supabase** — contact form and questionnaire submissions
- Deployed on **Vercel**

## Requirements

**Node.js 22.18 or newer.** The `prebuild` step imports a TypeScript data module directly, which relies on Node's native type stripping. Node 20 fails with `ERR_UNKNOWN_FILE_EXTENSION` before the build starts.

## Getting started

```sh
npm install
cp .env.example .env   # fill in the Supabase values
npm run dev            # http://localhost:8080
```

`.env` needs `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`. Both are public client-side values — copy them from the Supabase dashboard under Project Settings → API. Never put the `service_role` key here; it would ship in the browser bundle.

The dev server runs without them, but the contact form and questionnaire will not submit.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server on port 8080 |
| `npm run build` | Regenerates the sitemap, then prerenders every route to `dist/` |
| `npm run preview` | Serves the built site on port 4173 |
| `npm run lint` | ESLint |

## Checks

The unified site audit runs on every push and pull request. It aggregates four sub-audits (internal-links, wiring, assets, indexability), writes a single `audit-report.json`, and fails the build only on `error`-severity findings — `warn`s stay visible without blocking merges.

```sh
npm run build
npm run audit                    # all four sub-audits
npm run audit -- wiring          # or run one sub-audit
FAIL_ON=warn npm run audit       # promote warnings to failures for a strict pass
```

Sub-audits live under `scripts/audit/`. Adding a new one takes an import + one row in the registry in `scripts/audit/index.mjs`.

Every push uploads `audit-report.json` as a GitHub Actions artifact; every PR downloads main's most-recent baseline, runs `scripts/audit/diff.mjs`, and posts a sticky comment showing new / resolved findings vs main.

`scripts/check-links.mjs` crawls the built site with Playwright and needs a running preview server; it's a separate integration test, not part of `npm run audit`:

```sh
npm run preview &
PW_BASE_URL=http://localhost:4173 node scripts/check-links.mjs
```

Lighthouse runs against a matrix of 5 representative pages (home, blog index, a blog post, an audience landing, a city landing) — a single-URL run masked regressions in individual templates. Needs the same running preview:

```sh
node scripts/serve-dist.mjs &
LH_URL=http://localhost:4173 npm run lighthouse
LH_STRICT=0 npm run lighthouse    # report scores without failing on threshold miss
```

## Routing and redirects

Routes are declared in `src/routes.tsx` using React Router's data-router object form. Blog article paths come from `src/data/grammarBlogPosts.ts`, which also drives the generated sitemap, so the two cannot drift apart.

`vercel.json` holds ~46 redirects. Many of them 301 paths such as `/exercices`, `/reading` and `/ressources-gratuites` to [anglaisadistance.fr](https://anglaisadistance.fr), where that content now lives. **A path that has no entry in `src/routes.tsx` is not necessarily a dead link** — check `vercel.json` before "fixing" one.

## A note on `public/lovable-uploads/`

The site was originally scaffolded with Lovable. That integration has been removed, but the images still live under `public/lovable-uploads/`. They are ordinary self-hosted assets — the logo, hero image and Open Graph image among them — and the directory name is now just a historical accident. Renaming it would break the `og:image` URLs already cached by Google and the social networks, so it stays.
