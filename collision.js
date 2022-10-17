export function collidePlayerBall(player, lavaBall) {
  let distancex = Math.abs(
    lavaBall.position.x - player.position.x - player.width / 2
  );
  let distancey = Math.abs(
    lavaBall.position.y - player.position.y - player.height / 2
  );

  if (distancex > player.width / 2 + lavaBall.radius) {
    return false;
  }
  if (distancey > player.height / 2 + lavaBall.radius) {
    return false;
  }

  if (distancex <= player.width / 2) {
    return true;
  }
  if (distancey <= player.height / 2) {
    return true;
  }

  let dx = distancex - player.width / 2;
  let dy = distancey - player.height / 2;

  return dx * dx + dy * dy <= lavaBall.radius * lavaBall.radius;
}
