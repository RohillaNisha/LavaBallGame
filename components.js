export class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class Velocity {
  constructor(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }
}

export function randomNumberGeneration(min, max, fraction) {
  if (fraction) {
    return Math.random() * (max - min) + min;
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
