import { detectCollision } from "./collisionDetection"

export default class Ball {
  constructor(game) {
    this.img = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;

    this.position = { x: 350, y: 550 };
    this.speed = { x: 6, y: 6 };

    this.size = 30;
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //Wall on the left or right

    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x *= -1;
    }
    //Wall top or bottom

    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y *= -1;
    }

    //Check Collision with the paddle
    

    if (
    detectCollision(this , this.game.paddle)
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
