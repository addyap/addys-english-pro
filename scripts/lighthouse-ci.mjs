
import { launch } from "chrome-launcher";
import lighthouse from "lighthouse";
import http from "http";

const TARGET = process.env.LH_URL || "http://localhost:4173";

const THRESHOLDS = { performance: 0.75, accessibility: 0.90, "best-practices": 0.90, seo: 0.90 };

function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http.get(url, () => resolve(true)).on("error", () => {
        if (Date.now() - start > timeoutMs) reject(new Error("Preview server not reachable"));
        else setTimeout(check, 500);
      });
    };
    check();
  });
}

(async () => {
  await waitForServer(TARGET);
  const chrome = await launch({ chromeFlags: ["--headless=new", "--no-sandbox"] });
  const opts = { logLevel: "error", output: "json",
    onlyCategories: ["performance","accessibility","best-practices","seo"],
    port: chrome.port };
  const { lhr } = await lighthouse(TARGET, opts);
  await chrome.kill();

  const scores = {
    performance: lhr.categories.performance.score,
    accessibility: lhr.categories.accessibility.score,
    "best-practices": lhr.categories["best-practices"].score,
    seo: lhr.categories.seo.score,
  };

  const fails = Object.entries(THRESHOLDS).filter(([k, min]) => (scores[k] ?? 0) < min);
  console.log("\nLighthouse scores:");
  Object.entries(scores).forEach(([k, v]) => console.log(`  ${k.padEnd(15)} ${Math.round((v ?? 0) * 100)}`));

  if (fails.length) {
    console.error("\nThresholds not met:");
    fails.forEach(([k, min]) =>
      console.error(`  ${k}: ${Math.round((scores[k] ?? 0) * 100)} < ${Math.round(min * 100)}`)
    );
    process.exit(1);
  } else {
    console.log("\nAll thresholds met ✅");
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
