'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7992669be7efd967a2130497055bc017",
".git/config": "5701e7d53afee734671e5b1534d8ead2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ad332311974bf27c622f1760cb81ff81",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b04fb24cc66a261d65d215d649878b1e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "329230d36299a138c1c3f1f071d7f69f",
".git/logs/refs/heads/main": "329230d36299a138c1c3f1f071d7f69f",
".git/logs/refs/remotes/origin/main": "835c9f1cd43a15537fd4b723cd848376",
".git/objects/06/383f4601017c6b1b8bf07e61ef8e27f32588d3": "179bc9643ae9000bcd3bea0969363828",
".git/objects/08/aeace124c30454a8b0127c928375f5345b1e91": "641bca1678bf4ddabf404e3b9563acb8",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0d/cf7aa242fb9533478ea078c152386f450ea91e": "94a2a972fc6515ca415881bc6f203eb0",
".git/objects/14/cc4e87f22cd5d0d2ef11a8492bcdb3901b1414": "6968fcbb64c78d224eb0ada1094cba16",
".git/objects/19/1a7f9a255a1fece3869f8c3034e498bb9ac41e": "9bad44ae9bb7de17856e72867967d834",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/1f0c74de9e4195e2ccd71934022a6d8d5190bc": "258e3edbf642081d9378f8333b9ebc4d",
".git/objects/1c/7e5f6381c9f3a8a61a91824792617a463d503b": "dd830d19d01683bb41fa54d3950da5f1",
".git/objects/21/ff3f5a8326f7dfd0182ea5cb60f65c4091a509": "4fc362eef5b13115f6fffa7d93f20976",
".git/objects/2d/75b5a151e7f276105e093ccf5b128342dead2e": "16d493e462ed2fa2f17245a9574c81aa",
".git/objects/34/2f6f643708b51aa1a3532b98c77c945a3f88c8": "8c96f712f9df09fc0aeaff469b183095",
".git/objects/39/d5ea9e4c3a328432d79f45494e7235286b9888": "db273db195ab75a90156142b98d3af1e",
".git/objects/3d/568f531af2c093400df62c4874bfb705fa65b2": "0caf2d663f92bd982576b4e99e4ba2d8",
".git/objects/41/37c63a4dbc171748f8b0262d9c047af48c7c2d": "3b7d525d30de35349ecf334242b32097",
".git/objects/44/9f18a40e1ae5287e354263da441e268adc82fa": "69e30c87850b9588dcbf84e8550482d6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/84ec9fc44453af8a9680ddce65ce4b6bec69a6": "9c385b48823f586a2283cd31ce8278dd",
".git/objects/48/84d72fe7756b35042979dcd900ac54570af7a2": "d5c1df6ed1e9d5e73b52b9c791580ccd",
".git/objects/48/e127e00f63a7c03a97516c7685f28eebeec245": "4100a04f926be889d68b14ae310fa53a",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/52/dd8c134a022a951ce11c93e4ec0dad54df7b79": "831104c1483ed4f09a33fa599209b78f",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/225f23979b9cdd943cf31c61593163f77faddd": "f49f6440ccf376a412b6bae0bf2eeb0d",
".git/objects/55/a2ad06c836844cb9bdd47c254974f57ff2116c": "611960adee4719a918a938f40c6e5237",
".git/objects/65/fda5686379755983bdf89ff2a47ed8ca951352": "cee0cf773f4914d6f7b84dab99871e0d",
".git/objects/67/e27c7a8e721e4a87b8809340fcdc76c9225d9f": "4b6274ad860094c84abc3a4a01658781",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/df3c0eddf38318904d14be2c4b54c0544047cd": "f69816e4dcd1f4de8b994eb883ca0814",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/1b34ef712ff86f421d1111e8e1a7f1af3828d3": "8855619f5eda707c2439b835a7e915ed",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/82/d830f077bf156ae57c431b4e350416df814501": "7f225f0c39f6471a3b0a5997f9088389",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/87/15e7e125657fcc81630dda8e12a5e47f2b412f": "d7fd7f84fa58d4d0b07de9b676850049",
".git/objects/87/e39090f3e654a163546d02677c2c9e6033b9b0": "f531026171fedf09291f68c5c9995596",
".git/objects/88/482fcf12d52c1aeb53c47c6b510217aa79b86a": "71ed2551f39ea75e97f9b0a37d8fb938",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/95/7bdf87434b4fb826709f44af934addc6c2a1f6": "133c67edc200b2d58561e6d26ee7895e",
".git/objects/96/f477f7b3033db9533b9e6c4dae1aaad231cb87": "4227903fdc955fce72104534e5ffc10d",
".git/objects/99/7f4c029022bb0e8d41537a0b5eb03569760292": "7140433e9daa5583b9e6fe052091518d",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/3388528d2852d22c5c8293815366599a8d0fb4": "b99178cf04aa8bb3f4a6d2eb9135c3e6",
".git/objects/9d/9235ba78f3a2c5f7597ab0d76b28feac551461": "229f9bd44fe81370be5fbfc1128616a1",
".git/objects/a8/d760ed131c90ec8a3d48aa2eb6d5047bdbf16f": "882dc4f6c68bc5ca23268d89abed67c6",
".git/objects/b4/f53a34e05994059a42c0e16d11b4123d620980": "d47ff0902872416b5d78be3aa00871eb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e314e088beac232747f1d2b4b65e22108a6a2b": "14fb12b90193ca0e6d0fa5a965a74be7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/ed20193546a51a7c96c847e11f421213636bd4": "8413e71e238cc18aa327c931ce1fc55c",
".git/objects/be/6cde27844ae1e292041e2fca3ac6ccdf9380e2": "880bce454abf08bed12f277da063e92c",
".git/objects/be/6e2dff5be5752dd2d496036b0a497bb4dc9300": "b6cdce283825368b965259e916e72d8d",
".git/objects/c2/32c1d4f6f96445826b263daebfdb4a6148b096": "4bd39778fbfe24c8612e321782b0e5ab",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cd/a213cbf833a906dd73f21bcb07a800341bd993": "c30644881acd74b6f00bca5f7ce437af",
".git/objects/d2/c94b2c1fb4c432fed899145b1abb6518f79f10": "aeb1be13a3fd26ae346c25293937528f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/747bb62689bfbf0a8895b85ce8401a967f771c": "826ca4da84b9f109345704f437e84a53",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/8b297bb96dc1c71a19fab4bc5685be5a54762d": "3d0139cd2c4a4b73a3132e951f529e14",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/03259e1bf1ae0689468251ad610f5a68fa4765": "7447f86a2e123caaf1a7a047face62c4",
".git/objects/e3/8b8bccc572a6bbabf24759565b1e4587815ec4": "6a9b5654d67789594e5fa2abddcb03b7",
".git/objects/e4/c8bd3e61f475af94cba0a9a209d95d1111b239": "36608422908d32554eb70636e83bad60",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/24a6050ed7a8610a5f0314e7d475221f9af565": "bb5a849fc67c1a1d4caf9cd36d5748f9",
".git/objects/f1/4778a0b464a1f76759cf51eae784a08a100091": "4be18be737dff6954f8681067c9a4a08",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/5f7f099b2924a81db1b84e741539d32f7f6051": "c6928c382afbae73137c4d5f1680b049",
".git/objects/f6/efce491a19b82a7ccc01e9ac36dd471bc3d492": "eea003232d160d897c9033d79c6b0487",
".git/objects/f8/db3814c6622189d9b7516147ef982f9fe26a90": "3461c96246f066c3faac0f494c289440",
".git/objects/fa/765fb4ba846d3eea71aa272159ab1c94046312": "f510b830b9cb9cec28bf914d7fe54e41",
".git/objects/fb/a14047c92796cdf51cbd0e04d83bee805e92e1": "89d8e31205d0a54479bfb6566f3e8869",
".git/objects/fc/8681ce1eb34ea66b52315140d692afe37888f7": "9e0561e9eab4d1bfb8f749f584e6bf64",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/ORIG_HEAD": "6de5beab8c74d13f479d2f4733880576",
".git/refs/heads/main": "41118f0344c68f4e43baa5caa6f63cc3",
".git/refs/remotes/origin/main": "41118f0344c68f4e43baa5caa6f63cc3",
"assets/AssetManifest.bin": "8c9b989372701d5664b5392fe83aad17",
"assets/AssetManifest.bin.json": "54b69dd1338ae7c1c9c3dbd700052ea9",
"assets/AssetManifest.json": "6c93f19129bde61e55519cde5334c341",
"assets/assets/images/onboarding.png": "5e8aa79786248e76e0656acd7220a668",
"assets/assets/images/presence.png": "5a5453ba4f2d5b936d82841313f361de",
"assets/assets/images/school-management-website.png": "23a745c5005da04407f33db37287e3b7",
"assets/assets/images/splash-screen-logo.png": "eac7a7d9b8a713d25a3a178fe1b5fa0d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c661d98379b5f4cea81da60f041c3465",
"assets/NOTICES": "82c75aa765d01ee53226040b56197482",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "788fe40ab0e147653d190de2eb690636",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "0a471c9cb441d0e2fe78ba84e938e335",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e046b16ce006e0b8c4c220a9eecf855d",
"/": "e046b16ce006e0b8c4c220a9eecf855d",
"main.dart.js": "97997704a55384759afc4e7629978dcb",
"manifest.json": "60f1110e64a94c419859d444d7a322e5",
"version.json": "9877f54332dc344afe49999be98f7513"};
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
