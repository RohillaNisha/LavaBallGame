import { game } from "./game.js";

export class LavaBalls {
  constructor(position, velocity) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 20;
    this.color = "red";
  }

  drawLavaBalls() {
    game.context.beginPath();
    game.context.fillStyle = this.color;
    game.context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2
    );
    game.context.fill();

    game.context.closePath();
  }

  moveLavaBalls() {
    this.position.x += this.velocity.dx;
    this.position.y += this.velocity.dy;
  }
}
