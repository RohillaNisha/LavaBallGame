import { Position, Velocity } from "./components.js";
import { Player } from "./player.js";
import { LavaBalls } from "./lavaBalls.js";
import { randomNumberGeneration } from "./components.js";
import { collidePlayerBall } from "./collision.js";
import { handleKeyDown, handleKeyUp } from "./event.js";

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let lavaBalls = [];
let deltaTime = 0;
let lastTime = Date.now();
let tickCount = 0;

export class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
  }
}

export const game = new Game(canvas, context);

export let player = new Player(
  new Position(game.canvas.width / 2, game.canvas.height - 10)
);

window.addEventListener("keypress", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);

function tickLavaBalls() {
  for (let i = 0; i < lavaBalls.length; i++) {
    let lavaBall = lavaBalls[i];
    lavaBall.drawLavaBalls();
    lavaBall.moveLavaBalls();

    let isCollide = collidePlayerBall(player, lavaBall);
    if (isCollide) {
      location.reload();
    }
  }
}

function tick() {
  let currentTime = Date.now();
  deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;
  tickCount++;

  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  player.drawPlayer();

  player.movePlayer();

  if (tickCount % 50 === 0) {
    let lavaBall1 = new LavaBalls(
      new Position(randomNumberGeneration(0, canvas.width), 20),
      new Velocity(0, 10)
    );
    lavaBalls.push(lavaBall1);
  }
  tickLavaBalls();

  requestAnimationFrame(tick);
}

tick();
