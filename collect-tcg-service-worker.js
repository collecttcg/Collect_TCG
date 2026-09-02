const CACHE_NAME="collect-tcg-static-v3";

const STATIC_ASSETS=[
  "./collect-tcg-manifest-v3.webmanifest",
  "./collect-tcg-icon-v3-192.png",
  "./collect-tcg-icon-v3-512.png"
];

self.addEventListener("install",event=>{
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache=>cache.addAll(STATIC_ASSETS))
      .catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys
        .filter(key=>key!==CACHE_NAME)
        .map(key=>caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch",event=>{
  const request=event.request;

  if(request.method!=="GET") return;

  const url=new URL(request.url);

  // SECURITY: never cache Supabase/API/auth or any third-party request.
  if(url.origin!==self.location.origin) return;

  // NAVIGATION / INDEX.HTML:
  // Always go to the network first so installed iPhone PWAs see new HTML
  // after a GitHub Pages deploy. Only use a prior page as an emergency
  // offline fallback.
  if(request.mode==="navigate" || /\/index\.html$/i.test(url.pathname)){
    event.respondWith(
      fetch(request,{cache:"no-store"})
        .then(response=>{
          if(response && response.ok){
            const copy=response.clone();
            caches.open(CACHE_NAME)
              .then(cache=>cache.put("./index.html",copy))
              .catch(()=>{});
          }
          return response;
        })
        .catch(()=>caches.match("./index.html"))
    );
    return;
  }

  // Manifest/icons can be cached because their filenames are versioned.
  const isVersionedStatic =
    /collect-tcg-(?:manifest-v3\.webmanifest|icon-v3-(?:192|512)\.png)$/i.test(url.pathname);

  if(isVersionedStatic){
    event.respondWith(
      caches.match(request).then(cached=>{
        if(cached) return cached;
        return fetch(request).then(response=>{
          if(response && response.ok){
            const copy=response.clone();
            caches.open(CACHE_NAME)
              .then(cache=>cache.put(request,copy))
              .catch(()=>{});
          }
          return response;
        });
      })
    );
  }
});
