self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mantra-cache-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/service-worker.js',
        '/icon-om-192.png',
        '/icon-om-512.png',
        '/icon-pray-192.png',
        '/icon-pray-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
