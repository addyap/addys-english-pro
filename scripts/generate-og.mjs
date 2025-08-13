
// Simple OG image generation without canvas dependency
// This creates placeholder files using symlinks/copies from template
import fs from "fs";
import path from "path";

const cfg = JSON.parse(fs.readFileSync("scripts/routes.json", "utf8"));
const templatePath = "scripts/template-1200x630.png";
const outDir = path.join("public", "og");

fs.mkdirSync(outDir, { recursive: true });

// Create default template in output directory
const defaultOut = path.join(outDir, "default-1200x630.png");
fs.copyFileSync(templatePath, defaultOut);

function safeSlug(routePath) {
  if (!routePath || routePath === "/") return "home";
  return routePath
    .split("?")[0]
    .split("#")[0]
    .replace(/\//g, "-")
    .replace(/^-+/, "")
    .replace(/-+/g, "-")
    .toLowerCase();
}

// Create per-route OG images
for (const r of cfg.routes) {
  const slug = safeSlug(r.path);
  const filename = `${slug}-1200x630.png`;
  const target = path.join(outDir, filename);
  
  if (!fs.existsSync(target)) {
    try {
      // Try to create symlink first, fallback to copy
      fs.symlinkSync(path.resolve(defaultOut), target);
      console.log("OG symlinked:", filename);
    } catch {
      fs.copyFileSync(defaultOut, target);
      console.log("OG copied:", filename);
    }
  }
}

console.log("OG images ready in /public/og/");
