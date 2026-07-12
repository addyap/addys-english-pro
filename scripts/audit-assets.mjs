
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

function scanDirectory(dir, extensions = []) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...scanDirectory(fullPath, extensions));
    } else if (
      extensions.length === 0 ||
      extensions.some((ext) => item.name.toLowerCase().endsWith(ext))
    ) {
      results.push(fullPath);
    }
  }
  return results;
}

function findAssetReferences(assetFiles, searchDirs) {
  const references = {};
  for (const assetPath of assetFiles) {
    const relativePath = path.relative(projectRoot, assetPath).replace(/\\/g, "/");
    references[relativePath] = [];
  }
  // index.html sits at the project root, outside every search dir, but it can
  // reference assets directly (preloads, favicons). Omitting it reports those
  // assets as unused.
  const rootHtml = path.join(projectRoot, "index.html");
  const searchFiles = [
    ...searchDirs.flatMap((dir) =>
      scanDirectory(dir, [".tsx", ".ts", ".jsx", ".js", ".html", ".css", ".md"])
    ),
    ...(fs.existsSync(rootHtml) ? [rootHtml] : []),
  ];

  for (const filePath of searchFiles) {
    let content = "";
    try {
      content = fs.readFileSync(filePath, "utf8");
    } catch {
      continue;
    }
    for (const relAsset of Object.keys(references)) {
      const assetName = path.basename(relAsset);
      const patterns = [
        relAsset,
        assetName,
        relAsset.replace(/^public\//, "/"),
        "/" + relAsset,
      ];
      for (const pattern of patterns) {
        if (content.includes(pattern)) {
          const relFile = path.relative(projectRoot, filePath).replace(/\\/g, "/");
          if (!references[relAsset].includes(relFile)) {
            references[relAsset].push(relFile);
          }
          break;
        }
      }
    }
  }
  return references;
}

function auditAssets() {
  console.log("🔍 Auditing project assets...");

  const publicDir = path.join(projectRoot, "public");
  const srcDir = path.join(projectRoot, "src");

  // Scan every static-asset directory under public/, not just public/assets —
  // stub and unreferenced files also accumulate in public/images and public/og.
  const assetDirs = ["assets", "images", "og"]
    .map((d) => path.join(publicDir, d))
    .filter((d) => fs.existsSync(d));

  if (assetDirs.length === 0) {
    console.log("No asset directories found under public/ (assets, images, og)");
    const empty = {
      timestamp: new Date().toISOString(),
      summary: { total: 0, used: 0, unused: 0 },
      used: [],
      unused: [],
    };
    fs.writeFileSync(
      path.join(projectRoot, "audit-assets-report.json"),
      JSON.stringify(empty, null, 2)
    );
    return;
  }

  const exts = [
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".svg",
    ".webp",
    ".ico",
    ".pdf",
    ".mp4",
    ".webm",
  ];
  const assetFiles = assetDirs.flatMap((dir) => scanDirectory(dir, exts));
  const references = findAssetReferences(assetFiles, [srcDir, publicDir]);

  const used = [];
  const unused = [];

  for (const [asset, refs] of Object.entries(references)) {
    if (refs.length > 0) used.push({ asset, references: refs });
    else unused.push(asset);
  }

  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: assetFiles.length,
      used: used.length,
      unused: unused.length,
    },
    used,
    unused,
  };

  const outPath = path.join(projectRoot, "audit-assets-report.json");
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

  console.log("\n📊 Asset Audit Complete:");
  console.log(`   Total assets: ${report.summary.total}`);
  console.log(`   Used assets:  ${report.summary.used}`);
  console.log(`   Unused assets:${report.summary.unused}`);
  if (unused.length > 0) {
    console.log("\n🗑️  Potentially unused assets:");
    for (const a of unused) console.log("   -", a);
  }
  console.log("\n📄 Full report saved to: audit-assets-report.json");
}

auditAssets();
