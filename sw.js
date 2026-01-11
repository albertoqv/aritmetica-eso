const CACHE_NAME = 'aritmetica-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './portada_enlace.png'
];

// Instalación: Guardamos los archivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación: Limpiamos cachés viejas si actualizas la app
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
});

// Interceptamos peticiones: Si no hay internet, usa lo guardado
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si está en caché, lo devuelve. Si no, lo pide a internet.
        return response || fetch(event.request);
      })
  );
});
