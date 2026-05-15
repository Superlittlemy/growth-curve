const CACHE_NAME = 'growth-curve-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/data/who-standards.js',
  '/data/china-standards.js'
];

self.addEventListener('install', event => {
  console.log('SW installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching files...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('SW installed, skipping waiting');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('SW install failed:', err);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('SW activating...');
  event.waitUntil(
    caches.keys().then(names => {
      return Promise.all(
        names.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => {
      console.log('SW activated');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  try {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) return response;
          return fetch(event.request).then(res => {
            if (!res || res.status !== 200) return res;
            if (res.type === 'opaque') {
              const clone = res.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            }
            return res;
          }).catch(() => caches.match(event.request))
        })
    );
  } catch (err) {
    console.error('Fetch error:', err);
    event.respondWith(fetch(event.request));
  }
});

self.addEventListener('error', event => {
  console.error('SW error:', event.message);
});