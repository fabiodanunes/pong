export class GameManager
{
    constructor(players, ball)
    {
        this.players = players;
        this.ball = ball;
    }

    resetGame()
    {
        this.players.forEach(player => player.resetPosition());
        this.ball.resetPosition();
    }

    updateScoreboard()
    {
        if(this.ball.speedX > 0) this.players[0].addPoint();
        else this.players[1].addPoint();

        this.resetGame();
    }
}