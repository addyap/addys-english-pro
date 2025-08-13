const fs = require("fs");
const path = require("path");

const SITE = "https://antonyaddy.com";
const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, "routes.json"), "utf8"));

const BUILD_DIRS = ["out", "dist", "build"];
const buildRoot = BUILD_DIRS.map(d => path.join(process.cwd(), d)).find(p => fs.existsSync(p) && fs.statSync(p).isDirectory());
if (!buildRoot) {
  console.warn("⚠️ No build directory found (looked for out/, dist/, build/). Skipping OG meta injection.");
  process.exit(0);
}

function slugFrom(p) { return !p || p === "/" ? "home" : p.replace(/\//g,"-").replace(/^-+/,"").toLowerCase(); }
function htmlPathFor(route) {
  if (route === "/") {
    // common export patterns
    const candidates = [
      path.join(buildRoot, "index.html"),
      path.join(buildRoot, "home", "index.html")
    ];
    return candidates.find(fs.existsSync);
  }
  // Try folder/index.html
  const folder = route.replace(/^\//, "");
  const a = path.join(buildRoot, folder, "index.html");
  if (fs.existsSync(a)) return a;
  // Try single-file html (rare)
  const b = path.join(buildRoot, folder + ".html");
  if (fs.existsSync(b)) return b;
  return null;
}

function injectMeta(file, tags) {
  let html = fs.readFileSync(file, "utf8");
  const closeHead = /<\/head>/i;
  if (!closeHead.test(html)) {
    console.warn("No </head> in", file);
    return;
  }
  const block = "\n  " + tags.join("\n  ") + "\n";
  html = html.replace(closeHead, block + "</head>");
  fs.writeFileSync(file, html);
  console.log("Injected OG meta:", path.relative(buildRoot, file));
}

let injected = 0;
for (const r of cfg.routes) {
  const file = htmlPathFor(r.path);
  const slug = slugFrom(r.path);
  const og = `${SITE}/og/${slug}-1200x630.png`;

  const tags = [
    `<meta property="og:title" content="${(r.title || "Antony Addy").replace(/"/g,"&quot;")}" />`,
    `<meta property="og:description" content="Professional English training & coaching." />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${SITE}${r.path}" />`,
    `<meta property="og:image" content="${og}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${(r.title || "Antony Addy").replace(/"/g,"&quot;")}" />`,
    `<meta name="twitter:description" content="Professional English training & coaching." />`,
    `<meta name="twitter:image" content="${og}" />`
  ];

  if (file) {
    injectMeta(file, tags);
    injected++;
  }
}

if (!injected) {
  // SPA fallback: inject into single index.html at root if present
  const rootIndex = ["index.html"].map(f => path.join(buildRoot, f)).find(fs.existsSync);
  if (rootIndex) {
    const slug = "home";
    const og = `${SITE}/og/${slug}-1200x630.png`;
    injectMeta(rootIndex, [
      `<meta property="og:title" content="Antony Addy" />`,
      `<meta property="og:description" content="Professional English training & coaching." />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:url" content="${SITE}/" />`,
      `<meta property="og:image" content="${og}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="Antony Addy" />`,
      `<meta name="twitter:description" content="Professional English training & coaching." />`,
      `<meta name="twitter:image" content="${og}" />`
    ]);
    console.log("SPA fallback: injected default OG meta into root index.html");
  } else {
    console.warn("⚠️ No HTML files found to inject. If you're SSR-only, add tags in server templates.");
  }
}