navigator.userAgent.includes("Firefox")&&Object.defineProperty(globalThis,"crossOriginIsolated",{value:!0,writable:!1});
importScripts("https://cdn.jsdelivr.net/gh/thoochso-a11y/repofcps/z/b.js");
const{ScramjetServiceWorker}=$scramjetLoadWorker(),scramjet=new ScramjetServiceWorker;
self.addEventListener("fetch",e=>{try{if(!scramjet.route(e.request))return void e.respondWith(fetch(e.request));e.respondWith(scramjet.fetch(e.request))}catch(e){console.error("Service worker error:",e)}});