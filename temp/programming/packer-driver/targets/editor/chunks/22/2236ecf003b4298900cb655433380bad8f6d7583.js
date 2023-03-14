System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, NewComponent;

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

      _cclegacy._RF.push({}, "262cdcrNsJHB7aMax0aDnmu", "RoomSelect", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewComponent", NewComponent = (_dec = ccclass("NewComponent"), _dec(_class = class NewComponent extends Component {
        start() {}

        update(deltaTime) {}

        handleBackToLobby() {
          director.loadScene("");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2236ecf003b4298900cb655433380bad8f6d7583.js.map