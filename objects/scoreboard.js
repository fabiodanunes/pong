export class Scoreboard
{
    constructor(players, canvasWidth)
    {
        this.players = players;
        this.canvasWidth = canvasWidth;

        this.y = 50;
    }

    draw(ctx)
    {
        this.players.forEach((player, i) =>
        {
            let position = i === 0 ? 0.25 : 0.75;

            this.drawPlayerScore(ctx, player, position * this.canvasWidth);
        });
    }

    drawPlayerScore(ctx, player, x)
    {
        ctx.font = "45px Silkscreen";
        ctx.textAlign = "center";
        ctx.fillStyle = player.color;
        ctx.fillText(player.score, x, this.y);
    }
}