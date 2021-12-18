// Hello world
self.addEventListener('install', (event) => {
    console.log('[SW] Install New Service Worker');
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((resp) => {
            if (resp) {
                console.log('[SW] Cache hit', event.request);
            }
            return (
                resp ||
                fetch(event.request)
                    .then((response) => {
                        console.log('[SW] Cache miss (Fetch success)', event.request);
                        let responseClone = response.clone();
                        caches.open('v1').then((cache) => {
                            cache.put(event.request, responseClone);
                        });

                        return response;
                    })
                    .catch(() => {
                        console.log('[SW] Cache miss (Fetch fail)', event.request);
                    })
            );
        })
    );
});
