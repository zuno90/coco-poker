import { _decorator, Component, director } from "cc";
import { EPokerScene } from "db://assets/__types__/layout.type";

const { ccclass, property } = _decorator;

@ccclass("RoomSelect")
export class RoomSelect extends Component {
  public start() {}

  public update(deltaTime: number) {}

  public handleBackToLobby() {
    director.loadScene(EPokerScene.HomeLobby);
  }
}
