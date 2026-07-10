#!/usr/bin/env node
/**
 * Serves dist/ the way Vercel serves this project, and honours 404s.
 *
 * `vite preview` answers 200 for every path via its SPA fallback, so a route
 * that never got prerendered still looks healthy. That masks precisely the bug
 * the link check exists to catch. This server has no fallback: an unprerendered
 * path returns 404, exactly as production does.
 *
 * It implements the subset of vercel.json that affects routing:
 *   redirects[]          applied before the filesystem, as Vercel does
 *   cleanUrls: true      /contact resolves to contact.html
 *   trailingSlash: false /contact/ redirects to /contact
 *
 * Usage:
 *   node scripts/serve-dist.mjs            # port 4173
 *   PORT=8080 node scripts/serve-dist.mjs
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const PORT = Number(process.env.PORT || 4173);

if (!fs.existsSync(DIST)) {
  console.error(`No build found at ${DIST}. Run \`npm run build\` first.`);
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(path.join(ROOT, "vercel.json"), "utf8"));

// Vercel path syntax: `:id` spans one segment, `:path*` spans zero or more.
function sourceToRegExp(source) {
  const body = source
    .split("/")
    .map((segment) => {
      if (segment.startsWith(":")) return segment.endsWith("*") ? ".*" : "[^/]+";
      return segment.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    })
    .join("/");
  return new RegExp(`^${body}/?$`);
}

const redirects = (config.redirects ?? []).map((r) => ({ ...r, pattern: sourceToRegExp(r.source) }));
const cleanUrls = config.cleanUrls === true;
const trailingSlash = config.trailingSlash === true;

const MIME = {
  ".css": "text/css",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
  ".xml": "application/xml",
};

// Resolve a request path to a file, mirroring Vercel's static output lookup.
function resolveFile(pathname) {
  const relative = pathname.replace(/^\/+/, "");
  const candidates =
    relative === ""
      ? ["index.html"]
      : cleanUrls
        ? [relative, `${relative}.html`, path.join(relative, "index.html")]
        : [relative, path.join(relative, "index.html")];

  for (const candidate of candidates) {
    const file = path.join(DIST, candidate);
    // Refuse to escape dist/ via ../ in the request path.
    if (!file.startsWith(DIST + path.sep) && file !== DIST) continue;
    if (fs.existsSync(file) && fs.statSync(file).isFile()) return file;
  }
  return null;
}

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, `http://localhost:${PORT}`).pathname);
  } catch {
    res.writeHead(400).end("Bad request");
    return;
  }

  // Redirects run before the filesystem, as they do on Vercel.
  const redirect = redirects.find((r) => r.pattern.test(pathname));
  if (redirect) {
    res.writeHead(redirect.permanent ? 308 : 307, { location: redirect.destination }).end();
    return;
  }

  if (!trailingSlash && pathname.length > 1 && pathname.endsWith("/")) {
    res.writeHead(308, { location: pathname.replace(/\/+$/, "") }).end();
    return;
  }

  const file = resolveFile(pathname);
  if (!file) {
    const notFound = path.join(DIST, "404.html");
    const body = fs.existsSync(notFound) ? fs.readFileSync(notFound) : "Not found";
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" }).end(body);
    return;
  }

  res.writeHead(200, {
    "content-type": MIME[path.extname(file)] ?? "application/octet-stream",
  });
  res.end(fs.readFileSync(file));
});

server.listen(PORT, () => {
  console.log(`Serving ${path.relative(ROOT, DIST)}/ on http://localhost:${PORT} (Vercel semantics, 404s honoured)`);
});
