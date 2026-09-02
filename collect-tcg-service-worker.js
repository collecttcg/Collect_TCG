const CACHE_NAME="collect-tcg-static-v4";

const STATIC_ASSETS=[
  "./collect-tcg-manifest.webmanifest",
  "./collect-tcg-icon-192.png",
  "./collect-tcg-icon-512.png"
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

  // SECURITY:
  // Never cache Supabase/API/auth or any third-party request.
  if(url.origin!==self.location.origin) return;

  // NAVIGATION / INDEX.HTML:
  // Always request the newest deployed HTML first.
  // If the network is unavailable, use the last cached page.
  if(
    request.mode==="navigate" ||
    /\/index\.html$/i.test(url.pathname)
  ){
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

  // APP MANIFEST + ICONS:
  // These use permanent filenames.
  // Network-first allows updated icons/manifest to appear quickly.
  // Cached copies are used when offline.
  const isAppStatic=
    /collect-tcg-(?:manifest\.webmanifest|icon-(?:192|512)\.png)$/i
      .test(url.pathname);

  if(isAppStatic){
    event.respondWith(
      fetch(request,{cache:"no-store"})
        .then(response=>{
          if(response && response.ok){
            const copy=response.clone();

            caches.open(CACHE_NAME)
              .then(cache=>cache.put(request,copy))
              .catch(()=>{});
          }

          return response;
        })
        .catch(()=>caches.match(request))
    );
  }
});
