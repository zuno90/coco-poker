import { _decorator, Component, Node } from "cc";
import axios from "axios";

const { ccclass, property } = _decorator;

@ccclass("Login")
export class Login extends Component {
  private state: any;

  start() {}
  async get(){
    const a = await fetch('https://sv-user.dadsnetwork.co/api/auth/google/url?redirect_url=https://dads-user.vercel.app')
    console.log( await a.json(),"checlk s");
  }
  update(deltaTime: number) {}
}
