
import fs from "fs"; 
import path from "path";

const cfg = JSON.parse(fs.readFileSync("scripts/routes.json", "utf8"));
const now = new Date().toISOString().slice(0,10);

const urls = cfg.routes.map(r => {
  return `  <url>
    <loc>${cfg.base}${r.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`;
}).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.mkdirSync("public", { recursive: true });
fs.writeFileSync(path.join("public","sitemap.xml"), xml.trim());

console.log("✅ sitemap.xml generated:", cfg.routes.length, "routes");
console.log("Routes included:");
cfg.routes.forEach(route => {
  console.log(`  - ${cfg.base}${route.path} (${route.title})`);
});
