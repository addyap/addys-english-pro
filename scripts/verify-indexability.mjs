#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const CANONICAL_DOMAIN = "https://www.antonyaddy.com";
const BUILD_DIRS = ["out", "dist", "build"];

// Key routes to check (removed /mentions-legales as it should not be indexed)
const ROUTES_TO_CHECK = [
  "/",
  "/blog",
  "/temoignages"
];

function findBuildDir() {
  return BUILD_DIRS
    .map(d => path.join(process.cwd(), d))
    .find(p => fs.existsSync(p) && fs.statSync(p).isDirectory());
}

function checkFile(filePath, route) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ ${route}: File not found at ${filePath}`);
    return false;
  }

  const html = fs.readFileSync(filePath, 'utf8');
  let errors = [];

  // Check title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (!titleMatch) {
    errors.push("Missing <title> tag");
  } else {
    const title = titleMatch[1].trim();
    if (title.length > 70) {
      errors.push(`Title too long: ${title.length} chars (max 70)`);
    }
  }

  // Check meta description
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
  if (!descMatch) {
    errors.push("Missing meta description");
  } else {
    const desc = descMatch[1].trim();
    if (desc.length < 50 || desc.length > 200) {
      errors.push(`Description length ${desc.length} chars (50-200 recommended)`);
    }
  }

  // Check robots tag
  const robotsMatch = html.match(/<meta\s+name="robots"\s+content="([^"]+)"/i);
  if (robotsMatch && robotsMatch[1].includes('noindex')) {
    errors.push("Contains noindex directive");
  }

  // Check canonical
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (!canonicalMatch) {
    errors.push("Missing canonical tag");
  } else {
    const canonical = canonicalMatch[1];
    if (!canonical.startsWith(CANONICAL_DOMAIN)) {
      errors.push(`Canonical doesn't start with ${CANONICAL_DOMAIN}: ${canonical}`);
    }
  }

  // Check H1
  const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (!h1Match) {
    errors.push("Missing H1 tag");
  }

  if (errors.length > 0) {
    console.error(`❌ ${route}:`);
    errors.forEach(err => console.error(`   - ${err}`));
    return false;
  } else {
    console.log(`✅ ${route}: All checks passed`);
    return true;
  }
}

function checkRobotsTxt() {
  const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
  if (!fs.existsSync(robotsPath)) {
    console.error('❌ robots.txt: File not found');
    return false;
  }

  const robots = fs.readFileSync(robotsPath, 'utf8');
  if (!robots.includes('Allow: /')) {
    console.error('❌ robots.txt: Missing "Allow: /"');
    return false;
  }
  if (!robots.includes(`Sitemap: ${CANONICAL_DOMAIN}/sitemap.xml`)) {
    console.error(`❌ robots.txt: Missing correct sitemap URL`);
    return false;
  }

  console.log('✅ robots.txt: OK');
  return true;
}

function checkSitemapXml() {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ sitemap.xml: File not found');
    return false;
  }

  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const requiredUrls = ROUTES_TO_CHECK.map(route => `${CANONICAL_DOMAIN}${route === '/' ? '/' : route}`);
  
  let missing = [];
  for (const url of requiredUrls) {
    if (!sitemap.includes(`<loc>${url}</loc>`)) {
      missing.push(url);
    }
  }

  if (missing.length > 0) {
    console.error('❌ sitemap.xml: Missing URLs:');
    missing.forEach(url => console.error(`   - ${url}`));
    return false;
  }

  console.log('✅ sitemap.xml: All required URLs present');
  return true;
}

function main() {
  console.log('🔍 Verifying indexability...\n');

  const buildDir = findBuildDir();
  if (!buildDir) {
    console.error('❌ No build directory found. Run build first.');
    process.exit(1);
  }

  console.log(`📁 Using build directory: ${buildDir}\n`);

  let allPassed = true;

  // Check robots.txt and sitemap.xml
  allPassed = checkRobotsTxt() && allPassed;
  allPassed = checkSitemapXml() && allPassed;

  console.log('\n📄 Checking HTML files...');

  // Check each route
  for (const route of ROUTES_TO_CHECK) {
    let htmlPath;
    
    if (route === '/') {
      htmlPath = path.join(buildDir, 'index.html');
    } else {
      // Try folder/index.html pattern
      const folder = route.replace(/^\//, '');
      htmlPath = path.join(buildDir, folder, 'index.html');
      
      // Fallback to flat file
      if (!fs.existsSync(htmlPath)) {
        htmlPath = path.join(buildDir, folder + '.html');
      }
    }

    const passed = checkFile(htmlPath, route);
    allPassed = allPassed && passed;
  }

  console.log('\n' + '='.repeat(50));
  if (allPassed) {
    console.log('🎉 INDEXABILITY CHECK: PASSED');
    console.log('All routes are properly configured for search engines.');
  } else {
    console.log('❌ INDEXABILITY CHECK: FAILED');
    console.log('Fix the issues above before deploying.');
    process.exit(1);
  }
}

main();