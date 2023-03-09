'use strict';
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */

System.register([], function (_export, _context) {
  "use strict";

  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  _export("default", spread);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=843e1bcad1427a4a15567439ce250c60d89dfb57.js.map