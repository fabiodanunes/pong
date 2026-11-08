export class Player
{
    constructor(x, y, width, height, color, speedY, upKey, downKey) 
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speedY = speedY;
        this.upKey = upKey;
        this.downKey = downKey;
        this.isMovingUp = false;
        this.isMovingDown = false;
    }

    draw(ctx) 
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update()
    {
        this.y += (this.isMovingUp ? -this.speedY : 0) + (this.isMovingDown ? this.speedY : 0);
    }
}