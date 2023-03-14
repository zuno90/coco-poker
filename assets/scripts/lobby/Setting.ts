import { _decorator, Component, director, Node, Prefab, instantiate } from "cc";
import { EPokerScene } from "db://assets/__types__/layout.type";

const { ccclass, property } = _decorator;

@ccclass("Setting")
export class Setting extends Component {
  @property(Node) private contentLayout: Node;

  @property(Prefab) private generalLayout: Prefab;
  @property(Prefab) private privateLayout: Prefab;
  @property(Prefab) private supportLayout: Prefab;

  start() {}

  update(deltaTime: number) {}

  public backToHomeLobby() {
    director.loadScene(EPokerScene.HomeLobby);
  }

  public changeTab(e, tab) {
    this.contentLayout.removeAllChildren();
    let targetNode: Node;

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
}
