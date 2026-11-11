export class Announcer
{
    constructor(canvasWidth, canvasHeight)
    {
        this.x = canvasWidth / 2;
        this.y = canvasHeight / 2;
    }

    draw(ctx, text, color)
    {
        ctx.font = "100px Silkscreen";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = color;
        ctx.fillText(text, this.x, this.y);
    }
}