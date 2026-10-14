# Launch audit — October 2026

Full-site audit of antonyaddy.com (visual, UX, motion, a11y, SEO, performance,
security, conversion), run against the production SSG build served with
Vercel semantics (`scripts/serve-dist.mjs`), plus code review.

**Verification after fixes:** `tsc` clean · ESLint 0 errors (7 pre-existing
shadcn warnings) · build OK · `npm run audit` 0 errors (was 3) · Playwright
19/19 — axe WCAG 2 A/AA clean on 9 templates (was 9/9 failing) and a new
hydration regression test on the same 9 · service worker verified in Chromium
(no first-visit reload, offline fallback works).

Severity: **Critical** = breaks the page or a conversion path for many users ·
**High** = measurable harm to conversion, a11y compliance or security ·
**Medium** = noticeable quality/perf cost · **Low** = polish.

---

## 1. Fixed in this pass

| # | Sev | Area | Issue → impact | Fix |
|---|---|---|---|---|
| 1 | Critical | Perf / SEO | **Homepage hydration mismatch.** `HubHeroLigne` rendered `<style>{css}</style>`; React SSR entity-escapes `'` → `&#x27;`, which browsers don't decode inside `<style>`. The prerendered hero CSS was broken (`font-family:&#x27;Poppins&#x27;`) and React threw #425/#418/#422, **discarded the whole SSR tree and re-rendered client-side** on every homepage visit. | `dangerouslySetInnerHTML` for the style. New `tests/hydration.spec.ts` guards 9 templates. |
| 2 | Critical | Conversion / LCP | **Hero H1, route cards and both CTAs were `opacity:0` for 4.45–4.8 s after JS ran.** First screen was an empty navy box; LCP delayed by ~5 s; if JS stalled, the content never appeared (`html.js` is set before JS loads). | Text/cards/CTAs are never hidden; only the decorative diagram animates, compressed to ~2.3 s. |
| 3 | Critical | UX | **Every first-time visitor got a forced page reload** ~1 s after landing: `main.tsx` reloads on `controllerchange`, which also fires when a brand-new SW's `clients.claim()` takes control. Interrupted reading/typing, double-counted pageviews. | Reload only when an older worker is being replaced (`hadController`). Verified in Chromium. |
| 4 | High | Conversion | **All 12 WhatsApp CTAs were `href="#"` (and `preventDefault`) until `/api/whatsapp` answered**, in prerendered HTML too. Slow/failed edge call = dead primary CTA. The hiding bought nothing: the number is already public in JSON-LD, legal notices and the contact page. | `useWhatsAppLink` starts with a working `wa.me` link and upgrades to the prefilled one. Dead guards removed. |
| 5 | High | PWA / offline | **Service worker bugs:** `caches.match(a) \|\| caches.match(b)` (a Promise is always truthy → offline fallback never ran); `endsWith('/'.substring(1))` = `endsWith('')` matched **every** request, so `/api/*` and POSTs went through stale-while-revalidate and the API branch was dead; precached `/index.html`, `/health.html` redirect under `cleanUrls` and can't answer navigations. | Rewritten `public/sw.js` (v2.2.0): same-origin GET only, API/POST bypass, network-first pages with bounded cache + home fallback, cache-first hashed assets, SWR for the rest. |
| 6 | High | Security | **Contact confirmation email was a spam relay**: it echoed the submitted message to whatever address was typed, from `contact@antonyaddy.com` → anyone could send arbitrary text in your name (domain-reputation risk). No length limits; raw exception text returned to clients. | Message no longer echoed; length caps (120 / 254 / 5000); generic `server_error`. Confirmation links to the test instead of the redirected `/exercices`. |
| 7 | High | A11y (WCAG 1.4.3) | **Contrast failures on every page**: green WhatsApp buttons `#16a34a`/white = 3.3:1; About/Training `#25D366`/white ≈ 2:1; homepage CTAs `#E8473B`/white 3.9:1, `#7A62FF`/white 4.2:1. | `green-700/800`, `#C8352A`, `#6A4FF0` (all ≥ 5:1). |
| 8 | High | CI | **`npm run audit` failed on every push** (3 errors): the wiring rule for `legacyBlogPosts` still expected hardcoded ids, but `Blog.tsx` now iterates the data. Red CI hides real regressions. | Rule switched to `iterated`. |
| 9 | Medium | A11y | Hero route links had `role="listitem"` **on the `<a>`**, replacing the link role — screen readers didn't announce them as links. | Real `<ul>/<li>`; "(nouvel onglet)" hint on external links. |
| 10 | Medium | A11y / perf | Client-logo **Swiper autoplay with no pause control** (WCAG 2.2.2), ignored reduced-motion, ~80 KB JS+CSS, logos absent from SSR HTML. | Static 5-logo grid, prerendered. `swiper` removed. |
| 11 | Medium | Perf | **Entry JS 109 KB gz** carried unused React Query, Tooltip provider, two toasters (Radix + Sonner) and i18next/react-i18next for one fixed French JSON. | Removed → **72 KB gz (−34 %)**. `t()` is now a 20-line typed lookup. |
| 12 | Medium | Perf | Site logo was a **1920×1920 PNG (94 KB) shown at ≤52 px on every page**; creations logo 128 KB. | 192 px WebP: **6 KB** and **8 KB**. |
| 13 | Medium | Perf | `PrefetchRoutes` injected `<link rel=prefetch>` for **5 full HTML documents on every route change** — client-side navigation never uses them (~150 KB wasted per view on mobile). | Prefetches the route **JS chunks** on idle, once; skipped on Save-Data/2G. |
| 14 | Medium | A11y / UX | Contact form: errors not tied to fields (no `aria-invalid`/`aria-describedby`), `text-red-500` (3.8:1), no `autocomplete`, browser bubbles competing with French messages, submit `aria-label` ≠ visible text (WCAG 2.5.3), no focus on first error. | All fixed; `noValidate`, `maxLength` matches server caps. |
| 15 | Medium | A11y (1.4.1) | Inline text links distinguished by colour only (2.06:1 vs body text). | Underlined (`underline-offset-2`), thicker on hover. |
| 16 | Medium | Visual | Inter/Poppins requested with a `&text=` glyph whitelist that omitted `@ / + € ’ #` → emails, URLs, prices, curly apostrophes rendered in a fallback font mid-word. | Full latin request. |
| 17 | Medium | Perf / battery | Hero parallax ran a `requestAnimationFrame` loop **forever**, also on touch devices. | Runs only while easing, fine pointers only. |
| 18 | Medium | Perf | `DiagnosticsPanel` monkey-patched `window.fetch` for every visitor (panel only shows with `?diag`). | Patched only when open. |
| 19 | Medium | Conversion | Laptop (1366×768): route cards below the fold; H1 forced to 4 lines by `max-width:18ch`. | Diagram capped (28vh / 24vh mobile), H1 26ch on desktop → cards on first screen; all 3 cards on a 375×812 phone. |
| 20 | Low | SEO | Home (75 ch) and About (76 ch) titles truncated and near-identical (cannibalisation). | 60 ch / 54 ch, distinct intents. |
| 21 | Low | Perf | Dead TTS guard (no speech on the site) added a `beforeunload` listener, which blocks bfcache in some browsers; console diagnostics in prod. | Removed. |
| 22 | Low | A11y | Hero text relied on a `z-index:-1` child for its dark background (no computed background → fails in forced-colours / if the layer drops). | Solid base colour on `.llx`. |

