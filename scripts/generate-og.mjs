
// Simple OG image generation without canvas dependency
// This creates placeholder files - replace with actual image generation later
import fs from "fs";
import path from "path";

const cfg = JSON.parse(fs.readFileSync("scripts/routes.json", "utf8"));
const outDir = path.join("public", "og");
fs.mkdirSync(outDir, { recursive: true });

// Create a simple placeholder for each route
for (const r of cfg.routes) {
  const filename = (r.path === "/" ? "home" : r.path.replace(/\//g, "-").replace(/^-/, "")) + ".txt";
  const content = `OG Image placeholder for: ${r.title || "Antony Addy"}`;
  fs.writeFileSync(path.join(outDir, filename), content);
  console.log("OG placeholder created:", filename);
}
console.log("OG placeholders saved to /public/og/");
