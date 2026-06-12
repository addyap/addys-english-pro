// Auto-generates public/sitemap.xml and public/robots.txt at build time.
// Run via the `prebuild` npm hook so dist/ always ships fresh files
// (Vite copies public/* into dist/* during the build).
//
// Blog routes are derived from src/data/grammarBlogPosts.ts — the same
// source vite-react-ssg's getStaticPaths reads — so the sitemap can never
// drift out of sync with the prerendered routes.

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "https://www.antonyaddy.com";

// Import the TS data module directly (Bun handles .ts natively).
const blogModule = await import(
  pathToFileURL(resolve(__dirname, "../src/data/grammarBlogPosts.ts")).href
);
const grammarBlogPosts = blogModule.grammarBlogPosts ?? [];

// Static marketing/legal routes (lifted verbatim from src/routes.tsx).
// /questionnaire and external-redirect / 404 routes are intentionally excluded.
const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/qui-je-suis", priority: "0.9", changefreq: "monthly" },
  { path: "/offres-de-formation", priority: "0.9", changefreq: "weekly" },
  { path: "/temoignages", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },

  // Audience landing pages
  { path: "/anglais-entreprise", priority: "0.9", changefreq: "monthly" },
  { path: "/anglais-cadres", priority: "0.9", changefreq: "monthly" },
  { path: "/anglais-particuliers", priority: "0.9", changefreq: "monthly" },
  { path: "/anglais-etudiants", priority: "0.9", changefreq: "monthly" },

  // City landing pages
  { path: "/cours-anglais-frejus", priority: "0.8", changefreq: "monthly" },
  { path: "/cours-anglais-nice", priority: "0.8", changefreq: "monthly" },
  { path: "/cours-anglais-cannes", priority: "0.8", changefreq: "monthly" },
  { path: "/cours-anglais-antibes", priority: "0.8", changefreq: "monthly" },
  { path: "/cours-anglais-sophia-antipolis", priority: "0.8", changefreq: "monthly" },

  // Free resources
  { path: "/test-de-positionnement", priority: "0.8", changefreq: "monthly" },

  // Legal
  { path: "/mentions-legales", priority: "0.3", changefreq: "yearly" },
  { path: "/politique-confidentialite", priority: "0.3", changefreq: "yearly" },
  { path: "/cgv", priority: "0.3", changefreq: "yearly" },
];


const blogRoutes = grammarBlogPosts.map((p) => ({
  path: `/blog/${p.id}`,
  priority: "0.7",
  changefreq: "monthly",
  lastmod: p.date && /^\d{4}-\d{2}-\d{2}/.test(p.date) ? p.date : undefined,
}));

const all = [...staticRoutes, ...blogRoutes];

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const urls = all
  .map((r) => {
    const lines = [
      "  <url>",
      `    <loc>${escape(BASE + r.path)}</loc>`,
    ];
    if (r.lastmod) lines.push(`    <lastmod>${r.lastmod}</lastmod>`);
    if (r.changefreq) lines.push(`    <changefreq>${r.changefreq}</changefreq>`);
    if (r.priority) lines.push(`    <priority>${r.priority}</priority>`);
    lines.push("  </url>");
    return lines.join("\n");
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `# Robots.txt for antonyaddy.com
User-agent: *
Allow: /

# Private / non-indexable
Disallow: /questionnaire
Disallow: /thank-you
Disallow: /auth
Disallow: /admin

Sitemap: ${BASE}/sitemap.xml
`;

mkdirSync(resolve(__dirname, "../public"), { recursive: true });
writeFileSync(resolve(__dirname, "../public/sitemap.xml"), xml);
writeFileSync(resolve(__dirname, "../public/robots.txt"), robots);

console.log(
  `✅ sitemap.xml (${all.length} urls: ${staticRoutes.length} static + ${blogRoutes.length} blog) + robots.txt written to public/`,
);
