System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, EPokerScene, _dec, _class, _crd, ccclass, property, RoomSelect;

  function _reportPossibleCrUseOfEPokerScene(extras) {
    _reporterNs.report("EPokerScene", "db://assets/__types__/layout.type", _context.meta, extras);
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
      director = _cc.director;
    }, function (_unresolved_2) {
      EPokerScene = _unresolved_2.EPokerScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "262cdcrNsJHB7aMax0aDnmu", "RoomSelect", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RoomSelect", RoomSelect = (_dec = ccclass("RoomSelect"), _dec(_class = class RoomSelect extends Component {
        start() {}

        update(deltaTime) {}

        handleBackToLobby() {
          director.loadScene((_crd && EPokerScene === void 0 ? (_reportPossibleCrUseOfEPokerScene({
            error: Error()
          }), EPokerScene) : EPokerScene).HomeLobby);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6e7d5957796179bffb4dfae7e99a3ffd960132e0.js.map