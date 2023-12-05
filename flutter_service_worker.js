'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c25764af0b2bd2fe13346bd314417070",
"assets/AssetManifest.bin.json": "0dd5ced9b24d76762b71ea4a62acfc3e",
"assets/AssetManifest.json": "f8a241c82b2cc221175b1204b5def568",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/SFPRODISPLAYMEDIUM.OTF": "51fd7406327f2b1dbc8e708e6a9da9a5",
"assets/assets/fonts/SourceSansPro-Black.ttf": "2352d9a308e72b78f40c95f9bd893af7",
"assets/assets/images/circute2.png": "b2049d7b86fad98ca51e48824893dff6",
"assets/assets/images/circuteboard.png": "6a124c02eec1e3054d9281ea8058711d",
"assets/assets/images/circuteboardright.png": "36d126def11f2bf008291d8efa1573e1",
"assets/assets/images/download.jpeg": "b540ac9c54782148a45fb4b6a9fbf973",
"assets/assets/images/employe-clik.png": "e7b5efa0986b9a362bed483ded7f580a",
"assets/assets/images/employee.png": "b2207a522cf98f7dde6cf4b5580ac5bd",
"assets/assets/images/fb.jpeg": "b5aaeed93133f16188838c05a81f52c4",
"assets/assets/images/git.png": "17df018fb931be8f3511ef3f1d12f1dd",
"assets/assets/images/hobbies.jpeg": "86dc159c80c13292c722285466308981",
"assets/assets/images/home-click.jpeg": "915b9df38652f426429b51acb441c155",
"assets/assets/images/home.jpeg": "915b9df38652f426429b51acb441c155",
"assets/assets/images/insta.png": "2eb898b51c24c613b516d76f77254bec",
"assets/assets/images/leaf-left.png": "bf15e6822d8a4d0e9788b41a3828a93a",
"assets/assets/images/leaf-right.png": "32985dab180615c1db878349a66944c2",
"assets/assets/images/linked.png": "4de5c6e439aa02eae9dd152a67313bcf",
"assets/assets/images/logistic-click.png": "5668329d6a6bc2f43b031d20a046ab76",
"assets/assets/images/logistics.png": "622d68682eec3ffcc2fc69101030a5da",
"assets/assets/images/logo.png": "341a516071c1b3e2762e7b690e16b921",
"assets/assets/images/mail.png": "0ac550b77110f375ba654e6c34b25a43",
"assets/assets/images/netflix.jpeg": "b762fd79ba37cec6e4d49beaf43571a6",
"assets/assets/images/phone.png": "8fbe29056128240428013b8ead2e3843",
"assets/assets/images/whatsapp.png": "f4d51ccca2d6ca24b8b85e4ddc615ae9",
"assets/assets/lottie/about-me.json": "055728a89de31ed60dce4948c994c2f2",
"assets/assets/lottie/arrow.json": "e42cc1c0a3ef2efdc827c32feed09e3c",
"assets/assets/lottie/languages.json": "35d2cf301e2795f52b35416f8d556983",
"assets/assets/lottie/loading.json": "63c04edb5b615cb4dca71a04e4da26a0",
"assets/FontManifest.json": "6a4b1357e81e4f3d523bc39dfdde1dc2",
"assets/fonts/MaterialIcons-Regular.otf": "f75e6ddfb3ff5db87ed41f1ab7d27191",
"assets/NOTICES": "4fdd4bf21d066d5bd7c5ac0f27dcc904",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "f64bdb5d938914b4fac144c2c3aa1c94",
"canvaskit/canvaskit.wasm": "fcab7f9681c8a50daadbc3c242319078",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "907d264290252a44de8422c5898c4158",
"canvaskit/chromium/canvaskit.wasm": "f6d2a460565f3f70c54aa207ce502b69",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "01a3e940f2ae353a6097a61be6efc01f",
"canvaskit/skwasm.wasm": "2eba7de284f5b90a5710d2fc922efedd",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "bda5a23063b076ab2528635a02bba18a",
"favicon.png": "341a516071c1b3e2762e7b690e16b921",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "326d89f0e3282c86b923f2767ab00e0a",
"/": "326d89f0e3282c86b923f2767ab00e0a",
"main.dart.js": "9914d4bf56b57a5a8c435e3c882eca7e",
"manifest.json": "f409e475ca16e88a8ccbd482bb36759f",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
