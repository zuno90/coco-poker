'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function parseProtocol(url) {
    var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
  }

  _export("default", parseProtocol);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=dfd5cfd035d3bbec8720fb9eec4b752b66953c36.js.map