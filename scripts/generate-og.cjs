
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const cfgPath = path.join(__dirname, "routes.json");
const templatePath = path.join(__dirname, "template-1200x630.png");
const outDir = path.join(ROOT, "public", "og");

function ensureFile(p) {
  if (!fs.existsSync(p)) throw new Error(`Missing file: ${p}`);
}

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

function linkOrCopy(src, dst) {
  try {
    if (fs.existsSync(dst)) fs.unlinkSync(dst);
    fs.symlinkSync(src, dst);
    return "symlinked";
  } catch {
    fs.copyFileSync(src, dst);
    return "copied";
  }
}

(function main() {
  ensureFile(cfgPath);
  ensureFile(templatePath);
  fs.mkdirSync(outDir, { recursive: true });

  const cfg = JSON.parse(fs.readFileSync(cfgPath, "utf8"));
  if (!cfg.routes || !Array.isArray(cfg.routes)) {
    throw new Error(`Invalid routes.json. Expected { routes: [...] }`);
  }

  // canonical default
  const defaultName = "default-1200x630.png";
  const defaultOut = path.join(outDir, defaultName);
  fs.copyFileSync(templatePath, defaultOut);

  let made = 0, reused = 0;
  for (const r of cfg.routes) {
    const slug = safeSlug(r.path);
    const file = `${slug}-1200x630.png`;
    const target = path.join(outDir, file);

    if (fs.existsSync(target)) { reused++; continue; }
    const how = linkOrCopy(defaultOut, target);
    made++;
    console.log(`OG ${how}: public/og/${file}`);
  }
  console.log(`✅ OG ready. default: /og/${defaultName} | created: ${made} | existing: ${reused}`);
})();
