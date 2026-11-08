import { Player } from "./objects/player.js";
import { Ball } from "./objects/ball.js";

const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const playerWidth = 10;
const playerHeight = 100;
const playerMargin = 50;
const playerSpeedY = 2;

const ballRadius = 7;
const ballSpeedX = 2;
const ballSpeedY = 0;

// player 1
const player1 = new Player
(
    playerMargin,
    (canvasHeight - playerHeight) / 2,
    playerWidth,
    playerHeight,
    "rgb(200 0 0)",
    playerSpeedY,
    "KeyW",
    "KeyS"
);

// player 2
const player2 = new Player
(
    canvasWidth - playerWidth - playerMargin,
    (canvasHeight - playerHeight) / 2,
    playerWidth,
    playerHeight,
    "rgb(0 0 200)",
    playerSpeedY,
    "ArrowUp",
    "ArrowDown"
);

// all players
const players = [player1, player2];

// ball
const ball = new Ball
(
    canvasWidth / 2,
    canvasHeight / 2,
    ballRadius,
    "rgb(255 255 255)",
    ballSpeedX,
    ballSpeedY
);

// all game elements
const elements = [player1, player2, ball];

document.addEventListener("keydown", (event) =>
{
    players.forEach(player =>
    {
        if(event.code === player.upKey) player.isMovingUp = true;
        if(event.code === player.downKey) player.isMovingDown = true;
    });
});

document.addEventListener("keyup", (event) =>
{
    players.forEach(player =>
    {
        if(event.code === player.upKey) player.isMovingUp = false;
        if(event.code === player.downKey) player.isMovingDown = false;
    });
});

function gameLoop()
{
    // clear
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // update
    elements.forEach(element => {
        element.update();
        element.draw(ctx);
    });

    // recall
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);