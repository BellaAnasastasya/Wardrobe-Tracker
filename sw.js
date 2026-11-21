const CACHE='lemari-v1.0.12';
const FILES=['./','./index.html','./style.css','./app.js','./manifest.webmanifest','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('lemari-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith((async()=>{try{const res=await fetch(new Request(e.request,{cache:'no-cache'}));if(res.ok){const cache=await caches.open(CACHE);await cache.put(e.request,res.clone())}return res}catch(err){const cached=await caches.match(e.request);if(cached)return cached;throw err}})())})
