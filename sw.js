/*
  Player Notes service worker — makes the app open offline.
  VERSION HISTORY (newest first)
  v1.0.0  2026-10-23  First build: app shell, logos and icons cached on
                      install; fonts cached the first time they're used.
                      Player stats are saved by the app itself (IndexedDB),
                      not here, so they survive cache bumps.
  Bump CACHE when shipping a new version so phones pick up the update.
*/
const CACHE = "playernotes-v1.0.0";
const SHELL = ["./", "index.html", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "icons/favicon-32.png",
  "brand/logo-horizontal.svg", "brand/logo-horizontal-white.svg", "brand/symbol.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith("playernotes-") && k !== CACHE).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // app files: network first so updates arrive, cache when offline
    e.respondWith(fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("index.html"))));
  } else if (/fonts\.(googleapis|gstatic)\.com/.test(url.host + url.pathname)) {
    // fonts: cache first (they never change at a pinned version)
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
  }
  // Sleeper API calls go straight to the network; the app keeps its own saved copy.
});
