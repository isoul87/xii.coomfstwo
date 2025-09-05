// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open("coomfstwo-cache").then((cache) => {
//       return cache.addAll([
//         "/",              // halaman utama
//         "/index.html",    // file html
//         "/src/input.css",     // css
//         "/dist/script.js",     // js
//         "/src/img" // gambar
//       ]);
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });