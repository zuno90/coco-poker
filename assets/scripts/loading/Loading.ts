import { _decorator, Component, director, ProgressBar, RichText } from "cc";

const { ccclass, property } = _decorator;

@ccclass("Loading")
export class Loading extends Component {
  @property(ProgressBar) public progressBar: ProgressBar;
  @property(RichText) public percentage: RichText;

  public onLoad() {}

  public start() {}

  public update(deltaTime: number) {
    if (this.progressBar.progress >= 1) director.loadScene("HomeLobby");

    this.progressBar.progress += deltaTime * 0.2;
    this.percentage.string = `${Math.ceil(
      this.progressBar.progress < 1 ? this.progressBar.progress * 100 : 100
    )} %`;
  }
}
