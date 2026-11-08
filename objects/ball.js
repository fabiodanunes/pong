export class Ball
{
    constructor(x, y, radius, color, velocityX, velocityY)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
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
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
}