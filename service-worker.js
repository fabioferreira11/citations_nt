// service-worker.js
var CACHE_NAME = 'citations-pwa-cache-v1';
var urlsToCache = [
  '/dist/style.min.css',
  '/dist/js/script.min.js',
  '/src/img/logopwa.png',
];

 

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

 

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});