const CACHE_NAME = 'aritmetica-v4'; 
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './portada_enlace.png'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Forza la instalación
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// --- ESTA ES LA PARTE QUE CAMBIA LA MAGIA ---
// Estrategia: Network First (Intentar internet, si falla, ir a caché)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // 1. Si hay internet y responde bien:
        // Hacemos una copia de la respuesta nueva en la caché para la próxima vez
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          });
        return response;
      })
      .catch(() => {
        // 2. Si NO hay internet (falla el fetch):
        // Devolvemos lo que haya en la memoria
        return caches.match(event.request);
      })
  );
});
