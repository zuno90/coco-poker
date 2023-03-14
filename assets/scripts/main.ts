import { _decorator, Component, director } from "cc";
import { EPokerScene } from "db://assets/__types__/layout.type";
import { Config } from "db://assets/scripts/Config";

const { ccclass, property } = _decorator;

@ccclass("main")
export class main extends Component {
  //   @property(Node) private mainLayout: Node;
  //
  //   @property(Prefab) private loadingLayout: Prefab;
  //   @property(Prefab) private authLayout: Prefab;
  //   @property(Prefab) private lobbyLayout: Prefab;
  //   @property(Prefab) private roomLayout: Prefab;

  public async onLoad() {
    director.loadScene(EPokerScene.Loading);
    const player = await Config.getPlayer();
    if (!player) return director.loadScene(EPokerScene.LoginAuth);
    director.loadScene(EPokerScene.HomeLobby);
  }

  public async start() {}

  public update(deltaTime: number) {}

  // private changeLayout(layout: EPokerLayout) {
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
}
