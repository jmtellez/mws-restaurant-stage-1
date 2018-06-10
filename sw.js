const staticCacheName = 'mws-rs-v3'

self.addEventListener('install', event => {
  console.log('V1 installing…');
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => (
        cache.addAll([
          '/',
          'css/styles.css',
          'js/dbhelper.js',
          'js/main.js',
          'js/restaurant_info.js',
          'img/1.jpg',
          'img/2.jpg',
          'img/3.jpg',
          'img/4.jpg',
          'img/5.jpg',
          'img/6.jpg',
          'img/7.jpg',
          'img/8.jpg',
          'img/9.jpg',
          'img/10.jpg',
        ])
      ))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => (
      Promise.all(
        cacheNames.filter((cacheName) => (
          cacheName !== staticCacheName
        )).map((cacheName) => (
          caches.delete(cacheName)
        ))
      )
    ))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(res => (
        res ? (res) : (fetch(event.request))
      ))
  );
});