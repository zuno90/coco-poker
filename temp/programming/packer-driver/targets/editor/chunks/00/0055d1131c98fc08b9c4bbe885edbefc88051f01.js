System.register(["__unresolved_0", "cc", "axios"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, axios, _dec, _class, _crd, ccclass, property, Login;

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
        constructor(...args) {
          super(...args);
          this.state = void 0;
        }

        start() {}

        async get() {
          const a = await (_crd && axios === void 0 ? (_reportPossibleCrUseOfaxios({
            error: Error()
          }), axios) : axios).get('https://sv-user.dadsnetwork.co/api/auth/google/url?redirect_url=https://dads-user.vercel.app').then(value => {
            console.log(value, "vhecxs");
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0055d1131c98fc08b9c4bbe885edbefc88051f01.js.map