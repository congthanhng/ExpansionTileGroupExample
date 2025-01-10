'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "745b1a8452f903e39767eb0230b22cb7",
"version.json": "c136b26de14bfd33bf3c0612dbb64032",
"index.html": "bb415c0bb8c2af3ff6948f8745423f1b",
"/": "bb415c0bb8c2af3ff6948f8745423f1b",
"main.dart.js": "15ff930f98726139e5d2db061dfc8f03",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
".git/config": "054b8885a09950f33ffa304b9e737bf7",
".git/objects/50/66c060609c8a63e229fd6bc06b7948890e0e38": "afe71154d108523c2d75e1ce37613e6c",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/93/b3c1b7f882456f47f2a0377e752d87e80489ad": "19bed528691bad5788c24f4c6b3ee865",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/f4/ff54424018cf56ab9d5f87f63e929139864e24": "60573ea3b6a6498e8bd87b6d264e077b",
".git/objects/f3/d2271ed1471d6c79a8c1838630e7b22494d3ba": "43dda2c65d4ccc48894ec046050379bc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/d0a91448225dfe670b43eabd27b4b20483d213": "cce57fce28712162c5f7646e3878e5a1",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/20/6de482eef32e43ebf1d0665b8005d5a02e6123": "8cd7dd8d0e09d5e5a892526fe9a4bef3",
".git/objects/pack/pack-a2779f1d6cf61ab9865c656b2f6c5298dd9e4966.idx": "554c8e0f957527f52485ee5f52581cb9",
".git/objects/pack/pack-a2779f1d6cf61ab9865c656b2f6c5298dd9e4966.pack": "8be3c4a8ff0fa24afe005b7f12e1e368",
".git/objects/7d/c124965d28403ec2545a24d7d1cd1fec1f57d8": "ba77ccaaec1f47b687d3709923541d7a",
".git/objects/29/9c0c7edfb936d2aeb99963a7ef864bb679d3a9": "7dc492fef71414ae0471c5fcdf165e64",
".git/objects/1f/edd7727a628a4eafdec7b5035fa68bdccaa32f": "a8e27975516e9db72762cc759eaccfae",
".git/objects/74/3373a228de8b9ecef573d1ad44dee18ad755f0": "38e1fb57f5e1ef58bcda101f4cfa76f1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/89b2462175577e7352658edbe49564471f8cbf": "21e6e873ab23ca7a7781f75e36b9541c",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/0384a9a416c48b3c6af6832b528e91674a2c46": "ca63d7b758c917bc4a6e55c779171e60",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/09/278a6712dbf99d11f6f6986bada4a8875982b2": "ec2b357007f3cad92fdcb9c50cbbeb40",
".git/objects/09/6edf8fe4cd778d56cbd9ad5333f8bb5b4ad797": "7be60abd3bc20b5c841c6c8b39dd88c2",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/90/c3ece063943873312bbbc719aa2586d7b00f94": "b2a1f54ae5c03cfb756e83ca73ee21a3",
".git/objects/90/fb0a0e1f10a54019dd3593aca3dee8ad07c5df": "d0e4a7807a521d10c4cfe0e00f7f65a3",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/9eaf16f66d501c57dd52cb6e621c87724e8d70": "488e8c323e6f774296b836264bc28b7c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/a9/f1cbafcc037810603b6f1e6b6bcd2fc074b633": "6781c254230cc5a2b964a52c4c106ace",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/e94997fcfa9d266f5fb34159319dd6d2002d70": "86c6f23a8ededa05581ce9af96616ae2",
".git/objects/ef/a1033b11d4f8a064443ccd8093c4483a8e5b53": "4f089ded6ea2c6c0fa7e416f37522c24",
".git/objects/ea/7ca4f0fad54f3fb65150840d99a937472efd07": "ab701d1f1436297d06041dab8cf828b2",
".git/objects/ea/8b05b6a606b34ef9175659e87afc3da3635302": "d4c59d32bb8434118110c481364b6d7b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/cb/d6e9a57e2f0c4491ab3cb187730bcd61390e09": "909a4eba79796b0ffa64cc4326800b6c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/afbe95c7a4d7d4f77fc8601fdde6674c2c5f91": "db4b9c82f3ff738589bd705b2e21a25d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/befc982f704dc68ad1da53910bc46adc9058a7": "5174752c7608820c2ac3b9966f8d3c37",
".git/objects/7f/4c79812465436f83930fe9bde4b3345fa84840": "d52701271db99f7115dcc8c0f7de0be9",
".git/objects/8e/7461783b0479eb5ba5bdfaf8b33ba17cfc5bff": "696fc74fbcc29ace24aea5d7583542ef",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "989bf5918ecdc3fc19820ce8cf08d7f4",
".git/logs/refs/heads/release/2.2.0": "93786dd4658a5a6da1a97463621a54c3",
".git/logs/refs/heads/master": "2e45e15a62093e16033d719d6c549bb3",
".git/logs/refs/heads/main": "7dc0e259bbcaed4c950cf6539b74699e",
".git/logs/refs/remotes/origin/main": "3f117f149bca0812368cb608e576857e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/release/2.2.0": "5f80c5bae7e6316e9d94bc84adf86a88",
".git/refs/heads/master": "5f80c5bae7e6316e9d94bc84adf86a88",
".git/refs/heads/main": "ce6c39d44f22b507e4ef09b082704c27",
".git/refs/remotes/origin/main": "ce6c39d44f22b507e4ef09b082704c27",
".git/index": "063968546dd55bfa21afc1c2705c8eac",
".git/COMMIT_EDITMSG": "131b468cee8df02fef5a85197c1c0879",
".git/FETCH_HEAD": "31c8116944df8550ef98f5b52d282242",
"assets/AssetManifest.json": "97ab71e15e5ce39e69a8b5b9b351ef17",
"assets/NOTICES": "91b8477e6701c917209fd3d42ed5c259",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0c6de5797f53d1674a5b5ce61149cee6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cb26a6bc1112e7f3cad69705cd5aa681",
"assets/fonts/MaterialIcons-Regular.otf": "36b4e885e3839bbd3c1e0c56e2e1251d",
"assets/assets/image/sol.png": "c2f20802cc457f7a9068e6807ffcb35d",
"assets/assets/image/doge.png": "c86fe209c6cb01017bae191e117d05dc",
"assets/assets/image/bnb.png": "1730f848f59cbf0939f137edb0d31daf",
"assets/assets/image/eth.png": "b5d827e47a09977cd6f6984a701e1035",
"assets/assets/image/upload.png": "4eed6b2016bda975d5bf504726644cfa",
"assets/assets/image/btc.png": "ae6ac454d84cc7fd9789614a65388793",
"assets/assets/image/secret_folder.png": "1cf8438fe89de85e93710e2f689e0756",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
".idea/dbnavigator.xml": "668033fe9639715ec90d1c3f6135a681",
".idea/vcs.xml": "2b87a65ff26f4eb5559aad1402936c4a",
".idea/other.xml": "27ff6f78958a6660c79a88c2bc4d4dd4",
".idea/workspace.xml": "83196099fb09a9bdca679cbadf1420fe",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "469cd1fed7db708fdcb1485b735d27bc",
".idea/git_toolbox_prj.xml": "def11fd7d7f704db06dd41ae48b80720",
".idea/git_toolbox_blame.xml": "bc871aecfa6dacfa3bcb212c6a849498"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
