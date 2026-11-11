import { Player } from "./objects/player.js";
import { Ball } from "./objects/ball.js";
import { GameManager } from "./gameManager.js";
import { Scoreboard } from "./objects/scoreboard.js";
import { Announcer } from "./objects/announcer.js";

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
    180,
    "rgb(255 255 255)"
);

const scoreboard = new Scoreboard
(
    players,
    canvasWidth
);

// all game elements
const elements = [scoreboard, player1, player2, ball];

const announcer = new Announcer
(
    canvasWidth,
    canvasHeight
);

const gameManager = new GameManager
(
    players, 
    ball,
    announcer
);

document.addEventListener("keydown", (event) =>
{
    players.forEach(player =>
    {
        if(event.code === player.upKey)
        {
            event.preventDefault();
            player.isMovingUp = true;
        }
        if(event.code === player.downKey)
        {
            event.preventDefault();
            player.isMovingDown = true;
        }
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

window.addEventListener("blur", () =>
{
    players.forEach(player => 
    {
        player.isMovingUp = false;
        player.isMovingDown = false;
    });
});

let lastTime = 0;

function gameLoop(currentTime)
{
    // deltaTime
    const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.03);
    lastTime = currentTime;

    // clear
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // update
    if(gameManager.state === "play")
    {
        players.forEach(player => player.update(canvas, deltaTime));
        ball.update(canvas, deltaTime, players);

        if(ball.isOut(canvas)) gameManager.updateScoreboard();
    }
    else if(gameManager.state === "serve") gameManager.serveTimer(currentTime);

    // draw
    elements.forEach(element => element.draw(ctx));

    if(gameManager.state === "serve") announcer.draw(ctx, gameManager.serveTimeLeft, "rgb(255 255 255)");

    // recall
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);