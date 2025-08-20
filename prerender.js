
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');

// Routes to pre-render (matching existing pages)
const routes = [
  '/',
  '/qui-je-suis',
  '/offres-de-formation',
  '/temoignages',
  '/contact',
  '/blog',
  '/anglaisadistance',
  '/mentions-legales',
  '/politique-confidentialite'
];

// Simple pre-render setup - actual implementation would require build setup
console.log('Pre-rendering routes configuration:');
routes.forEach(route => {
  console.log(`✅ Route configured for pre-rendering: ${route}`);
});

// Check if build directory exists
if (fs.existsSync(distDir)) {
  console.log(`✅ Build directory found: ${distDir}`);
} else {
  console.log(`⚠️  Build directory not found: ${distDir}`);
  console.log('Run "npm run build" first to generate static files.');
}

export { routes };
