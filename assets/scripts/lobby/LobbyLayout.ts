import { _decorator, Component, director } from "cc";
import { EPokerScene } from "db://assets/__types__/layout.type";

const { ccclass, property } = _decorator;

@ccclass("main")
export class LobbyLayout extends Component {
  public start() {}

  public update(deltaTime: number) {}

  public selectRoom() {
    director.loadScene(EPokerScene.SelectRoomLobby);
  }
}
