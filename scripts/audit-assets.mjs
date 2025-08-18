
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

function scanDirectory(dir, extensions = []) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...scanDirectory(fullPath, extensions));
    } else if (extensions.length === 0 || extensions.some(ext => item.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  
  return results;
}

function findAssetReferences(assetFiles, searchDirs) {
  const references = {};
  
  assetFiles.forEach(assetPath => {
    const assetName = path.basename(assetPath);
    const relativePath = path.relative(projectRoot, assetPath).replace(/\\/g, '/');
    references[relativePath] = [];
  });
  
  searchDirs.forEach(searchDir => {
    const searchFiles = scanDirectory(searchDir, ['.tsx', '.ts', '.jsx', '.js', '.html', '.css', '.md']);
    
    searchFiles.forEach(filePath => {
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        
        Object.keys(references).forEach(assetPath => {
          const assetName = path.basename(assetPath);
          const patterns = [
            assetPath,
            assetName,
            assetPath.replace('public/', '/'),
            '/' + assetPath,
          ];
          
          patterns.forEach(pattern => {
            if (content.includes(pattern)) {
              const relativeFilePath = path.relative(projectRoot, filePath).replace(/\\/g, '/');
              if (!references[assetPath].includes(relativeFilePath)) {
                references[assetPath].push(relativeFilePath);
              }
            }
          });
        });
      } catch (error) {
        console.warn(`Could not read file: ${filePath}`);
      }
    });
  });
  
  return references;
}

function auditAssets() {
  console.log('🔍 Auditing project assets...');
  
  const assetsDir = path.join(projectRoot, 'public', 'assets');
  const publicDir = path.join(projectRoot, 'public');
  const srcDir = path.join(projectRoot, 'src');
  
  if (!fs.existsSync(assetsDir)) {
    console.log('No assets directory found at public/assets');
    return;
  }
  
  // Find all asset files
  const assetExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico', '.pdf', '.mp4', '.webm'];
  const assetFiles = scanDirectory(assetsDir, assetExtensions);
  
  // Search for references in source code and public files
  const searchDirs = [srcDir, publicDir];
  const references = findAssetReferences(assetFiles, searchDirs);
  
  // Categorize assets
  const used = [];
  const unused = [];
  
  Object.entries(references).forEach(([assetPath, refs]) => {
    if (refs.length > 0) {
      used.push({ asset: assetPath, references: refs });
    } else {
      unused.push(assetPath);
    }
  });
  
  // Generate report
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
  
  // Write report to file
  const reportPath = path.join(projectRoot, 'audit-assets-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  // Log results
  console.log(`\n📊 Asset Audit Complete:`);
  console.log(`   Total assets: ${report.summary.total}`);
  console.log(`   Used assets: ${report.summary.used}`);
  console.log(`   Unused assets: ${report.summary.unused}`);
  
  if (unused.length > 0) {
    console.log(`\n🗑️  Potentially unused assets:`);
    unused.forEach(asset => console.log(`   - ${asset}`));
  }
  
  console.log(`\n📄 Full report saved to: audit-assets-report.json`);
}

auditAssets();
