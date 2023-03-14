System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Node, Prefab, instantiate, EPokerScene, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Setting;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      EPokerScene = _unresolved_2.EPokerScene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06a84uGHtJN/rqzuHKJOBnB", "Setting", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Setting", Setting = (_dec = ccclass("Setting"), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = (_class2 = class Setting extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "contentLayout", _descriptor, this);

          _initializerDefineProperty(this, "generalLayout", _descriptor2, this);

          _initializerDefineProperty(this, "privateLayout", _descriptor3, this);

          _initializerDefineProperty(this, "supportLayout", _descriptor4, this);
        }

        start() {}

        update(deltaTime) {}

        backToHomeLobby() {
          director.loadScene((_crd && EPokerScene === void 0 ? (_reportPossibleCrUseOfEPokerScene({
            error: Error()
          }), EPokerScene) : EPokerScene).HomeLobby);
        }

        changeTab(e, tab) {
          this.contentLayout.removeAllChildren();
          var targetNode;

          switch (Number(tab)) {
            case 1:
              targetNode = instantiate(this.generalLayout);
              break;

            case 2:
              targetNode = instantiate(this.privateLayout);
              break;

            case 3:
              targetNode = instantiate(this.supportLayout);
              break;

            default:
              break;
          }

          this.settingLayout.addChild(targetNode);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentLayout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "generalLayout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "privateLayout", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "supportLayout", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=921c8119f681d04bd8d1ab5eac108a1c275a2648.js.map