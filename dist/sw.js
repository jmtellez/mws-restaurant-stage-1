(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var cacheID = "mws-001";
var cachedItems = ["/", "/css/styles.css", "/img", "/js", "/js/main.js", "/js/dbhelper.js", "/js/restaurant_info.js"];
self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(cacheID).then(function (cache) {
    return cache.addAll(cachedItems);
  }));
});
self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    if (response !== undefined) return response;
    return fetch(event.request).then(function (response) {
      var responseCache = response.clone();
      caches.open(cacheID).then(function (cache) {
        cache.put(event.request, responseCache);
      });
      return response;
    });
  }));
});

},{}]},{},[1])

//# sourceMappingURL=sw.js.map
