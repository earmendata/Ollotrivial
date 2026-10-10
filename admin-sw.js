// Service worker mínimo: no hace falta caché real, solo existir y responder
// a 'fetch' para que el navegador considere la página instalable.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {});
