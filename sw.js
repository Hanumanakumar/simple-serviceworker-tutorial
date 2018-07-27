
importScripts('serviceworker-cache-polyfill.js');

self.addEventListener('install', function(event) {
  
  event.waitUntil(
    
    caches.open('simple-sw-v1').then(function(cache) {
      
      return cache.addAll([
        './',
        'style.css',
        'logging.js'
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
