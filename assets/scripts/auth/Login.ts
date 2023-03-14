import { _decorator, Component } from "cc";
import axios from "axios";

const { ccclass, property } = _decorator;

@ccclass("Login")
export class Login extends Component {
  public start() {}

  public update(deltaTime: number) {}

  public loginGoogle() {}

  public loginFacebook() {}

  public loginApple() {}

  public loginGuest() {
    try {
      console.log(57676);
    } catch (err) {
      console.error(err);
    }
  }
}