Also: `HubHero.tsx` and `LazySwiper.tsx` (unused) deleted; `.claude/launch.json`
gains an `antonyaddy-dist` config that serves the production build.

---

## 2. Open — needs your decision or access I don't have

| # | Sev | Issue | Impact | Recommended fix |
|---|---|---|---|---|
| A | **High** | **Analytics may be off entirely.** Umami is inert unless `VITE_UMAMI_SRC` + `VITE_UMAMI_WEBSITE_ID` are set in Vercel. **CSP part done:** `script-src` allows `https://cloud.umami.is`, `connect-src` allows `https://cloud.umami.is` + `https://api-gateway.umami.dev` (Umami Cloud). | No conversion data: you can't tell whether these fixes moved anything. | Set `VITE_UMAMI_SRC=https://cloud.umami.is/script.js` and `VITE_UMAMI_WEBSITE_ID` in Vercel, redeploy, verify a `whatsapp_cta_click` event arrives. If you move to a self-hosted Umami, swap the two CSP origins. |
| B | ✅ Done | ~~CSP carries stale allowances:~~ Removed GA, Google Translate (script/connect/frame), jsDelivr and old Supabase; `font-src 'self'`, `style-src 'self' 'unsafe-inline'` (inline styles still needed for React `style` props and the critical CSS). Was: GA, Google Translate, jsDelivr, and the old Supabase project (`gkwzodsz…`, no longer used by the browser). | Larger script/connect surface than needed. | Remove them in the same edit as A. |
| C | ✅ Done | Self-hosted: 5 latin WOFF2 files in `public/fonts` (Inter 400–700 variable, Bricolage Grotesque opsz/wght variable, Poppins 500/600/700; ~150 KB total, only Inter + Bricolage preloaded), `@font-face` in the critical `<style>` of `index.html`, `/fonts/*` cached 1 year immutable (rename a file if you ever replace it). Built HTML has no `fonts.googleapis.com`/`gstatic` reference; verified in Chromium that no request leaves for Google. Was: **Google Fonts loaded from Google's servers** sends every visitor's IP to Google (cf. LG München 2022; CNIL guidance). Clashes with the "no consent banner needed" stance. | GDPR exposure. | Self-host Inter/Poppins/Bricolage as WOFF2 in `/public/fonts`, drop the preconnects, tighten `font-src`/`style-src` to `'self'`. |
| D | Medium | Contact rate limiter **fails open** (Supabase error or missing `x-forwarded-for` → no limit). | Abuse window if Supabase is down. | Fail closed for the visitor-confirmation email at least; keep the notification to you. |
| E | ✅ Done | Blog articles now use `/og/og-blog.png` (1200×640, set in `BlogArticle.tsx` for SEOHead + Article JSON-LD); `/contact` uses `/og/antonyaddy-hub.jpg`. Was: Social cards: `/contact` uses a LinkedIn **QR code** (1272×1295) as `og:image`; blog posts use a 628² square logo. `public/og/og-blog.png` (1200×640) exists but is unused. | Weak link previews on LinkedIn/WhatsApp, where this audience shares. | Use `og-blog.png` for blog posts and `antonyaddy-hub.jpg` for contact. |
| F | Medium | Content audit flags **65 of 69 blog posts as thin**. | Limited organic reach for the grammar library. | Expand the top-traffic posts first (examples, exercises, FAQ schema). |
| G | Low | A deploy while a visitor is mid-session triggers an automatic reload (by design) — could wipe a half-typed contact message. | Rare lost enquiry. | Reload on the next navigation instead of immediately. |
| H | Low | Phone hero: WhatsApp CTA sits ~60 px below the fold on 375×812 (header WhatsApp button is visible). | Minor. | Optional: move the CTA above the route cards on mobile. |
| I | Low | `/blog/anglais-professionnel-competence-cle` title 73 ch; `aktivator.pdf` (1.8 MB) in `public/` — confirm it's linked; footer year baked at build time. | Polish. | Shorten title; remove PDF if orphaned; rebuild yearly (or render year client-side). |

