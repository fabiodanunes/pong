export class GameManager
{
    constructor(players, ball, announcer)
    {
        this.players = players;
        this.ball = ball;
        this.announcer = announcer;

        this.state = "serve"; // serve; play; gameOver
        this.serveDelay = 3000;
        this.countdownStart = null;
        this.serveTimeLeft = 0;
        this.winCondition = 1;
        this.winner = null;
    }

    newRound()
    {
        this.players.forEach(player => player.resetPosition());
        this.ball.resetPosition();
    }

    resetGame()
    {
        this.players.forEach(player => player.resetScore());
        this.winner = null;
        this.newRound();
        this.state = "serve";
    }

    updateScoreboard()
    {
        if(this.ball.speedX > 0) this.players[0].addPoint();
        else this.players[1].addPoint();

        if(this.players[0].score >= this.winCondition || this.players[1].score >= this.winCondition)
        {
            this.winner = this.players[0].score >= this.winCondition ? this.players[0] : this.players[1];
            this.state = "gameOver";
        }
        else
        {
            this.newRound();
            this.state = "serve";
        }
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