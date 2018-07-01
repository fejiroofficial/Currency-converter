var staticCacheName = 'curr-static-v1';

self.addEventListener('install', function(e) {
    console.log ("[ServiceWorker] Installed")
    e.waitUntil(
        caches.open(staticCacheName).then(function(cache){
            return cache.addAll([
                'index.html',
                'index.js',
                'css/main.css',
                'https://cdn-images-1.medium.com/max/2000/1*kuyLm10Ry7fi-KlBB9MU3w.jpeg'
            ])
        })
    )
 })

 //updating static cache
//  self.addEventListener ('activate', function (event){
//      event.waitUntil(
//          caches.keys().then(function(cacheNames){
//              return Promise.all(
//                  cacheNames.filter(function(cacheName){
//                      return cacheName.startsWith('current-') && 
//                      cacheName != staticCacheName;
//                  }).map(function(cacheName){
//                      return cache.delete(cacheName); 
//                  })
//              );
//          })
//      )
//  })
//responding with an entry from the cache
//if i go offline the cache responds
self.addEventListener('fetch', function (event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            if(response) {
                return response;
            }
            return fetch (event.request);
        })
    )
})

