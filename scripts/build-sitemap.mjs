
import fs from "fs"; 
import path from "path";

const cfg = JSON.parse(fs.readFileSync("scripts/routes.json", "utf8"));
const now = new Date().toISOString();

const urls = cfg.routes.map(r => {
  const lastmod = r.lastmod || now;
  const priority = r.priority || 0.5;
  const changefreq = r.changefreq || 'monthly';
  
  return `  <url>
    <loc>${cfg.base}${r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`;

fs.mkdirSync("public", { recursive: true });
fs.writeFileSync(path.join("public","sitemap.xml"), xml.trim());
console.log("✅ sitemap.xml generated:", cfg.routes.length, "routes with full metadata");
