System.register(["__unresolved_0", "cc", "axios"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, axios, _dec, _class, _crd, ccclass, property, Login;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfaxios(extras) {
    _reporterNs.report("axios", "axios", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_axios) {
      axios = _axios.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91d97wFs2BE4py8gfu5BRDd", "Login", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Login", Login = (_dec = ccclass("Login"), _dec(_class = class Login extends Component {
        constructor() {
          super(...arguments);
          this.state = void 0;
        }

        start() {}

        get() {
          return _asyncToGenerator(function* () {
            var a = yield (_crd && axios === void 0 ? (_reportPossibleCrUseOfaxios({
              error: Error()
            }), axios) : axios).get('https://sv-user.dadsnetwork.co/api/auth/google/url?redirect_url=https://dads-user.vercel.app').then(value => {
              console.log(value, "vhecxs");
            });
          })();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f955b56452e09be84d9cf2fce2d81b4079b23da5.js.map