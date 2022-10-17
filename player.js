import { game } from "./game.js";

export class Player {
  constructor(position) {
    this.position = position;
    this.color = "purple";
    this.width = 100;
    this.height = 10;
    this.right = false;
    this.left = false;
  }

  drawPlayer() {
    game.context.fillStyle = this.color;
    game.context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  movePlayer() {
    if (this.left) {
      console.log("left pressed");
      this.position.x -= 20;
    } else if (this.right) {
      console.log("right pressed");

      this.position.x += 20;
    }

    if (this.position.x > canvas.width) {
      this.position.x = canvas.width - this.width;
    } else if (this.position.x < 0) {
      this.position.x = 0;
    }
  }
}
