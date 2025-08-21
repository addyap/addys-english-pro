const VERSION = 'v1.1.0';
const CACHE_NAME = `antonyaddy-${VERSION}`;
const STATIC_CACHE = `${CACHE_NAME}-static`;
const DYNAMIC_CACHE = `${CACHE_NAME}-dynamic`;

const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/robots.txt',
  '/health.html',
  '/status.html',
  '/apple-touch-icon.png',
  '/favicon.ico',
  '/src/main.tsx',
  '/assets/logo.svg',
  '/assets/logo-512.png',
  '/assets/hero-poster.jpg',
  '/lovable-uploads/2fd5760c-9208-4295-a1b5-87b41963111b.png',
  '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Precaching app shell');
        return cache.addAll(STATIC_FILES);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Activating new service worker...');
  const cacheWhitelist = [STATIC_CACHE, DYNAMIC_CACHE];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Static cache strategy for SPA routing (HTML)
  if (event.request.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('.html')) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request).then(networkResponse => {
            caches.open(STATIC_CACHE).then(cache => {
              cache.put(event.request, networkResponse.clone());
            });
            return networkResponse;
          });
        })
    );
    return;
  }

  // Stale-while-revalidate for static assets
  if (STATIC_FILES.some(file => url.pathname.endsWith(file.substring(1)))) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          const fetchedResponsePromise = fetch(event.request).then(networkResponse => {
            caches.open(STATIC_CACHE).then(cache => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
            return networkResponse;
          });
          return cachedResponse || fetchedResponsePromise;
        })
    );
    return;
  }

  // Network-first for API requests, falling back to cache
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // Dynamic caching for other assets
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request).then(networkResponse => {
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(event.request, networkResponse.clone());
          });
          return networkResponse;
        });
      })
  );
});
