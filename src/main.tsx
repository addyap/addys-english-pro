// MUST be first: shims `localStorage`/`sessionStorage` on the SSG server
// so modules (e.g. the since-deleted Supabase client) that touch them at
// module load do not crash.
import "./ssg-shims";

import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";
import "./inner-pages.css";
import "./section-visuals.css";

/**
 * vite-react-ssg entry.
 *
 * - At build time (`vite-react-ssg build`), this module is loaded
 *   on the server: each route in `routes` is rendered to a static
 *   HTML file in `dist/`.
 * - In the browser, `createRoot` mounts (or hydrates) the same tree.
 *
 * All browser-only side effects (web vitals, service worker) live
 * inside the setup callback and are guarded by `isClient`.
 */
export const createRoot = ViteReactSSG(
  { routes },
  async ({ isClient }) => {
    if (!isClient) return;

    // Web Vitals reporting (registers PerformanceObservers on import)
    await import("./monitor/vitals");

    // Service-worker update logic — production only
    if (import.meta.env.PROD && "serviceWorker" in navigator) {
      let refreshed = false;
      // controllerchange also fires on a first visit, when the new worker's
      // clients.claim() takes over an uncontrolled page. Only reload when an
      // older worker is being replaced — otherwise every first-time visitor
      // got a forced reload ~1 s after landing.
      const hadController = !!navigator.serviceWorker.controller;

      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (refreshed || !hadController) return;
        refreshed = true;
        window.location.reload();
      });

      window.addEventListener("load", () => {
        navigator.serviceWorker.getRegistration().then((reg) => {
          if (!reg) return;

          // Force an update check every load
          reg.update().catch(() => undefined);

          const requestSkipWaiting = (worker?: ServiceWorker | null) => {
            if (!worker) return;
            worker.postMessage("SKIP_WAITING");
          };

          // If an update is already waiting, activate it immediately
          requestSkipWaiting(reg.waiting);

          reg.addEventListener("updatefound", () => {
            const newWorker = reg.installing;
            if (!newWorker) return;

            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                requestSkipWaiting(newWorker);
              }
            });
          });
        });
      });
    }
  },
);
