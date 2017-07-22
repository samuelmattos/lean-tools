"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["https://matheus-lean.herokuapp.com/app.79a6e3f9634b904f75c747b56554c4ea.css","439abe43b266639c48a2da94c4e48533"],["https://matheus-lean.herokuapp.com/app.79a6e3f9634b904f75c747b56554c4ea.css.gz","26cba11d76434c2e7bc80387701e97be"],["https://matheus-lean.herokuapp.com/assets/icons/icon_512x512.a6f20e07fb857a26e2a822ec92964943.png","a6f20e07fb857a26e2a822ec92964943"],["https://matheus-lean.herokuapp.com/fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["https://matheus-lean.herokuapp.com/fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["https://matheus-lean.herokuapp.com/fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["https://matheus-lean.herokuapp.com/fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["https://matheus-lean.herokuapp.com/fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["https://matheus-lean.herokuapp.com/fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["https://matheus-lean.herokuapp.com/img/main-logo.18795d1.png","18795d1094941e7812e11ea93bb60cd7"],["https://matheus-lean.herokuapp.com/index.html","82de0b1a0894d8295bf3bdc1f38755e5"],["https://matheus-lean.herokuapp.com/js/app.js","407df9d8367cc3e8d599866c1dd56928"],["https://matheus-lean.herokuapp.com/js/app.js.gz","e7f7f1f5de3571ff41788ca398ab1e34"],["https://matheus-lean.herokuapp.com/js/manifest.js","bf473ad057d1d97e7abfb9c02494f9f5"],["https://matheus-lean.herokuapp.com/js/vendor.js","c17c5d2767bc89d5adf1789345bd5213"],["https://matheus-lean.herokuapp.com/js/vendor.js.gz","32b9b4f800eeda958bef45c9dcece90a"],["https://matheus-lean.herokuapp.com/manifest.253ff8ea9d5ef8792e0ca2130b2449d1.json","253ff8ea9d5ef8792e0ca2130b2449d1"]],cacheName="sw-precache-v3-my-domain-cache-id-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("https://matheus-lean.herokuapp.com/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});