---

## 3. Launch checklist

**Mobile fallbacks**
- [x] No horizontal scroll at 375 px; hero cards on first screen
- [x] Header WhatsApp button visible on mobile; CTAs work without JS (real `href`s)
- [x] Reduced-motion: hero renders at rest; no auto-moving carousel
- [ ] Test on a real iPhone (Safari) and a mid-range Android (Chrome) on 4G

**CTAs & conversion paths**
- [x] WhatsApp links valid in prerendered HTML on all 12 placements
- [x] Contact form: inline errors, focus management, success → `/thank-you`
- [ ] Send one real form submission on production; confirm both emails arrive and the confirmation no longer echoes the message
- [ ] Click each hub card (`ia.` / `creations.` subdomains) on production

**Assets**
- [x] Logos resized to WebP; carousel removed
- [x] Self-host fonts (Open C); fix social cards (Open E)

**Performance**
- [x] Entry JS 72 KB gz; no HTML prefetch; no idle rAF loop
- [ ] Run `LH_URL=… npm run lighthouse` on the deployed preview; target LCP < 2.5 s, CLS < 0.1 on mobile

**Accessibility**
- [x] axe WCAG 2 A/AA: 0 violations on 9 templates (`npx playwright test`)
- [ ] Keyboard-only pass on the mobile menu and dropdowns; one VoiceOver pass on the contact form

**Cross-browser**
- [ ] Safari 17+, Firefox, Chrome, Edge: hero animation (`offset-path`), service worker, form
- [ ] Service worker update path: deploy twice, confirm the second deploy activates without a first-visit reload

**SEO metadata**
- [x] One canonical, description, hreflang, OG/Twitter tags per page; titles ≤ 70 ch (one blog exception)
- [x] `robots.txt`, `sitemap.xml` (89 URLs), 404 + thank-you `noindex`
- [ ] Resubmit sitemap in Search Console after deploy; inspect `/` with the URL Inspection tool

**Analytics**
- [x] Open A, CSP: Umami Cloud origins allowed
- [ ] Open A: set Umami env vars in Vercel; verify pageview + `whatsapp_cta_click` + `contact_submit_success` in Umami

**Error handling**
- [x] API returns generic errors; form shows French error banner + WhatsApp fallback
- [x] Offline: visited pages served from cache, home as fallback
- [ ] Check Vercel function logs for `send-contact-email` after the test submission

**Deployment**
- [ ] Vercel env: `RESEND_API_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (+ Umami)
- [ ] CI green on the PR (audit now passes); deploy preview → smoke test → promote
