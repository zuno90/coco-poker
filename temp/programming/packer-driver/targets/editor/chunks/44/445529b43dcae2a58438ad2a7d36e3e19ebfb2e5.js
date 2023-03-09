System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var utils, httpAdapter, xhrAdapter, AxiosError, knownAdapters;
  return {
    setters: [function (_unresolved_) {
      utils = _unresolved_.default;
    }, function (_unresolved_2) {
      httpAdapter = _unresolved_2.default;
    }, function (_unresolved_3) {
      xhrAdapter = _unresolved_3.default;
    }, function (_unresolved_4) {
      AxiosError = _unresolved_4.default;
    }],
    execute: function () {
      knownAdapters = {
        http: httpAdapter,
        xhr: xhrAdapter
      };
      utils.forEach(knownAdapters, (fn, value) => {
        if (fn) {
          try {
            Object.defineProperty(fn, 'name', {
              value
            });
          } catch (e) {// eslint-disable-next-line no-empty
          }

          Object.defineProperty(fn, 'adapterName', {
            value
          });
        }
      });

      _export("default", {
        getAdapter: adapters => {
          adapters = utils.isArray(adapters) ? adapters : [adapters];
          const {
            length
          } = adapters;
          let nameOrAdapter;
          let adapter;

          for (let i = 0; i < length; i++) {
            nameOrAdapter = adapters[i];

            if (adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
              break;
            }
          }

          if (!adapter) {
            if (adapter === false) {
              throw new AxiosError(`Adapter ${nameOrAdapter} is not supported by the environment`, 'ERR_NOT_SUPPORT');
            }

            throw new Error(utils.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
          }

          if (!utils.isFunction(adapter)) {
            throw new TypeError('adapter is not a function');
          }

          return adapter;
        },
        adapters: knownAdapters
      });
    }
  };
});
//# sourceMappingURL=445529b43dcae2a58438ad2a7d36e3e19ebfb2e5.js.map