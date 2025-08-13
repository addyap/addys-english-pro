
// Basic offline cache for app shell + health/status
const CACHE = "aa-cache-v1";
const ASSETS = ["/", "/index.html", "/health.html", "/status.html", "/manifest.webmanifest"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});
self.addEventListener("activate", (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", (e) => {
  const { request } = e;
  if (request.method !== "GET") return;
  e.respondWith(
    caches.match(request).then((res) =>
      res ||
      fetch(request).then((r) => {
        const copy = r.clone();
        caches.open(CACHE).then((c) => c.put(request, copy));
        return r;
      }).catch(() => caches.match("/status.html"))
    )
  );
});
