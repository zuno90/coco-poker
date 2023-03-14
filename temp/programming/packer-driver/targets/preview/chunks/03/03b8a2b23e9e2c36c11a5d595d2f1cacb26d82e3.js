System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, ProgressBar, RichText, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Loading;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      ProgressBar = _cc.ProgressBar;
      RichText = _cc.RichText;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2dc45rZ/9MPa6/wc24UH5L", "Loading", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'ProgressBar', 'RichText']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Loading", Loading = (_dec = ccclass("Loading"), _dec2 = property(ProgressBar), _dec3 = property(RichText), _dec(_class = (_class2 = class Loading extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "progressBar", _descriptor, this);

          _initializerDefineProperty(this, "percentage", _descriptor2, this);
        }

        onLoad() {}

        start() {}

        update(deltaTime) {
          if (this.progressBar.progress >= 1) director.loadScene("HomeLobby");
          this.progressBar.progress += deltaTime * 0.5;
          this.percentage.string = Math.ceil(this.progressBar.progress < 1 ? this.progressBar.progress * 100 : 100) + " %";
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "percentage", [_dec3], {
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
//# sourceMappingURL=03b8a2b23e9e2c36c11a5d595d2f1cacb26d82e3.js.map