'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ef04cdb665d06fa8a7ada5ef47f46d20",
"version.json": "c136b26de14bfd33bf3c0612dbb64032",
"index.html": "bb415c0bb8c2af3ff6948f8745423f1b",
"/": "bb415c0bb8c2af3ff6948f8745423f1b",
"main.dart.js": "f4ee0f64a3b9505680baa788367a768f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
".git/config": "0f47e06b4e2dcb96178a1308dc7f990a",
".git/objects/61/e9d741cd4aeb49088fe5de9d6575e0bf658ee3": "a80d9475e94c4344ff8162e35ae6e414",
".git/objects/61/9dc442a299a7a4c044873ed3b1f80389f5b56e": "94fdc164c0e38ae194a6d61882264db6",
".git/objects/68/a9a8b98c23b9e6de866a9a848dff49236f2e2e": "aaeea8c15e5b114d22c47b500faff8ad",
".git/objects/03/b4ca142ec9d134b3df6045389c3c65b93b8b51": "9a4b61f2fe60a418198fcaee9be873a3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/c6fe2b6a834ca9a95d83e99dc2dcfafd766602": "5371fb94cf5ece095535e3cb9b8427d0",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/fb357282d109c6ec519373d10793b32149d07e": "1308f34dafb4970afb61d36082adc863",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/6258ed404f20469cc8e97c9a4d98deefff1504": "b1aa906ee98561ed99aa58118571f530",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5a/5fe913283462f6789332b756e2bd49a06ff220": "2d7873da3fae2941b3d73b3a08a45b73",
".git/objects/a3/0334f7b8d5d9e58c5a98f935bd9b1db35526a1": "329a62180a37a5895b23dbb8979cc2e1",
".git/objects/ad/3f72c809e6b4ad9d9e92822fa386fe0bcecc4a": "26d631eabfb4a42c8706d0238f7ca91a",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/09c44ef094a37fb36c58d4e2007f7afa7c6f85": "aea4605f5d85c7a089ce4cd0064f7ce1",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/58bde6df992ec93ba23996021c7b96ee26d01d": "90ec9f0fa46d7723fcdb8b0c9987c213",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/d42a210421620900c60eea634c1d5398187116": "38a150879d87fc9287ea34d18e8a5dd1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/34270b2e1d387fd26bf0a0adbb8c34b844c804": "8df80cb0c27b6a8b0b24fa34dc6d56a5",
".git/objects/ee/d0a91448225dfe670b43eabd27b4b20483d213": "cce57fce28712162c5f7646e3878e5a1",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/22bd506cff2c44bceb8142072cc4859735336d": "2f27017cab7b69f7ff46417e47613db1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/6b8c0aa58069a6e23c480b01a985b6d8c1efaf": "32d55981377e8533a08ed8f0b82848c6",
".git/objects/20/6de482eef32e43ebf1d0665b8005d5a02e6123": "8cd7dd8d0e09d5e5a892526fe9a4bef3",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/5acd9c93ec34b825c8c29f316fa431ffd0ff89": "19e91f5efccf0bb60b66d6b3ef0e1030",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/514a7a6972c1e94c5ebd797ef048beb81d2ba7": "ba9e1c4a95cc54119403146229a7aa40",
".git/objects/11/6a6b6a1904901f8480f4cce74999e69aed28f0": "cbbee6007d22786103c1a8bf53d42805",
".git/objects/29/d8f89b4ea7c7183b17a7f7399aa330f3806640": "c89181d23819e25f18137e68997df10f",
".git/objects/7b/4ab26b8ce2c40b4f6a696887752fa8124c85b8": "66b61158a4df372560e02b13047f7c02",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/89b2462175577e7352658edbe49564471f8cbf": "21e6e873ab23ca7a7781f75e36b9541c",
".git/objects/86/2eab8cb2b4b1c8b8313b167545a4cf71c9739b": "3cd892f01a6ca09093bcb553d6c7527b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/278a6712dbf99d11f6f6986bada4a8875982b2": "ec2b357007f3cad92fdcb9c50cbbeb40",
".git/objects/09/6edf8fe4cd778d56cbd9ad5333f8bb5b4ad797": "7be60abd3bc20b5c841c6c8b39dd88c2",
".git/objects/96/ee761201eb93c796d77bb69fd336376e570260": "e4a20670dade026fb5de14c8ac69be58",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/08/79a61672ee40b96628e7dbd108e64cf77314f8": "2f81260769a91f1de4fb3d460b54dfff",
".git/objects/6c/f712d63741cdb7d29bab5a36b114eced5ce3c8": "4be16d69d88a95586138844b779dc6cc",
".git/objects/99/4961bb6049e53df0db31439044b826db57f9a7": "3ab4ad2561ef515595036f3c6c3a0770",
".git/objects/55/1094e2ed705ef75ca5538e8e22d029eae83354": "05bb5d74004de0341de51c5145fc22cf",
".git/objects/97/570d81d54ca3fd132d648c0e86d1d039f5dde6": "d4cffbfadad1ba4363ca646339faea9b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/016b8a3fa43453bdef2551cb29cb5dc88f4900": "e25d5c068e9bf8bfa8362082e39bc7e1",
".git/objects/a7/79ef140f9b372cb0317f76bdbb399651f786c0": "f5e3696fa05f694a875a196d1ad708a1",
".git/objects/b1/ab7cc9d979e18e4226abffa16efcbbd01a9c63": "2a8856008f62c61848566783d8fb6525",
".git/objects/af/fa4e3b2ffbde11c05a1235520066f11bd216a4": "90c30c923b9a0da9265e5385b46c8427",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/e94997fcfa9d266f5fb34159319dd6d2002d70": "86c6f23a8ededa05581ce9af96616ae2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/a1033b11d4f8a064443ccd8093c4483a8e5b53": "4f089ded6ea2c6c0fa7e416f37522c24",
".git/objects/ea/7ca4f0fad54f3fb65150840d99a937472efd07": "ab701d1f1436297d06041dab8cf828b2",
".git/objects/ea/8b05b6a606b34ef9175659e87afc3da3635302": "d4c59d32bb8434118110c481364b6d7b",
".git/objects/e1/a1777d638931910fb0f12913415f2bd3592888": "b96827121bd72bbf2f5213f744a07cb6",
".git/objects/cd/4fd4a7fcef65647b01a081fd5217cf104f5dc7": "0a953384a7211d98fc0c97e069afc6fa",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/cb/d6e9a57e2f0c4491ab3cb187730bcd61390e09": "909a4eba79796b0ffa64cc4326800b6c",
".git/objects/cb/7edca9272e766f3f6c0edb291f3b77e2a0a1e8": "72f6ad8e40bc6920eed0ce891b5ec91f",
".git/objects/e0/c013a15a6b4f063bb020d59815309bc160e20b": "cb676f0504832fa56f2a9e68766600f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/afbe95c7a4d7d4f77fc8601fdde6674c2c5f91": "db4b9c82f3ff738589bd705b2e21a25d",
".git/objects/2d/80d90c30bf0983314dca833c8a933547e17ff9": "53ba98271fb3c2588c2c32150563de4c",
".git/objects/85/befc982f704dc68ad1da53910bc46adc9058a7": "5174752c7608820c2ac3b9966f8d3c37",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/47/3b17bacd78c6c0f3efb8947f6ec773cdd9d8a6": "60082b603b74bbe3947d2c132d51cc99",
".git/objects/7f/6ff7cfa776a6a505623d57d7445ac0d04a1c5d": "c2c630e8a1e05a221d109b809c1bce63",
".git/objects/7f/4c79812465436f83930fe9bde4b3345fa84840": "d52701271db99f7115dcc8c0f7de0be9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "66d9bd47a00b53a7c9574b9556a38851",
".git/logs/refs/heads/main": "e7ac3254560c359f8f4a2ca237e8b0de",
".git/logs/refs/remotes/origin/main": "b1483674d35e87ee3d9f6761131d6977",
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
".git/refs/heads/main": "e7103758bc349089c392feec4c401918",
".git/refs/remotes/origin/main": "e7103758bc349089c392feec4c401918",
".git/index": "592e9ccbbcc17feda307d9652dbe93bc",
".git/FETCH_HEAD": "eccde482ae7640371f3df776361b6ae4",
"assets/AssetManifest.json": "97ab71e15e5ce39e69a8b5b9b351ef17",
"assets/NOTICES": "91b8477e6701c917209fd3d42ed5c259",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0c6de5797f53d1674a5b5ce61149cee6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cb26a6bc1112e7f3cad69705cd5aa681",
"assets/fonts/MaterialIcons-Regular.otf": "2b3e9f69551b77473bb4d04aed2ff57c",
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
".idea/workspace.xml": "eee2780042f64728609fa4a09a8cc882",
".idea/misc.xml": "d7b910fa0c3e121314befeccaf86e128"};
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
