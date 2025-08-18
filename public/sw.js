
const VERSION = "v1.1";
const STATIC_CACHE = `static-${VERSION}`;
const RUNTIME_CACHE = `runtime-${VERSION}`;

self.addEventListener("install", (event) => {
  // Skip waiting to activate updated SW quickly
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k.startsWith("static-") || k.startsWith("runtime-")) && k !== STATIC_CACHE && k !== RUNTIME_CACHE ? caches.delete(k) : null))
    )
  );
  self.clients.claim();
});

// Strategy:
// - HTML navigations: Network First (fresh content when online)
// - Static assets (css/js/fonts/images): Stale-While-Revalidate
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Only GET
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Navigations
  if (req.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const net = await fetch(req);
        const cache = await caches.open(RUNTIME_CACHE);
        cache.put(req, net.clone());
        return net;
      } catch {
        const cached = await caches.match(req);
        return cached || caches.match("/index.html");
      }
    })());
    return;
  }

  // Static assets heuristic
  const isAsset = /\.(?:js|css|woff2?|ttf|eot|png|jpe?g|gif|svg|webp|avif|ico|pdf|mp4|webm)$/i.test(url.pathname);
  if (isAsset) {
    event.respondWith((async () => {
      const cache = await caches.open(STATIC_CACHE);
      const cached = await cache.match(req);
      const network = fetch(req).then(resp => {
        cache.put(req, resp.clone()).catch(() => {});
        return resp;
      }).catch(() => undefined);
      return cached || network || fetch(req);
    })());
  }
});
