/* Service worker de Harnais.
   - Page et icônes : réseau d'abord (les mises à jour arrivent tout de suite), cache en secours hors ligne.
   - Polices Google : cache d'abord.
   - Tout le reste (Gemini, ntfy.sh, reconnaissance vocale) n'est jamais intercepté. */
const CACHE = "harnais-v8";
const COQUILLE = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(COQUILLE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req).then(res => {
        if (res && res.ok) { const copie = res.clone(); caches.open(CACHE).then(c => c.put(req, copie)); }
        return res;
      }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || (req.mode === "navigate" ? caches.match("./index.html") : Response.error())))
    );
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const copie = res.clone(); caches.open(CACHE).then(c => c.put(req, copie)); return res; })));
  }
});
