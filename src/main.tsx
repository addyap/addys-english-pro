
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize i18n (must run before App renders)
import './i18n'

// Initialize Core Web Vitals monitoring
import './monitor/vitals.ts'

// Install global TTS lifecycle guards (cancel speech on tab hide / page unload)
import { installTTSLifecycleGuards } from './lib/ai/ttsLifecycle'
installTTSLifecycleGuards()

const rootElement = document.getElementById("root")!;

// Only hydrate if the server actually pre-rendered content; otherwise mount fresh.
const hasSSRContent = rootElement.childNodes.length > 0;

if (import.meta.env.PROD && hasSSRContent) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}

// Service worker update logic — must run in ALL production builds
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
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

// Console diagnostics on start
setTimeout(() => {
  console.log(`
SEOHead wired: ${document.querySelectorAll('[data-react-helmet]').length}
robots/sitemap present: ${fetch('/robots.txt').then(() => 'true').catch(() => 'false')}/${fetch('/sitemap.xml').then(() => 'true').catch(() => 'false')}
PWA registered: ${'serviceWorker' in navigator ? 'true' : 'false'}
Core Web Vitals reporting: enabled
`);
}, 1000);
