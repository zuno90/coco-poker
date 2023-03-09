'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  _export("default", bind);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=4ba67a90d4911358ac1469e95e923ddf3f835af7.js.map