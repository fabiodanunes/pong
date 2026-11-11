export class GameManager
{
    constructor(players, ball)
    {
        this.players = players;
        this.ball = ball;

        this.state = "serve";
        this.startDelay = 3000;
        this.startCountdown = true;
        this.countdownStart = 0;
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

    countdownTimer(currentTime)
    {
        if(this.startCountdown)
        {
            this.countdownStart = currentTime;
            this.startCountdown = false;
        }

        let timeDiff = currentTime - this.countdownStart;

        if(timeDiff >= this.startDelay)
        {
            this.state = "play";
            this.startCountdown = true;
            this.countdownStart = 0;
        }
    }
}