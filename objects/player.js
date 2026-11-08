export class Player
{
    constructor(x, y, width, height, color, velocityY) 
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.velocityY = velocityY;
    }

    draw(ctx) 
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update()
    {
        this.y += this.velocityY;
    }
}