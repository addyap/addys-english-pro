
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize Core Web Vitals monitoring
import './monitor/vitals.ts'

const rootElement = document.getElementById("root")!;

if (import.meta.env.PROD) {
  hydrateRoot(rootElement, <App />);

  // Ensure users don't stay stuck on an old cached build (common on custom/live domains with a SW).
  if ('serviceWorker' in navigator) {
    let refreshed = false;

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshed) return;
      refreshed = true;
      window.location.reload();
    });

    window.addEventListener('load', () => {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (!reg) return;

        // Force an update check every load
        reg.update().catch(() => undefined);

        const requestSkipWaiting = (worker?: ServiceWorker | null) => {
          if (!worker) return;
          worker.postMessage('SKIP_WAITING');
        };

        // If an update is already waiting, activate it immediately
        requestSkipWaiting(reg.waiting);

        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (!newWorker) return;

          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              requestSkipWaiting(newWorker);
            }
          });
        });
      });
    });
  }
} else {
  createRoot(rootElement).render(<App />);
}

// Console diagnostics on start
setTimeout(() => {
  console.log(`
SEOHead wired: ${document.querySelectorAll('[data-react-helmet]').length}
robots/sitemap present: ${fetch('/robots.txt').then(() => 'true').catch(() => 'false')}/${fetch('/sitemap.xml').then(() => 'true').catch(() => 'false')}
PWA registered: ${'serviceWorker' in navigator ? 'true' : 'false'}
Core Web Vitals reporting: enabled
`);
}, 1000);
