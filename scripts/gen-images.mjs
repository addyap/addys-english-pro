
import fs from "fs";
import path from "path";
import sharp from "sharp";

const INPUT_DIR = "public/assets";
const OUT_DIR = "public/assets-optimized";
const exts = new Set([".jpg",".jpeg",".png",".webp",".avif"]);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

async function convertOne(src) {
  const rel = path.relative(INPUT_DIR, src);
  const base = rel.replace(path.extname(rel), "");
  const outDir = path.join(OUT_DIR, path.dirname(rel));
  ensureDir(outDir);

  const img = sharp(src).rotate(); // auto-orient EXIF
  // Generate three widths (you can adjust based on LCP hero needs)
  const widths = [480, 960, 1440];

  const outputs = [];
  for (const w of widths) {
    for (const fmt of ["webp", "avif"]) {
      const outPath = path.join(outDir, `${base}-${w}.${fmt}`);
      await img.clone().resize({ width: w, withoutEnlargement: true })[fmt]({ quality: 70 }).toFile(outPath);
      outputs.push({ fmt, width: w, path: outPath.replace(/\\/g, "/") });
    }
  }
  return outputs;
}

async function main() {
  ensureDir(OUT_DIR);
  const files = walk(INPUT_DIR).filter(f => exts.has(path.extname(f).toLowerCase()));
  const manifest = {};
  for (const file of files) {
    const rel = file.replace(/\\/g, "/");
    try {
      manifest[rel] = await convertOne(file);
      console.log("Optimized:", rel);
    } catch (e) {
      console.warn("Skip (convert error):", rel, e?.message);
    }
  }
  fs.writeFileSync("public/assets-optimized/manifest.json", JSON.stringify(manifest, null, 2));
  console.log("✅ Wrote manifest:", "public/assets-optimized/manifest.json");
}
main().catch(e => { console.error(e); process.exit(1); });
