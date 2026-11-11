export class GameManager
{
    constructor(players, ball, announcer)
    {
        this.players = players;
        this.ball = ball;
        this.announcer = announcer;

        this.state = "serve";
        this.serveDelay = 3000;
        this.countdownStart = null;
        this.serveTimeLeft = 0;
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
        this.state = "serve";
    }

    serveTimer(currentTime)
    {
        if(this.countdownStart === null) this.countdownStart = currentTime;

        let timeDiff = currentTime - this.countdownStart;

        this.serveTimeLeft = Math.ceil((this.serveDelay - timeDiff) / 1000);

        if(timeDiff >= this.serveDelay)
        {
            this.state = "play";
            this.countdownStart = null;
            this.serveTimeLeft = 0;
        }
    }
}