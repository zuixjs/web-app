if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let n={};const o=e=>s(e,a),r={module:{uri:a},exports:n,require:o};i[a]=Promise.all(d.map((e=>r[e]||o(e)))).then((e=>(c(...e),n)))}}define(["./workbox-d3cf90b1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/cms/zuix-editor.css",revision:"20bfdd79067e9ebdc3d619aafb170291"},{url:"app/cms/zuix-editor.html",revision:"2c18f23fc3050c27e1b08930fef7f693"},{url:"app/cms/zuix-editor.js",revision:"bcf394538d99f8f8cd1e751be34ad352"},{url:"app/cms/zuix-editor/dialogs/add-page.css",revision:"fa9d55e0e6227e3e412259f11e0bbdb2"},{url:"app/cms/zuix-editor/dialogs/add-page.html",revision:"635447ae5013d8d592f0d3150aa6b907"},{url:"app/cms/zuix-editor/dialogs/add-page.js",revision:"cd78758e09ad8babf8f55ce56f49ecb6"},{url:"app/cms/zuix-editor/dialogs/create-component.css",revision:"980e51a89d8801392dd457459f10d8bf"},{url:"app/cms/zuix-editor/dialogs/create-component.html",revision:"9687ca7d40d37d18e752ece0ff1cdca9"},{url:"app/cms/zuix-editor/dialogs/create-component.js",revision:"b059980bd5ac0ca37ca566d00274b36d"},{url:"app/cms/zuix-editor/dialogs/delete-page.css",revision:"2d83029a4ce61bf4c799868f4da7be12"},{url:"app/cms/zuix-editor/dialogs/delete-page.html",revision:"b86caa847060bde014b7c740e7d919ce"},{url:"app/cms/zuix-editor/dialogs/delete-page.js",revision:"36d0d71ef5e39ccb7df0fdcc67006599"},{url:"config.js",revision:"d1e5b45cf383a0f27d954c5a474fa005"},{url:"content/content.11tydata.js",revision:"04fb4b5a734c21c8a824d50e6df3b3d0"},{url:"content/docs/index.bundle.ext.js",revision:"9e686ccfb18ab22c81656d13d367bfb9"},{url:"content/docs/index.bundle.js",revision:"3eba8c81a4fca0ff5effba853f7199b6"},{url:"content/docs/index.html",revision:"f739dfa005a029403720ca3133b9087a"},{url:"content/docs/material-design-tags/index.bundle.ext.js",revision:"9e686ccfb18ab22c81656d13d367bfb9"},{url:"content/docs/material-design-tags/index.bundle.js",revision:"895cd52f889ba052f39b5cd77d1c30c7"},{url:"content/docs/material-design-tags/index.html",revision:"e7d543058c26eaed8a97f5aa4d519e09"},{url:"content/docs/page-options/index.bundle.ext.js",revision:"9e686ccfb18ab22c81656d13d367bfb9"},{url:"content/docs/page-options/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"content/docs/page-options/index.html",revision:"7a669980aabb287fd13ba69adc0ab163"},{url:"content/docs/zkit-components-tags/index.bundle.ext.js",revision:"9e686ccfb18ab22c81656d13d367bfb9"},{url:"content/docs/zkit-components-tags/index.bundle.js",revision:"6347ba1d08aa36d2b7abd490e7ed66e5"},{url:"content/docs/zkit-components-tags/index.html",revision:"0bade6de61fcf2b682fa2e0e117489fa"},{url:"css/animate.min.css",revision:"c0be8e53226ac34833fd9b5dbc01ebc5"},{url:"css/fla/flex-layout-attribute.css",revision:"c9bc58fccb5b4c9d1d7a6e76edddffa7"},{url:"css/fla/flex-layout-attribute.min.css",revision:"c55488315343d9afb4d13ebf9cc8f97b"},{url:"css/prism.css",revision:"343ab6c1b213d253d82d6c7afad86079"},{url:"home/index.bundle.ext.js",revision:"9e686ccfb18ab22c81656d13d367bfb9"},{url:"home/index.bundle.js",revision:"9d3137d6edf9e43ca81fc1b29deec22b"},{url:"home/index.html",revision:"c99fa101fe3ec5a28228cb074b1acce0"},{url:"index.bundle.ext.js",revision:"95501d174ff38ef10a79420d6877699c"},{url:"index.html",revision:"21fbbdc794d035bb4a8b93df4f2982a3"},{url:"js/fuse/fuse.basic.common.js",revision:"ab3ef0028c8992d0098b5b836874291a"},{url:"js/fuse/fuse.basic.esm.js",revision:"0cd240af452625e49deed3ee2445aba6"},{url:"js/fuse/fuse.basic.esm.min.js",revision:"f79f602fa4572cd580786923ce942b6c"},{url:"js/fuse/fuse.basic.js",revision:"6c4923a67225dd64e42600c578d8ff0f"},{url:"js/fuse/fuse.basic.min.js",revision:"62465d50492b6d1bfbbd0e5f9a09b222"},{url:"js/fuse/fuse.common.js",revision:"ddbe097989e19bf1872f533cbc363f1b"},{url:"js/fuse/fuse.esm.js",revision:"82bbf2ed8ece715c58afe6c75977795f"},{url:"js/fuse/fuse.esm.min.js",revision:"589223b029350d512db61a8f323ce0fe"},{url:"js/fuse/fuse.js",revision:"7e19f88c4b2a7c038943bf3b4a17986f"},{url:"js/fuse/fuse.min.js",revision:"de7d60e4a6881074275feca14b84a49d"},{url:"js/mdl/material.indigo-deep_purple.min.css",revision:"1c401a0e084db91cdd5d196b08b0795e"},{url:"js/mdl/material.min.css",revision:"9ab85b48144d24908b4e455c2afb648c"},{url:"js/mdl/material.min.js",revision:"8dbb84e1d015cd5c2f5be1064eb924b3"},{url:"js/zuix/zuix-bundler.js",revision:"00ed03895f615ebd2fb0b3f0bec994d8"},{url:"js/zuix/zuix-bundler.min.js",revision:"df3c39916f2fe1f0fab80b2f5c479695"},{url:"js/zuix/zuix-bundler.module.js",revision:"134de25f07b5a2fb77bd9a963e86b163"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"654a4693e5471230795a0fbbfdab68c7"},{url:"js/zuix/zuix.js",revision:"2d6f8180b7c355b2c86be58bbf0a16c4"},{url:"js/zuix/zuix.min.js",revision:"2894acdf05ed5e20dcfb25bb8281ea6a"},{url:"js/zuix/zuix.module.js",revision:"ce65c583131528332c7e928d1b0dacd8"},{url:"js/zuix/zuix.module.min.js",revision:"33370a07f10a6afd26ee774ad214a334"},{url:"js/zuix/zx-context.module.js",revision:"8d5f2cabaa0dd997e0493f1d475daa9a"},{url:"manifest.json",revision:"29978efcaebfab6fbd65116d50cd99c2"},{url:"search-index.json",revision:"5dd85d408a99f4ab6484f3ecd509a8aa"},{url:"search-list.json",revision:"ec4e80e711afa98f5fd94014e45e182a"},{url:"search/index.bundle.ext.js",revision:"9e686ccfb18ab22c81656d13d367bfb9"},{url:"search/index.bundle.js",revision:"3cc60cfceb53d65f250c31efd348a7d0"},{url:"search/index.html",revision:"6254c51e26954bb38546d38274fa5442"},{url:"content/docs/page-options/images/side_drawer_section.png",revision:"16d006e9b73a2fb01f6c873002d1c600"},{url:"content/docs/page-options/images/side_drawer.png",revision:"24f12235166597471ae367978a75987f"},{url:"images/github-mark.png",revision:"add1026fb07009c6879400cbcf145301"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"31fd304cf6c5ff72928b7a91fbd68343"},{url:"images/icons/icon-512x512.png",revision:"47d9af0508ab29138dcb8ca6a4664cf2"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/lighthouse.png",revision:"79aa0c430e8ee960cbe654bbc0718631"},{url:"images/page-speed-insight-icon.png",revision:"8806237a2557fb748e7eaae4158899fb"},{url:"images/patreon.png",revision:"138534b06fe107c864e576d63273cf75"},{url:"images/profile-icon.png",revision:"b4e6fa3d09388123298958c47aeb13ca"},{url:"images/rss-feed.png",revision:"fa5663a3878814bb9820de6b29005169"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
