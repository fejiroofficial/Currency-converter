self.addEventListener('install', function(e) {
    console.log ("[ServiceWorker] Installed")
    e.waitUntil(
        caches.open('curr-static-v1').then(function(cache){
            return cache.addAll([
                './',
                '/index.html',
                'app.js',
                'index.js',
                '/css/main.css',
                'https://cdn-images-1.medium.com/max/2000/1*kuyLm10Ry7fi-KlBB9MU3w.jpeg',
                'https://free.currencyconverterapi.com/api/v5/convert?q=USD_NGN&compact=ultra'

            ])
        })
    )
 })

self.addEventListener('fetch', function (event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            if(response) return response;
            return fetch (event.request);
        })
    )
})