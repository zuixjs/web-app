if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let d={};const r=e=>s(e,n),o={module:{uri:n},exports:d,require:r};i[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(a(...e),d)))}}define(["./workbox-dce15169"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"config.js",revision:"6512287b58538b08c4839418582a1679"},{url:"content/docs/index.bundle.ext.js",revision:"7157e6fb7b4f507d153ff0305bbaab76"},{url:"content/docs/index.bundle.js",revision:"bb8d789ec77a3fd1f005321c9e6856e3"},{url:"content/docs/index.html",revision:"dc105dc0e872caac5cae8a8a6515587e"},{url:"content/docs/material-design-tags/index.bundle.ext.js",revision:"7157e6fb7b4f507d153ff0305bbaab76"},{url:"content/docs/material-design-tags/index.bundle.js",revision:"7cce88294e1b52f3911b7ae39ad5731b"},{url:"content/docs/material-design-tags/index.html",revision:"1e538004a5a9add7da54324f8db14c3f"},{url:"content/docs/page-options/index.bundle.ext.js",revision:"7157e6fb7b4f507d153ff0305bbaab76"},{url:"content/docs/page-options/index.bundle.js",revision:"32ba176be85f5973369e98b49a96a688"},{url:"content/docs/page-options/index.html",revision:"62700d3fb37bc1952e53d8f5b7224976"},{url:"css/animate.min.css",revision:"c0be8e53226ac34833fd9b5dbc01ebc5"},{url:"css/fla/flex-layout-attribute.css",revision:"c9bc58fccb5b4c9d1d7a6e76edddffa7"},{url:"css/fla/flex-layout-attribute.min.css",revision:"c55488315343d9afb4d13ebf9cc8f97b"},{url:"css/prism.css",revision:"343ab6c1b213d253d82d6c7afad86079"},{url:"home/index.bundle.ext.js",revision:"7157e6fb7b4f507d153ff0305bbaab76"},{url:"home/index.bundle.js",revision:"bb8d789ec77a3fd1f005321c9e6856e3"},{url:"home/index.html",revision:"817db423bc5ad2e153b7a75b2ea0a238"},{url:"index.bundle.ext.js",revision:"a3ca3363058987047dd65d0a6a876c87"},{url:"index.html",revision:"38fe207bd31c6476549307a6a1e2d085"},{url:"js/elasticlunr/elasticlunr.js",revision:"9df81143ce5ad0e8b2204da08f547ad4"},{url:"js/elasticlunr/elasticlunr.min.js",revision:"392b3cd0a12183cf87406428d2989e90"},{url:"js/mdl/material.indigo-deep_purple.min.css",revision:"1c401a0e084db91cdd5d196b08b0795e"},{url:"js/mdl/material.min.css",revision:"9ab85b48144d24908b4e455c2afb648c"},{url:"js/mdl/material.min.js",revision:"8dbb84e1d015cd5c2f5be1064eb924b3"},{url:"js/zuix/zuix-bundler.js",revision:"987551bfd48353b0aed701077d31aab2"},{url:"js/zuix/zuix-bundler.min.js",revision:"46d85f0aa0ed849f60c24cee63e00cbe"},{url:"js/zuix/zuix-bundler.module.js",revision:"c4039f8cfaad5874e8269502e2c4f4c4"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"b844e9c9b4de6aae6dfc8a35b770a20c"},{url:"js/zuix/zuix.js",revision:"af67ac9d32e7f7def445362fe5be8f46"},{url:"js/zuix/zuix.min.js",revision:"78ba2a29023f39dc0d98ed1597373f11"},{url:"js/zuix/zuix.module.js",revision:"0c4dc2c6ae9a7958a26aa36a6083780f"},{url:"js/zuix/zuix.module.min.js",revision:"4ae0214b7e26fdc1ed5a79fe56a3cc42"},{url:"lib/1.1/components/context-menu.css",revision:"92dd2fa2c80af9b5464b3912c1fcdf2b"},{url:"lib/1.1/components/context-menu.html",revision:"74daf4054d7613ede5f88007a94bdc43"},{url:"lib/1.1/components/context-menu.js",revision:"c431c45cd1c042f2e9d5b2fc51b6d09f"},{url:"lib/1.1/components/hamburger-icon.css",revision:"dd81a60d1bfa7bd4463bb551eae81e35"},{url:"lib/1.1/components/hamburger-icon.html",revision:"14b9b9c25ea92bd9660a2e6ea53c1b0d"},{url:"lib/1.1/components/hamburger-icon.js",revision:"44cf41b6ac1d2dd49f7bf004a5d628a4"},{url:"lib/1.1/components/media-browser.css",revision:"e889174b42c1b4abd01bcd04e4cdaa0f"},{url:"lib/1.1/components/media-browser.html",revision:"c50c6964afcc48275feffd4a0f4adfe8"},{url:"lib/1.1/components/media-browser.js",revision:"2d66122c16175eaaa530329c57d0880d"},{url:"lib/1.1/components/media-browser/article.css",revision:"e7f0f5dbe26e76dcd13f7973dc768308"},{url:"lib/1.1/components/media-browser/article.html",revision:"817ccb127ce00476644de9f7a25611e5"},{url:"lib/1.1/components/media-browser/image.css",revision:"ae49f05922ab6be7e09a8bebf1f32f00"},{url:"lib/1.1/components/media-browser/image.html",revision:"5c1f000ef4df6ab8ef5205563986316b"},{url:"lib/1.1/components/media-browser/image.js",revision:"4aeeac0bd702d717fceb59f1abcd924e"},{url:"lib/1.1/components/media-browser/video-yt.css",revision:"594d8771c9b011eaebcd957daf74d17e"},{url:"lib/1.1/components/media-browser/video-yt.html",revision:"a85ff95f97a31b1d890dfc55a2b91538"},{url:"lib/1.1/components/media-browser/video-yt.js",revision:"87ae9156a9dec2427ffbe5439e5c3f4f"},{url:"lib/1.1/components/media-browser/video.css",revision:"c62d91469a6c8d17aad13581469f7d1c"},{url:"lib/1.1/components/media-browser/video.html",revision:"4128300adb3a2e6cd8d68bba9ffb00ee"},{url:"lib/1.1/components/media-browser/video.js",revision:"eb337fc0d0adb6840d077de7888a8f8c"},{url:"lib/1.1/components/menu-overlay.css",revision:"c780ae2fbcf5c89efa030dd25ff358e1"},{url:"lib/1.1/components/menu-overlay.html",revision:"220c3005881852f0387e61ea8ac2a6c5"},{url:"lib/1.1/components/menu-overlay.js",revision:"7df2804e61ae6e5bf8858272579d66c4"},{url:"lib/1.1/controllers/drawer-layout.js",revision:"efd643eb309cafec496b8f5b60dacf4a"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"1776574c57c1a6115edfbcb3887ed147"},{url:"lib/1.1/controllers/header-auto-hide.js",revision:"4b6783cbe749df25907f5faa0f92e257"},{url:"lib/1.1/controllers/list-view.js",revision:"fc2930407b29c707ab8bfca33685e9be"},{url:"lib/1.1/controllers/mdl-button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"lib/1.1/controllers/mdl-checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"lib/1.1/controllers/mdl-menu.js",revision:"8f620c9a13b8c47720b24b46205fc906"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"d35210ea8c416fdad067aedad98c9063"},{url:"lib/1.1/controllers/view-pager.js",revision:"d7e48fa1226efe9fb2e1a53730203d82"},{url:"lib/1.1/templates/mdl-card-image.css",revision:"5462946c03df2c00c284f4680c716125"},{url:"lib/1.1/templates/mdl-card-image.html",revision:"0536b5d14c1c83f8a2939da9ab7f2d0d"},{url:"lib/1.1/templates/mdl-card-square.css",revision:"0cd25031cce1ceb63fb6660f9249ebe3"},{url:"lib/1.1/templates/mdl-card-square.html",revision:"6a0884fea45748a54e0d6c4936f145c9"},{url:"lib/1.1/templates/mdl-card.css",revision:"d8c8685be5e6fc793835eddec3acd241"},{url:"lib/1.1/templates/mdl-card.html",revision:"8f4162c548d4eb34d2e592c499f31aa0"},{url:"manifest.json",revision:"10231bceb6bf625a754e38394f9a7f0c"},{url:"search-index.json",revision:"643ef5714a7108623568ef6036437d0b"},{url:"search/index.bundle.ext.js",revision:"7157e6fb7b4f507d153ff0305bbaab76"},{url:"search/index.bundle.js",revision:"2439aab55e227b37293a2737fe00533f"},{url:"search/index.html",revision:"6c4f6a29eaf5fad3c7b17dfdf4ac298d"},{url:"content/docs/page-options/images/side_drawer_section.png",revision:"16d006e9b73a2fb01f6c873002d1c600"},{url:"content/docs/page-options/images/side_drawer.png",revision:"24f12235166597471ae367978a75987f"},{url:"images/github-mark.png",revision:"add1026fb07009c6879400cbcf145301"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"31fd304cf6c5ff72928b7a91fbd68343"},{url:"images/icons/icon-512x512.png",revision:"47d9af0508ab29138dcb8ca6a4664cf2"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/lighthouse.png",revision:"79aa0c430e8ee960cbe654bbc0718631"},{url:"images/page-speed-insight-icon.png",revision:"8806237a2557fb748e7eaae4158899fb"},{url:"images/profile-icon.png",revision:"b4e6fa3d09388123298958c47aeb13ca"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
