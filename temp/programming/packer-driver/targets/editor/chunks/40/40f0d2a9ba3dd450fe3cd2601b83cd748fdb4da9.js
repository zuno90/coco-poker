System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, _dec, _class, _class2, _crd, ccclass, property, Config;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c9609of11VGD4ZMyXFT2w4v", "Config", undefined);

      __checkObsolete__(['_decorator', 'Component', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Config", Config = (_dec = ccclass("Config"), _dec(_class = (_class2 = class Config extends Component {
        static async getPlayer() {
          const accessToken = sys.localStorage.getItem("accessToken");

          try {
            const reqPlayer = await fetch("https://cms.dadsnetwork.net/user", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`
              }
            });
            const res = await reqPlayer.json();
            if (!res.success) throw new Error(res.message);
            return res;
          } catch (err) {
            console.error(err);
          }
        }

      }, _class2.value = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=40f0d2a9ba3dd450fe3cd2601b83cd748fdb4da9.js.map