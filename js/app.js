//registering a service worker 
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/js/service-worker.js')
    .then(function() {
        console.log ("Service Worker is registered")
    })
    .catch(function() {
        console.log ("Service Worker Failed to Register");
    })
}

