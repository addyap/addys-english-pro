const VERSION = 'v2.2.6';
const CACHE_NAME = `antonyaddy-${VERSION}`;
const STATIC_CACHE = `${CACHE_NAME}-static`;
const PAGES_CACHE = `${CACHE_NAME}-pages`;
const DYNAMIC_CACHE = `${CACHE_NAME}-dynamic`;
const MAX_CACHE_SIZE = 60; // Maximum items in each runtime cache

// Allow the app to trigger immediate activation of a newly installed SW.
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING' || event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// App shell precache. Only URLs that answer 200 directly: with cleanUrls on
// Vercel, `/index.html` or `/health.html` 308-redirect, and a redirected
// response can't be used to answer a navigation.
const STATIC_FILES = [
  '/',
  '/manifest.webmanifest',
  '/apple-touch-icon.png',
  '/favicon.ico',
  '/favicon-32x32.png',
  '/icon-512.png',
];

const limitCacheSize = async (cacheName, maxSize) => {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - maxSize; i++) await cache.delete(keys[i]);
};

const putInCache = async (cacheName, request, response) => {
  if (!response || response.status !== 200 || response.type !== 'basic' || response.redirected) return;
  const cache = await caches.open(cacheName);
  await cache.put(request, response);
  await limitCacheSize(cacheName, MAX_CACHE_SIZE);
};

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  const keep = [STATIC_CACHE, PAGES_CACHE, DYNAMIC_CACHE];
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((n) => !keep.includes(n)).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only same-origin GETs. POSTs (contact form), third-party requests (fonts,
  // analytics) and the edge functions go straight to the network untouched.
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) return;
  // Let the browser stream and seek audio directly, without caching large files
  // or answering a byte-range request with a cached full response.
  if (url.pathname.startsWith('/audio/') || request.headers.has('range')) return;
  // The WhatsApp hand-off checks the browser's own click signal
  // (Sec-Fetch-User), which a fetch() from here would drop: let it through.
  if (url.pathname === '/whatsapp') return;
  // These are separate apps that www forwards to; they do their own caching.
  if (/^\/(sites-web|books|toeic|grammatica|listening|ia)(\/|$)/.test(url.pathname)) return;

  // Pages: network-first so content is never stale; cache only as an
  // offline fallback, then the cached home page as a last resort.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          event.waitUntil(putInCache(PAGES_CACHE, request, response.clone()));
          return response;
        })
        .catch(async () => (await caches.match(request)) || (await caches.match('/')) || Response.error())
    );
    return;
  }

  // Hashed build assets never change: cache-first.
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((response) => {
        event.waitUntil(putInCache(DYNAMIC_CACHE, request, response.clone()));
        return response;
      }))
    );
    return;
  }

  // Everything else same-origin (images, icons, manifest): stale-while-revalidate.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request).then((response) => {
        event.waitUntil(putInCache(DYNAMIC_CACHE, request, response.clone()));
        return response;
      });
      if (cached) {
        network.catch(() => undefined);
        return cached;
      }
      return network;
    })
  );
});
