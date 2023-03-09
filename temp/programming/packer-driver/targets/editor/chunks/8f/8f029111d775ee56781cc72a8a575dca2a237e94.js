'use strict';
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */

System.register([], function (_export, _context) {
  "use strict";

  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
  }

  _export("default", combineURLs);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=8f029111d775ee56781cc72a8a575dca2a237e94.js.map