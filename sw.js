var cacheID = "mws-001";
var cachedItems = [
     "/",
      "/css/styles.css",
      "/img",
      "/js",
      "/js/main.js",
      "/js/dbhelper.js",
      "/js/restaurant_info.js"];

self.addEventListener("install", event=>{
  event.waitUntil(caches.open(cacheID).then(cache => {
    return cache.addAll(cachedItems)
  }));
});

self.addEventListener('fetch', event => {
      event.respondWith(
        caches.match(event.request).then(response => {
          if (response !== undefined)
            return response;
          return fetch(event.request).then(response => {
              var responseCache = response.clone();
              caches.open(cacheID).then(cache => {
                cache.put(event.request,responseCache);
              });
              return response;
            });
        })
    )
});
