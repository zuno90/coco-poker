System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EPokerLayout, EPokerScene;

  _export({
    EPokerLayout: void 0,
    EPokerScene: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01ade7uybpIGogcUarctotS", "layout.type", undefined);

      (function (EPokerLayout) {
        EPokerLayout["Loading"] = "Loading";
        EPokerLayout["Auth"] = "Auth";
        EPokerLayout["Lobby"] = "Lobby";
        EPokerLayout["Room"] = "Room";
      })(EPokerLayout || _export("EPokerLayout", EPokerLayout = {}));

      (function (EPokerScene) {
        EPokerScene["LoginAuth"] = "LoginAuth";
        EPokerScene["ChooseRoomLobby"] = "ChooseRoomLobby";
        EPokerScene["HomeLobby"] = "HomeLobby";
        EPokerScene["PlayerProfileLobby"] = "PlayerProfileLobby";
        EPokerScene["RankLobby"] = "RankLobby";
        EPokerScene["SettingLobby"] = "SettingLobby";
      })(EPokerScene || _export("EPokerScene", EPokerScene = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9bb505c2504a6b5799a941d3c75dcb5e6b0c940.js.map