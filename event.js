import { player } from "./game.js";

export function handleKeyDown(event) {
  if (event.repeat) return;

  if (event.key == "a") {
    player.left = true;
  } else if (event.key == "l") {
    player.right = true;
  }
}

export function handleKeyUp(event) {
  if (event.key == "a") {
    player.left = false;
  } else if (event.key == "l") {
    player.right = false;
  }
}
