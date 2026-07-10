#!/usr/bin/env node
/**
 * Lightweight internal link audit (read-only).
 *
 * Scans src/ for internal links (Link `to=...`, `href=...`, `navigate(...)`)
 * and validates each against the route patterns declared in src/routes.tsx.
 *
 * Usage:
 *   node scripts/audit-internal-links.mjs
 *
 * Exit code: 0 = clean, 1 = potential broken links found.
 *
 * This script is purely diagnostic — it never modifies files.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SRC = join(ROOT, "src");
const ROUTER_FILE = join(SRC, "routes.tsx");
const VERCEL_FILE = join(ROOT, "vercel.json");

// ---------- 1. Extract route patterns from routes.tsx ----------
function extractRoutes() {
  const src = readFileSync(ROUTER_FILE, "utf8");
  const routes = [];
  // Data-router object form: { path: "/blog/:id", lazy: ... }
  const re = /\bpath:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(src)) !== null) routes.push(m[1]);
  // The 404 catch-all matches every path, so keeping it here would make every
  // link "valid" and the audit vacuous. A link that only matches `*` is broken.
  return routes.filter((r) => r !== "*");
}

// Vercel resolves these before the SPA ever loads, so a link to a redirect
// source is live even though no React route declares it. Several deliberately
// hand off to anglaisadistance.fr; without this the audit calls them broken.
function extractRedirectSources() {
  try {
    const { redirects = [] } = JSON.parse(readFileSync(VERCEL_FILE, "utf8"));
    return redirects.map((r) => r.source);
  } catch {
    return [];
  }
}

// Convert a router pattern into a RegExp matching real URL paths.
function patternToRegex(pattern) {
  if (pattern === "*") return /^.*$/;
  // Escape regex chars except `:` and `*`
  const escaped = pattern
    .split("/")
    .map((seg) => {
      // Vercel's `:path*` spans zero or more segments; `:id` spans exactly one.
      if (seg.startsWith(":")) return seg.endsWith("*") ? ".*" : "[^/]+";
      if (seg === "*") return ".*";
      return seg.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    })
    .join("/");
  return new RegExp("^" + escaped + "/?$");
}

// ---------- 2. Walk src/ and collect internal link literals ----------
const SKIP_DIRS = new Set(["node_modules", "dist", ".git", "integrations"]);
const EXTS = new Set([".ts", ".tsx", ".js", ".jsx"]);

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, files);
    else if (EXTS.has(extname(name))) files.push(p);
  }
  return files;
}

// Match three forms:
//   to="/path"          | to={`/path/${x}`}          (Link)
//   href="/path"        | href={`/path`}             (anchors)
//   navigate("/path")   | navigate(`/path/${x}`)     (router hook)
const LINK_RE =
  /(?:\bto|\bhref)=\{?[`"']([/][^"'`)}\s${]*)|navigate\(\s*[`"']([/][^"'`)\s${]*)/g;

function extractLinksFromFile(file) {
  const src = readFileSync(file, "utf8");
  const out = [];
  let m;
  while ((m = LINK_RE.exec(src)) !== null) {
    const path = m[1] || m[2];
    if (!path || !path.startsWith("/")) continue;
    // Skip protocol-relative or hash/query-only
    if (path.startsWith("//")) continue;
    // Strip trailing template-literal opener residue
    const clean = path.replace(/\$$/, "");
    // Compute line number
    const line = src.slice(0, m.index).split("\n").length;
    out.push({ path: clean, file: file.replace(ROOT, ""), line });
  }
  return out;
}

// ---------- 3. Validate each link against route patterns ----------
function isStaticPath(p) {
  // A path is "concrete enough to test" when it has no template placeholder.
  // Dynamic segments built from `${...}` are stripped at extraction time, so
  // the literal prefix is what we test. We replace any trailing empty segment
  // and check the longest path that survived.
  return !p.includes("$") && !p.includes("{");
}

function matchesAnyRoute(path, regexes) {
  // Try as-is
  if (regexes.some((r) => r.test(path))) return true;
  // Try as a parent prefix (e.g. "/exercices/dictation/" with no id) by
  // appending a placeholder segment — covers truncated dynamic paths.
  if (regexes.some((r) => r.test(path + "/1"))) return true;
  return false;
}

// ---------- 4. Run ----------
const routePatterns = extractRoutes();
const redirectSources = extractRedirectSources();
const routeRegexes = [...routePatterns, ...redirectSources].map(patternToRegex);
const files = walk(SRC);

const all = [];
for (const f of files) all.push(...extractLinksFromFile(f));

// Deduplicate (path + file + line)
const seen = new Set();
const unique = all.filter((x) => {
  const k = `${x.path}::${x.file}::${x.line}`;
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

const broken = [];
const skipped = [];
for (const link of unique) {
  // Strip trailing slash for normalization
  const p = link.path.replace(/\/+$/, "") || "/";
  if (!isStaticPath(p)) {
    skipped.push(link);
    continue;
  }
  if (!matchesAnyRoute(p, routeRegexes)) broken.push({ ...link, normalized: p });
}

// ---------- 5. Report ----------
console.log("──────────────────────────────────────────────");
console.log(" Internal Link Audit (read-only)");
console.log("──────────────────────────────────────────────");
console.log(`Routes declared in routes.tsx : ${routePatterns.length}`);
console.log(`Redirects in vercel.json       : ${redirectSources.length}`);
console.log(`Files scanned                  : ${files.length}`);
console.log(`Internal links found           : ${unique.length}`);
console.log(`  ↳ static (testable)          : ${unique.length - skipped.length}`);
console.log(`  ↳ dynamic (skipped)          : ${skipped.length}`);
console.log("");

if (broken.length === 0) {
  console.log("✅ No broken internal links detected.");
  process.exit(0);
}

console.log(`❌ ${broken.length} potentially broken link(s):`);
console.log("");
for (const b of broken) {
  console.log(`  ${b.normalized}`);
  console.log(`     at ${b.file}:${b.line}`);
}
console.log("");
console.log("Note: dynamic links (template literals) are not validated by");
console.log("this script — only their literal prefix is checked elsewhere.");
process.exit(1);
