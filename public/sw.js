const VERSION = 'v2.1.1';
const CACHE_NAME = `antonyaddy-${VERSION}`;
const STATIC_CACHE = `${CACHE_NAME}-static`;
const DYNAMIC_CACHE = `${CACHE_NAME}-dynamic`;
const OFFLINE_CACHE = `${CACHE_NAME}-offline`;
const MAX_CACHE_SIZE = 100; // Maximum items in dynamic cache

// Allow the app to trigger immediate activation of a newly installed SW.
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING' || event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Critical app shell files
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/manifest.json',
  '/robots.txt',
  '/health.html',
  '/status.html',
  '/apple-touch-icon.png',
  '/assets/logo.svg',
  '/assets/logo-512.png',
  '/lovable-uploads/2fd5760c-9208-4295-a1b5-87b41963111b.png',
  '/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png',
];

// Routes to cache for offline access
const OFFLINE_ROUTES = [
  '/',
  '/exercices-anglais',
  '/blog',
  '/contact',
  '/qui-je-suis',
  '/offres-de-formation',
];

// Limit cache size
const limitCacheSize = (cacheName, maxSize) => {
  caches.open(cacheName).then(cache => {
    cache.keys().then(keys => {
      if (keys.length > maxSize) {
        cache.delete(keys[0]).then(() => limitCacheSize(cacheName, maxSize));
      }
    });
  });
};

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

  // Network-first strategy for navigation requests (HTML) to prevent stale content
  if (event.request.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('.html')) {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          // Cache the fresh response for offline use
          caches.open(STATIC_CACHE).then(cache => {
            cache.put(event.request, networkResponse.clone());
          });
          return networkResponse;
        })
        .catch(() => {
          // Only use cache as fallback when offline
          return caches.match(event.request) || caches.match('/index.html');
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
          // Only cache successful responses
          if (networkResponse.status === 200) {
            caches.open(DYNAMIC_CACHE).then(cache => {
              cache.put(event.request, networkResponse.clone());
              limitCacheSize(DYNAMIC_CACHE, MAX_CACHE_SIZE);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Return offline fallback for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      })
  );
});

// Background sync for failed requests
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  // Placeholder for background sync logic
  console.log('Background sync triggered');
}
