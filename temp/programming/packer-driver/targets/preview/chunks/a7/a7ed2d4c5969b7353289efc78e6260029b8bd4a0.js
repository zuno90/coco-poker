'use strict';
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */

System.register([], function (_export, _context) {
  "use strict";

  function throttle(fn, freq) {
    var timestamp = 0;
    var threshold = 1000 / freq;
    var timer = null;
    return function throttled(force, args) {
      var now = Date.now();

      if (force || now - timestamp > threshold) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }

        timestamp = now;
        return fn.apply(null, args);
      }

      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          timestamp = Date.now();
          return fn.apply(null, args);
        }, threshold - (now - timestamp));
      }
    };
  }

  return {
    setters: [],
    execute: function () {
      _export("default", throttle);
    }
  };
});
//# sourceMappingURL=a7ed2d4c5969b7353289efc78e6260029b8bd4a0.js.map