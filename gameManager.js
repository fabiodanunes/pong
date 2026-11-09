export class GameManager
{
    constructor(canvas, players, ball)
    {
        this.canvas = canvas;
        this.players = players;
        this.ball = ball;
    }

    resetGame()
    {
        this.players.forEach(player => player.resetPosition());
        this.ball.resetPosition();
    }
}