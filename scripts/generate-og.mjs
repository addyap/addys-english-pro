
// Generate simple OG images from routes.json using node-canvas
import fs from "fs"; import path from "path";
import { createCanvas, loadImage } from "canvas";

const cfg = JSON.parse(fs.readFileSync("scripts/routes.json","utf8"));
const W=1200,H=630; const outDir = path.join("public","og");
fs.mkdirSync(outDir, { recursive: true });

const bgPath = "public/og/og-template.png"; // provide a template image
const hasBg = fs.existsSync(bgPath);
const bg = hasBg ? await loadImage(bgPath) : null;

const font = "bold 64px Arial";
const color = "#0b245b";
const pad = 60;

for (const r of cfg.routes) {
  const filename = (r.path === "/" ? "home" : r.path.replace(/\//g,"-").replace(/^-/, "")) + ".png";
  const canvas = createCanvas(W,H); const ctx = canvas.getContext("2d");
  if (bg) ctx.drawImage(bg,0,0,W,H); else { ctx.fillStyle="#fff"; ctx.fillRect(0,0,W,H); }
  ctx.fillStyle=color; ctx.font = font; ctx.textAlign="left"; ctx.textBaseline="top";
  const text = (r.title || "Antony Addy");
  // wrap
  const maxWidth = W - pad*2; const lines=[]; let line="";
  for (const word of text.split(" ")) {
    const test=line?line+" "+word:word;
    if (ctx.measureText(test).width>maxWidth){ lines.push(line); line=word; } else line=test;
  }
  if (line) lines.push(line);
  lines.forEach((ln,i)=> ctx.fillText(ln, pad, pad + i*72));
  const buf = canvas.toBuffer("image/png");
  fs.writeFileSync(path.join(outDir, filename), buf);
  console.log("OG generated:", filename);
}
console.log("OG images saved to /public/og/");
