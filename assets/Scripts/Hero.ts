import { _decorator, Component, Node, Vec3, Animation } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Hero")
export class Hero extends Component {
  public heroAnimation: Animation = null;
  public heroLocation: Vec3;

  onLoad() {
    console.log("ol");

    // this.heroAnimation = this.node.getComponent(Animation);
    // this.heroAnimation.play("HeroRun");
  }
}
