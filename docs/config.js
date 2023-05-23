/* eslint-disable quotes */
(function() {
  zuix.store('config', {
    "title": "Web App Template",
    "subtitle": "Simple, yet powerful!",
    "language": "en",
    "baseUrl": "/web-app/",
    "resourcePath": "/web-app/app/",
    "libraryPath": {
      "@lib": "https://zuixjs.github.io/zkit/lib/1.2/",
      "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
      "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
    },
    "siteMapUrl": "https://zuixjs.github.io/web-app/",
    "googleSiteId": null
  });
  // Check that service workers are registered
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/web-app/service-worker.js');
    });
  }
})();
