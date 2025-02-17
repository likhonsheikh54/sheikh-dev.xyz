const CACHE_NAME = 'sheikh-portfolio-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/projects.html',
  '/skills.html',
  '/experience.html',
  '/blog.html',
  '/contact.html',
  '/css/style.css',
  '/css/animations.css',
  '/js/main.js',
  '/js/theme.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
