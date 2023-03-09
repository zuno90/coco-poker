'use strict';

System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var utils, platform;
  return {
    setters: [function (_unresolved_) {
      utils = _unresolved_.default;
    }, function (_unresolved_2) {
      platform = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", platform.isStandardBrowserEnv ? // Standard browser envs support document.cookie
      function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));

            if (utils.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }

            if (utils.isString(path)) {
              cookie.push('path=' + path);
            }

            if (utils.isString(domain)) {
              cookie.push('domain=' + domain);
            }

            if (secure === true) {
              cookie.push('secure');
            }

            document.cookie = cookie.join('; ');
          },
          read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      }() : // Non standard browser env (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() {
            return null;
          },
          remove: function remove() {}
        };
      }());
    }
  };
});
//# sourceMappingURL=6bc32c4a371e480434e08525375d156b6df295da.js.map