import {
  _decorator,
  CCInteger,
  Component,
  director,
  EventKeyboard,
  Input,
  input,
  KeyCode,
  Node,
} from "cc";
const { ccclass, property } = _decorator;
import { Hero } from "./Hero";
import { Background } from "./Background";

@ccclass("GameCrl")
export class GameCrl extends Component {
  @property({
    type: CCInteger,
  })
  public speed: number = 300;

  @property({
    type: Hero,
  })
  public hero: Hero;

  @property({
    type: Background,
    tooltip: "this is background",
  })
  public background: Background;

  onLoad() {
    console.log("ol");

    // this.initListener();
    // // director.pause();
  }

  initListener() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
  }

  onKeyDown(event: EventKeyboard) {
    console.log(event.keyCode);
    switch (event.keyCode) {
      case KeyCode.KEY_A:
        this.gameOver();
        break;

      case KeyCode.KEY_B:
        this.startGame();
        break;
    }
  }

  startGame() {
    director.resume();
  }
  gameOver() {
    director.pause();
  }
}
