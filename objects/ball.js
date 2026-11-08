export class Ball
{
    constructor(x, y, color)
    {
        this.radius = 7;
        this.speedX = -2;
        this.speedY = 2;
        this.maxSpeed = 20; // TODO: implement max speed when colliding with players
        this.playerColliding = null;

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
        this.bounceFromWalls(canvas);
    }

    move()
    {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    bounceFromWalls(canvas)
    {
        if(this.y < this.radius)
        {
            this.y = this.radius;
            this.speedY = -this.speedY;
        }
        if(this.y > canvas.height - this.radius)
        {
            this.y = canvas.height - this.radius;
            this.speedY = -this.speedY;
        }

        if(this.x < this.radius)
        {
            this.x = this.radius;
            this.speedX = -this.speedX;
        }
        if(this.x > canvas.width - this.radius)
        {
            this.x = canvas.width - this.radius;
            this.speedX = -this.speedX;
        }
    }

    checkPlayersCollision(players)
    {
        players.forEach(player =>
        {
            if(this.x + this.radius > player.x && this.x - this.radius < player.x + player.width &&
               this.y + this.radius > player.y && this.y - this.radius < player.y + player.height)
            {
                this.playerColliding = player;
            }
        });
    }

    bounceFromPlayers()
    {
        this.x = this.playerColliding.x + (this.speedX > 0 ? -this.radius : this.playerColliding.width + this.radius);
        this.speedX = -this.speedX;
        this.playerColliding = null;
    }
}