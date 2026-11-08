export class Player
{
    constructor(x, y, width, height, color, upKey, downKey) 
    {
        this.speedY = 2;
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
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

    update(canvas)
    {
        this.move();
        this.checkCanvasBounds(canvas);
    }

    move()
    {
        this.y += (this.isMovingUp ? -this.speedY : 0) + (this.isMovingDown ? this.speedY : 0);
    }

    checkCanvasBounds(canvas)
    {
        if(this.y < 0) this.y = 0;
        if(this.y + this.height > canvas.height) this.y = canvas.height - this.height;
    }
}