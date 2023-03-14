import { _decorator, Component } from "cc";
import Colyseus from "db://colyseus-sdk/colyseus.js";

const { ccclass, property } = _decorator;

@ccclass("ColyseusNetwork")
export class ColyseusNetwork extends Component {
  @property public hostname: string = "";
  @property public port: number = null;
  @property public useSSL = false;

  client!: Colyseus.Client;
  room!: Colyseus.Room;

  public start() {
    // Instantiate Colyseus Client
    // connects into (ws|wss)://hostname[:port]
    const endpoint = `${this.useSSL ? "wss" : "ws"}://${this.hostname}${
      this.useSSL ? "" : this.port
    }`;
    this.client = new Colyseus.Client(endpoint);

    // Connect into the room
    // this.connect();
  }

  public async connect() {
    try {
      this.room = await this.client.joinOrCreate("noob", { jwt: "" });

      console.log("joined successfully!");
      console.log("user's sessionId:", this.room.sessionId);

      this.room.onStateChange((state) => {
        console.log("onStateChange: ", state);
      });

      this.room.onLeave((code) => {
        console.log("onLeave:", code);
      });
    } catch (err) {
      console.error(err);
    }
  }
}
