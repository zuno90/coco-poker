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
    let timestamp = 0;
    const threshold = 1000 / freq;
    let timer = null;
    return function throttled(force, args) {
      const now = Date.now();

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
//# sourceMappingURL=f01795269013fe65fc055a9c9345d8a492b03365.js.map