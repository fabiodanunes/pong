import { Player } from "./objects/player.js";
import { Ball } from "./objects/ball.js";

const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const playerWidth = 10;
const playerHeight = 100;
const playerMargin = 20;
const playerVelocityY = 2;

const ballRadius = 7;
const ballVelocityX = 2;
const ballVelocityY = 0;

// player 1
const player1 = new Player
(
    playerMargin,
    (canvasHeight - playerHeight) / 2,
    playerWidth,
    playerHeight,
    "rgb(200 0 0)",
    playerVelocityY
);

// player 2
const player2 = new Player
(
    canvasWidth - playerWidth - playerMargin,
    (canvasHeight - playerHeight) / 2,
    playerWidth,
    playerHeight,
    "rgb(0 0 200)",
    playerVelocityY
);

// ball
const ball = new Ball
(
    canvasWidth / 2,
    canvasHeight / 2,
    ballRadius,
    "rgb(255 255 255)",
    ballVelocityX,
    ballVelocityY
);

function GameLoop()
{
    // clear
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // update
    // ball.update();
    
    // draw
    ball.draw(ctx);

    // recall
    requestAnimationFrame(GameLoop);
}

requestAnimationFrame(GameLoop);