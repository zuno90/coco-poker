import { _decorator, Component, sys } from "cc";

const { ccclass, property } = _decorator;

@ccclass("Config")
export class Config extends Component {
  public static value: string;

  public static async getPlayer() {
    const accessToken = sys.localStorage.getItem("accessToken");
    try {
      const reqPlayer = await fetch("https://cms.dadsnetwork.net/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const res = await reqPlayer.json();
      if (!res.success) throw new Error(res.message);
      return res;
    } catch (err) {
      console.error(err);
    }
  }
}
