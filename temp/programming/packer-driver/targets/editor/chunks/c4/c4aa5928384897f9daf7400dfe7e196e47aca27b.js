'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
  }

  _export("default", parseProtocol);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=c4aa5928384897f9daf7400dfe7e196e47aca27b.js.map