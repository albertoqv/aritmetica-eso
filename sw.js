const CACHE_NAME = 'aritmetica-v3'; 
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './portada_enlace.png'
];

// Instalación: Guardamos los archivos y FORZAMOS la espera
self.addEventListener('install', event => {
  // Esta línea obliga al SW a activarse en cuanto se instala, sin esperar
  self.skipWaiting(); 
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación: Limpiamos cachés viejas y TOMAMOS EL CONTROL
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
  // Esta línea hace que el SW controle la página inmediatamente sin recargar
  return self.clients.claim(); 
});

// Interceptamos peticiones
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
