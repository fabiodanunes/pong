import { Player } from "./objects/player.js";
import { Ball } from "./objects/ball.js";
import { GameManager } from "./gameManager.js";
import { Scoreboard } from "./objects/scoreboard.js";

const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const playerWidth = 10;
const playerHeight = 100;
const playerMargin = 50;

// player 1
const player1 = new Player
(
    playerMargin,
    (canvasHeight - playerHeight) / 2,
    playerWidth,
    playerHeight,
    "rgb(200 0 0)",
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
    3,
    "rgb(255 255 255)"
);

// all game elements
const elements = [player1, player2, ball];

const gameManager = new GameManager
(
    players, 
    ball
);

const scoreboard = new Scoreboard
(
    players,
    canvasWidth
);

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
    elements.forEach(element => element.update(canvas));

    ball.bounceFromPlayers(players);
    
    if(ball.isOut(canvas)) gameManager.updateScoreboard();

    // draw
    scoreboard.draw(ctx);

    elements.forEach(element => element.draw(ctx));

    // recall
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);