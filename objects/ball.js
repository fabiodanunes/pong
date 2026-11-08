export class Ball
{
    constructor(x, y, color)
    {
        this.radius = 7;
        this.speedX = 2;
        this.speedY = 2;

        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(ctx)
    {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    update(canvas)
    {
        this.move();
        this.checkCanvasBounds(canvas);
    }

    move()
    {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    checkCanvasBounds(canvas)
    {
        if(this.y < this.radius) this.speedY = -this.speedY;
        if(this.y > canvas.height - this.radius) this.speedY = -this.speedY;

        if(this.x < this.radius) this.speedX = -this.speedX;
        if(this.x > canvas.width - this.radius) this.speedX = -this.speedX;
    }
}