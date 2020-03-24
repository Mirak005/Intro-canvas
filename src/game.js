import Paddle from "./paddle.js";
import InputHandler from "./input";
import Ball from "./ball";
import Brick from "./brick"

import {level1 , buildLevel  } from "./levels"

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    let bricks = buildLevel(this , level1)
   

    this.gameObject = [this.ball, this.paddle , ...bricks];

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObject.forEach(object => object.update(deltaTime));

    this.gameObject = this.gameObject.filter(object => !object.markForDeletion)
  }
  draw(ctx) {
    this.gameObject.forEach(object => object.draw(ctx));
  }
}
