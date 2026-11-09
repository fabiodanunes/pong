export class Player
{
    constructor(initialX, initialY, width, height, color, upKey, downKey) 
    {   
        this.initialX = initialX;
        this.initialY = initialY;
        this.width = width;
        this.height = height;
        this.color = color;
        this.upKey = upKey;
        this.downKey = downKey;
        this.isMovingUp = false;
        this.isMovingDown = false;

        this.x = this.initialX;
        this.y = this.initialY;
        this.speedY = 2;
        this.score = 0;
    }

    draw(ctx) 
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(canvas)
    {
        this.move();
        this.checkBounds(canvas);
    }

    move()
    {
        this.y += (this.isMovingUp ? -this.speedY : 0) + (this.isMovingDown ? this.speedY : 0);
    }

    checkBounds(canvas)
    {
        if(this.y < 0) this.y = 0;
        if(this.y + this.height > canvas.height) this.y = canvas.height - this.height;
    }

    resetPosition()
    {
        this.x = this.initialX;
        this.y = this.initialY;
    }

    addPoint()
    {
        this.score++;
    }
}