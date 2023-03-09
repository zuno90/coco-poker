'use strict';

System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var utils;

  function isAxiosError(payload) {
    return utils.isObject(payload) && payload.isAxiosError === true;
  }

  _export("default", isAxiosError);

  return {
    setters: [function (_unresolved_) {
      utils = _unresolved_.default;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=8315c994b6b16aeeb2c45277b5098f83d43ae134.js.map