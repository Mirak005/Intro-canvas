export function detectCollision(ball, gameObject) {
  //Check Collision with the gameObject
  let topOfBall = ball.position.y;
  let bottomOfBall = ball.position.y + ball.size;

  let topOfgameObject = gameObject.position.y;
  let leftSideOfgameObject = gameObject.position.x;
  let rightSideOfgameObject = gameObject.position.x + gameObject.width;

  let bottomOfgameObject = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfgameObject &&
    topOfBall <= bottomOfgameObject &&
    ball.position.x >= leftSideOfgameObject &&
    ball.position.x + ball.size <= rightSideOfgameObject
  ) {
    return true;
  } else return false;
}
