System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, EPokerScene, Config, _dec, _class, _crd, ccclass, property, main;

  function _reportPossibleCrUseOfEPokerScene(extras) {
    _reporterNs.report("EPokerScene", "db://assets/__types__/layout.type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfig(extras) {
    _reporterNs.report("Config", "db://assets/scripts/Config", _context.meta, extras);
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
    }, function (_unresolved_3) {
      Config = _unresolved_3.Config;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e2a9itMGdHlo15vLW+BWzM", "main", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("main", main = (_dec = ccclass("main"), _dec(_class = class main extends Component {
        //   @property(Node) private mainLayout: Node;
        //
        //   @property(Prefab) private loadingLayout: Prefab;
        //   @property(Prefab) private authLayout: Prefab;
        //   @property(Prefab) private lobbyLayout: Prefab;
        //   @property(Prefab) private roomLayout: Prefab;
        async onLoad() {
          director.loadScene((_crd && EPokerScene === void 0 ? (_reportPossibleCrUseOfEPokerScene({
            error: Error()
          }), EPokerScene) : EPokerScene).Loading);
          const player = await (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
            error: Error()
          }), Config) : Config).getPlayer();
          if (!player) return director.loadScene((_crd && EPokerScene === void 0 ? (_reportPossibleCrUseOfEPokerScene({
            error: Error()
          }), EPokerScene) : EPokerScene).LoginAuth);
          director.loadScene((_crd && EPokerScene === void 0 ? (_reportPossibleCrUseOfEPokerScene({
            error: Error()
          }), EPokerScene) : EPokerScene).HomeLobby);
        }

        async start() {}

        update(deltaTime) {} // private changeLayout(layout: EPokerLayout) {
        //   this.mainLayout.removeAllChildren();
        //   let targetNode: Node;
        //   switch (layout) {
        //     case EPokerLayout.Loading:
        //       targetNode = instantiate(this.loadingLayout);
        //       break;
        //     case EPokerLayout.Auth:
        //       targetNode = instantiate(this.authLayout);
        //       break;
        //     case EPokerLayout.Lobby:
        //       targetNode = instantiate(this.lobbyLayout);
        //       break;
        //     case EPokerLayout.Room:
        //       targetNode = instantiate(this.roomLayout);
        //       break;
        //     default:
        //       break;
        //   }
        //   this.mainLayout.addChild(targetNode);
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d9ac04f60fb6ea76e8ab4500dd19483633cfa814.js.map