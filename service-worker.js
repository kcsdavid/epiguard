self.addEventListener('install', (e) => { console.log('SW instalat'); });
self.addEventListener('fetch', (e) => { e.respondWith(fetch(e.request)); });
