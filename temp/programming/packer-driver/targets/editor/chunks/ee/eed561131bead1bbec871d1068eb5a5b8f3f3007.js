System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Login;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
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
          const a = await fetch('https://sv-user.dadsnetwork.co/api/auth/google/url?redirect_url=https://dads-user.vercel.app');
          console.log(a);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eed561131bead1bbec871d1068eb5a5b8f3f3007.js.map