if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,d)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const n=e=>s(e,a),o={module:{uri:a},exports:r,require:n};i[a]=Promise.all(c.map((e=>o[e]||n(e)))).then((e=>(d(...e),r)))}}define(["./workbox-dce15169"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/cms/zuix-editor.css",revision:"20bfdd79067e9ebdc3d619aafb170291"},{url:"app/cms/zuix-editor.html",revision:"29e9e66c0551e5713c02e4f86d1494b7"},{url:"app/cms/zuix-editor.js",revision:"40e7cdf4d16c625617ec84be52417f8a"},{url:"app/cms/zuix-editor/dialogs/add-page.css",revision:"fa9d55e0e6227e3e412259f11e0bbdb2"},{url:"app/cms/zuix-editor/dialogs/add-page.html",revision:"635447ae5013d8d592f0d3150aa6b907"},{url:"app/cms/zuix-editor/dialogs/add-page.js",revision:"cd78758e09ad8babf8f55ce56f49ecb6"},{url:"app/cms/zuix-editor/dialogs/create-component.css",revision:"980e51a89d8801392dd457459f10d8bf"},{url:"app/cms/zuix-editor/dialogs/create-component.html",revision:"beb030d44e9cd47de7da79e9b8e6c5a8"},{url:"app/cms/zuix-editor/dialogs/create-component.js",revision:"efb4228addddc9b4ba7e65b79611e4ff"},{url:"app/cms/zuix-editor/dialogs/delete-page.css",revision:"2d83029a4ce61bf4c799868f4da7be12"},{url:"app/cms/zuix-editor/dialogs/delete-page.html",revision:"b86caa847060bde014b7c740e7d919ce"},{url:"app/cms/zuix-editor/dialogs/delete-page.js",revision:"36d0d71ef5e39ccb7df0fdcc67006599"},{url:"config.js",revision:"24be7718612e5e3de4e105ba7ea035bc"},{url:"content/docs/index.bundle.ext.js",revision:"029c644a2c31e1930b4573b108754b40"},{url:"content/docs/index.bundle.js",revision:"57e2843bbb67ac6ee013450270d3df39"},{url:"content/docs/index.html",revision:"a120fcdc673c24b6b0ac7b67fd59790b"},{url:"content/docs/material-design-tags/index.bundle.ext.js",revision:"029c644a2c31e1930b4573b108754b40"},{url:"content/docs/material-design-tags/index.bundle.js",revision:"65278423e3c9e1021919d17b6b8ed30f"},{url:"content/docs/material-design-tags/index.html",revision:"4f61ac3b59fdd488901fd126f02a7847"},{url:"content/docs/page-options/index.bundle.ext.js",revision:"029c644a2c31e1930b4573b108754b40"},{url:"content/docs/page-options/index.bundle.js",revision:"1fcf61c0b51e42c4fb9c3f5446f2670a"},{url:"content/docs/page-options/index.html",revision:"a6d0095e77da33d409ee55910a92facc"},{url:"content/docs/zkit-components-tags/index.bundle.ext.js",revision:"029c644a2c31e1930b4573b108754b40"},{url:"content/docs/zkit-components-tags/index.bundle.js",revision:"288b389b84096dfdfbea0d2c387efb30"},{url:"content/docs/zkit-components-tags/index.html",revision:"c977b3bd6d254261dc6de56bf1cd13dd"},{url:"css/animate.min.css",revision:"c0be8e53226ac34833fd9b5dbc01ebc5"},{url:"css/fla/flex-layout-attribute.css",revision:"c9bc58fccb5b4c9d1d7a6e76edddffa7"},{url:"css/fla/flex-layout-attribute.min.css",revision:"c55488315343d9afb4d13ebf9cc8f97b"},{url:"css/prism.css",revision:"343ab6c1b213d253d82d6c7afad86079"},{url:"home/index.bundle.ext.js",revision:"029c644a2c31e1930b4573b108754b40"},{url:"home/index.bundle.js",revision:"ca9b24a9b6134502892af5b389370813"},{url:"home/index.html",revision:"ca075ca224603c3be6738cdb2d95ef58"},{url:"index.bundle.ext.js",revision:"6c184ed31101fc40c1709a456c47563d"},{url:"index.html",revision:"adf68446f0e159e420d09153982443b3"},{url:"js/fuse/fuse.basic.common.js",revision:"b488f72775b7781fc9471681f3b60ff7"},{url:"js/fuse/fuse.basic.esm.js",revision:"cb4c9ce0b4f8f5002af41893fa562bdb"},{url:"js/fuse/fuse.basic.esm.min.js",revision:"da3687f83c1266a469666b860a902c88"},{url:"js/fuse/fuse.basic.js",revision:"2c656b82ae254165eb4079007a6257f7"},{url:"js/fuse/fuse.basic.min.js",revision:"686d65f2ad077439ba50abc79def2671"},{url:"js/fuse/fuse.common.js",revision:"ede75979dbfe2122970ed7d791ffc89f"},{url:"js/fuse/fuse.esm.js",revision:"d064d7efb50e66a61b75f2f0ccc1921b"},{url:"js/fuse/fuse.esm.min.js",revision:"85727c3b04109b5182a32fd0bf40021c"},{url:"js/fuse/fuse.js",revision:"736b0515ddf8a66cce27b25c823b6057"},{url:"js/fuse/fuse.min.js",revision:"3f6cc2902306abd1b5fb5c61655792ff"},{url:"js/mdl/material.indigo-deep_purple.min.css",revision:"1c401a0e084db91cdd5d196b08b0795e"},{url:"js/mdl/material.min.css",revision:"9ab85b48144d24908b4e455c2afb648c"},{url:"js/mdl/material.min.js",revision:"8dbb84e1d015cd5c2f5be1064eb924b3"},{url:"js/zuix/zuix-bundler.js",revision:"1b72e0d397ea8ca3d2c33182407ffca6"},{url:"js/zuix/zuix-bundler.min.js",revision:"feb3897086105e2bb3e4ad2c78defeaf"},{url:"js/zuix/zuix-bundler.module.js",revision:"c4039f8cfaad5874e8269502e2c4f4c4"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"b844e9c9b4de6aae6dfc8a35b770a20c"},{url:"js/zuix/zuix.js",revision:"0c627144eedd8495563d6ed7852e501f"},{url:"js/zuix/zuix.min.js",revision:"6d0de6a3c1943cdda5243bf43b8414d9"},{url:"js/zuix/zuix.module.js",revision:"944d7be6c8f34470c22e4c4163ae896a"},{url:"js/zuix/zuix.module.min.js",revision:"a7a755bf0fb0f3e7d38a9b4a39f3c054"},{url:"lib/1.1/components/context-menu.css",revision:"92dd2fa2c80af9b5464b3912c1fcdf2b"},{url:"lib/1.1/components/context-menu.html",revision:"74daf4054d7613ede5f88007a94bdc43"},{url:"lib/1.1/components/context-menu.js",revision:"c431c45cd1c042f2e9d5b2fc51b6d09f"},{url:"lib/1.1/components/hamburger-icon.css",revision:"dd81a60d1bfa7bd4463bb551eae81e35"},{url:"lib/1.1/components/hamburger-icon.html",revision:"14b9b9c25ea92bd9660a2e6ea53c1b0d"},{url:"lib/1.1/components/hamburger-icon.js",revision:"44cf41b6ac1d2dd49f7bf004a5d628a4"},{url:"lib/1.1/components/media-browser.css",revision:"e889174b42c1b4abd01bcd04e4cdaa0f"},{url:"lib/1.1/components/media-browser.html",revision:"d82b328652c89f40f6d81f84771a30ab"},{url:"lib/1.1/components/media-browser.js",revision:"78e4e863a758ac040ccfec3bd5dd23f7"},{url:"lib/1.1/components/media-browser/article.css",revision:"e7f0f5dbe26e76dcd13f7973dc768308"},{url:"lib/1.1/components/media-browser/article.html",revision:"ee5d2f689e747b5320fefd361af7fcfd"},{url:"lib/1.1/components/media-browser/image.css",revision:"ae49f05922ab6be7e09a8bebf1f32f00"},{url:"lib/1.1/components/media-browser/image.html",revision:"87a9be2b82f0388a7d3aaa16c2003422"},{url:"lib/1.1/components/media-browser/image.js",revision:"4aeeac0bd702d717fceb59f1abcd924e"},{url:"lib/1.1/components/media-browser/video-yt.css",revision:"594d8771c9b011eaebcd957daf74d17e"},{url:"lib/1.1/components/media-browser/video-yt.html",revision:"a85ff95f97a31b1d890dfc55a2b91538"},{url:"lib/1.1/components/media-browser/video-yt.js",revision:"87ae9156a9dec2427ffbe5439e5c3f4f"},{url:"lib/1.1/components/media-browser/video.css",revision:"c62d91469a6c8d17aad13581469f7d1c"},{url:"lib/1.1/components/media-browser/video.html",revision:"4128300adb3a2e6cd8d68bba9ffb00ee"},{url:"lib/1.1/components/media-browser/video.js",revision:"eb337fc0d0adb6840d077de7888a8f8c"},{url:"lib/1.1/components/menu-overlay.css",revision:"736446a0ce463ad6664c5f8066376189"},{url:"lib/1.1/components/menu-overlay.html",revision:"220c3005881852f0387e61ea8ac2a6c5"},{url:"lib/1.1/components/menu-overlay.js",revision:"15dc6cd532c7c4af1ee4f525c2f3aff2"},{url:"lib/1.1/controllers/drawer-layout.js",revision:"efd643eb309cafec496b8f5b60dacf4a"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"1776574c57c1a6115edfbcb3887ed147"},{url:"lib/1.1/controllers/header-auto-hide.js",revision:"dfafe8a0780d7759b16afa63673cbecb"},{url:"lib/1.1/controllers/list-view.js",revision:"fc2930407b29c707ab8bfca33685e9be"},{url:"lib/1.1/controllers/mdl-button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"lib/1.1/controllers/mdl-checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"lib/1.1/controllers/mdl-menu.js",revision:"8f620c9a13b8c47720b24b46205fc906"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"d35210ea8c416fdad067aedad98c9063"},{url:"lib/1.1/controllers/view-pager.js",revision:"d7e48fa1226efe9fb2e1a53730203d82"},{url:"lib/1.1/templates/mdl-card-image.css",revision:"394c8f6d4efb3ac8546f2199579d50fc"},{url:"lib/1.1/templates/mdl-card-image.html",revision:"7983de36c031e5049e7cfe024bb56be3"},{url:"lib/1.1/templates/mdl-card-square.css",revision:"0cd25031cce1ceb63fb6660f9249ebe3"},{url:"lib/1.1/templates/mdl-card-square.html",revision:"6a0884fea45748a54e0d6c4936f145c9"},{url:"lib/1.1/templates/mdl-card.css",revision:"d8c8685be5e6fc793835eddec3acd241"},{url:"lib/1.1/templates/mdl-card.html",revision:"8f4162c548d4eb34d2e592c499f31aa0"},{url:"manifest.json",revision:"29978efcaebfab6fbd65116d50cd99c2"},{url:"search-index.json",revision:"04264b432511884737616fef1142277a"},{url:"search-list.json",revision:"5b11a8ced2c52f091ecd735afd4b6823"},{url:"search/index.bundle.ext.js",revision:"029c644a2c31e1930b4573b108754b40"},{url:"search/index.bundle.js",revision:"08716288d034b27ef2147f19c5d1aa0e"},{url:"search/index.html",revision:"ff66fd05d4b23c1b5c6a70f4f7bb9749"},{url:"content/docs/page-options/images/side_drawer_section.png",revision:"16d006e9b73a2fb01f6c873002d1c600"},{url:"content/docs/page-options/images/side_drawer.png",revision:"24f12235166597471ae367978a75987f"},{url:"images/github-mark.png",revision:"add1026fb07009c6879400cbcf145301"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"31fd304cf6c5ff72928b7a91fbd68343"},{url:"images/icons/icon-512x512.png",revision:"47d9af0508ab29138dcb8ca6a4664cf2"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/lighthouse.png",revision:"79aa0c430e8ee960cbe654bbc0718631"},{url:"images/page-speed-insight-icon.png",revision:"8806237a2557fb748e7eaae4158899fb"},{url:"images/profile-icon.png",revision:"b4e6fa3d09388123298958c47aeb13ca"},{url:"images/rss-feed.png",revision:"fa5663a3878814bb9820de6b29005169"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
