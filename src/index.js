import Game from "./game.js";

//https://www.youtube.com/watch?v=3EMxBkqC4z0  56: 55   continue 



let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDtH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDtH, GAME_HEIGHT);

game.start();

let lasTime = 0;

//images

function gameLoop(timesTamp) {
  let deltaTime = timesTamp - lasTime;
  lasTime = timesTamp;

  ctx.clearRect(0, 0, GAME_WIDtH, GAME_HEIGHT);
  game.draw(ctx);
  game.update(deltaTime);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
