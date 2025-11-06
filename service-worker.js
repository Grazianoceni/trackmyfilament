self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('filamenti-cache').then(cache => {
      return cache.addAll(['index.html', 'manifest.json', 'icon-94.png']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
