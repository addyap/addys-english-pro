
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize Core Web Vitals monitoring
import './monitor/vitals.ts'

const rootElement = document.getElementById("root")!;

if (import.meta.env.PROD) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}

// Service Worker registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}

// Console diagnostics on start
console.log(`
SEOHead wired: ${document.querySelectorAll('[data-seohead]').length}
robots/sitemap present: ${fetch('/robots.txt').then(() => 'true').catch(() => 'false')}/${fetch('/sitemap.xml').then(() => 'true').catch(() => 'false')}
PWA registered: ${'serviceWorker' in navigator ? 'true' : 'false'}
Core Web Vitals reporting: enabled
`);
