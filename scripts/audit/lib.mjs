// Shared helpers for scripts/audit/*.
//
// Every sub-audit returns a list of `Finding` objects and metadata; the runner
// aggregates them into audit-report.json and prints one summary. Individual
// sub-audits do not console.log or process.exit — that is the runner's job.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = fileURLToPath(new URL(".", import.meta.url));
export const ROOT = join(HERE, "..", "..");

/** @typedef {{ severity: "error"|"warn"|"info", audit: string, code: string, message: string, path?: string, location?: string, meta?: object }} Finding */

export const SKIP_DIRS = new Set(["node_modules", "dist", ".git", "coverage"]);
const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);

export function walk(dir, filter = (p) => CODE_EXTS.has(extname(p))) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p, filter));
    else if (filter(p)) out.push(p);
  }
  return out;
}

/** Repo-relative path with forward slashes, for stable output on all hosts. */
export function rel(p) {
  return relative(ROOT, p).split(/[\\/]/).join("/");
}

// Route extraction mirrors scripts/audit-internal-links.mjs so both audits
// disagree on nothing. `*` is dropped: it matches every path and would make
// every check vacuous.
export function extractRoutePatterns() {
  const src = readFileSync(join(ROOT, "src/routes.tsx"), "utf8");
  const patterns = [];
  const re = /\bpath:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(src)) !== null) patterns.push(m[1]);
  return patterns.filter((p) => p !== "*");
}

export function extractRedirectSources() {
  try {
    const { redirects = [] } = JSON.parse(
      readFileSync(join(ROOT, "vercel.json"), "utf8"),
    );
    return redirects.map((r) => r.source);
  } catch {
    return [];
  }
}

// Convert a React Router / Vercel pattern into a RegExp matching real paths.
// `:id` = one segment, `:name*` (Vercel) = zero-or-more segments. Anything
// else is escaped literally.
export function patternToRegex(pattern) {
  const escaped = pattern
    .split("/")
    .map((seg) => {
      if (seg.startsWith(":")) return seg.endsWith("*") ? ".*" : "[^/]+";
      if (seg === "*") return ".*";
      return seg.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    })
    .join("/");
  return new RegExp("^" + escaped + "/?$");
}

/** Parse sitemap.xml URLs to an array of pathnames (host-stripped). */
export function loadSitemapPaths() {
  const xml = readFileSync(join(ROOT, "public/sitemap.xml"), "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return locs.map((u) => {
    try {
      return new URL(u).pathname.replace(/\/$/, "") || "/";
    } catch {
      return u;
    }
  });
}

/**
 * Dynamic-import a .ts data module. Relies on Node 22's native type stripping
 * (same mechanism scripts/generate-sitemap.mjs uses). If a data file grows a
 * runtime dependency on a `@/` alias, this call will fail — that's a real
 * problem worth surfacing loudly, not silently catching.
 */
export async function loadDataModule(relativePath) {
  const abs = join(ROOT, relativePath);
  return import(pathToFileURL(abs).href);
}

/** Build a Finding object with normal shape. */
export function finding(audit, severity, code, message, extra = {}) {
  return { audit, severity, code, message, ...extra };
}

/** Convenience: split findings by severity for reporting. */
export function bySeverity(findings) {
  const errors = findings.filter((f) => f.severity === "error");
  const warns = findings.filter((f) => f.severity === "warn");
  const infos = findings.filter((f) => f.severity === "info");
  return { errors, warns, infos };
}
