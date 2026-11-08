export class Ball
{
    constructor(x, y, radius, color, speedX, speedY)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw(ctx)
    {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    update()
    {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}