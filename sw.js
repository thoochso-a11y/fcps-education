importScripts("https://cdn.jsdelivr.net/gh/thoochso-a11y/repofcps/q/c.js");
importScripts("https://cdn.jsdelivr.net/gh/thoochso-a11y/repofcps/q/e.js");
importScripts("https://cdn.jsdelivr.net/gh/thoochso-a11y/repofcps/q/d.js");
const uv=new UVServiceWorker;
async function handleRequest(e){return uv.route(e)?await uv.fetch(e):await fetch(e.request)}
self.addEventListener("fetch",e=>e.respondWith(handleRequest(e)));
self.addEventListener("message",e=>{"INIT_UV"===e.data.msg&&(self.UVServiceWorker=e.data.UVServiceWorker)});