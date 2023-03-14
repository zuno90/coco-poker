System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, _dec, _class, _class2, _crd, ccclass, property, Config;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        static getPlayer() {
          return _asyncToGenerator(function* () {
            var accessToken = sys.localStorage.getItem("accessToken");

            try {
              var reqPlayer = yield fetch("https://cms.dadsnetwork.net/user", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + accessToken
                }
              });
              var res = yield reqPlayer.json();
              if (!res.success) throw new Error(res.message);
              return res;
            } catch (err) {
              console.error(err);
            }
          })();
        }

      }, _class2.value = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=83743909961ac692352de5da02c72451b6892baf.js.map