System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, LobbyLayout;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98141FlEPtP3Jqotk2bN+dY", "LobbyLayout", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LobbyLayout", LobbyLayout = (_dec = ccclass("main"), _dec(_class = class LobbyLayout extends Component {
        start() {}

        update(deltaTime) {}

        pickRoom() {
          console.log(234234);
          director.loadScene("ChooseRoomLobby");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=788330e2c7ff4189857b850fc5d4a7eebcb57545.js.map