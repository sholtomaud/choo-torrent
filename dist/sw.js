!function(){var e=String(Date.now()),n=["https://cdn.polyfill.io/v2/polyfill.min.js","d7fef35c38b8b942/bundle.js","2b08f14013c6acde/bundle.css","assets/icon.png","/","/manifest.json"];self.addEventListener("fetch",function(e){var n=self.caches.match(e.request).then(function(n){return n||self.fetch(e.request)});e.respondWith(n)}),self.addEventListener("install",function(t){var s=self.caches.open(e).then(function(e){return e.addAll(n)});t.waitUntil(s)}),self.addEventListener("activate",function(n){var t=self.caches.keys().then(function(n){return Promise.all(n.map(function(t,s){if(n[s]!==e)return self.caches.delete(n[s])}))});n.waitUntil(t)})}();
//# sourceMappingURL=bankai-service-worker.js.map