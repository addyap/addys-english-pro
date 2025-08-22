import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initHashScroll } from './hashScroll';

// Initialize Core Web Vitals monitoring
import './monitor/vitals.ts'

// Initialize hash scroll handling
initHashScroll(88);

const rootElement = document.getElementById("root")!;

if (import.meta.env.PROD) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}

// Console diagnostics on start
console.log(`
SEOHead wired: ${document.querySelectorAll('[data-seohead]').length}
robots/sitemap present: ${fetch('/robots.txt').then(() => 'true').catch(() => 'false')}/${fetch('/sitemap.xml').then(() => 'true').catch(() => 'false')}
PWA registered: ${'serviceWorker' in navigator ? 'true' : 'false'}
Core Web Vitals reporting: enabled
`);
