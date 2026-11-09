export class Ball
{
    constructor(initialX, initialY, initialSpeed, color)
    {
        this.initialX = initialX;
        this.initialY = initialY;
        this.initialSpeed = initialSpeed;
        this.color = color;

        this.x = this.initialX;
        this.y = this.initialY;
        this.radius = 7;
        this.speedX = -this.initialSpeed;
        this.speedY = this.initialSpeed;
        this.speedIncrement = 0.3;
        this.maxSpeed = 20;
        this.maxBounceAngle = Math.PI / 4; // 45 degrees
        this.direction = this.speedX > 0 ? -1 : 1;
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
    }

    checkIfBallIsOut(canvas)
    {
        return this.x < this.radius || this.x > canvas.width - this.radius;
    }

    bounceFromPlayers(players)
    {
        players.forEach(player =>
        {
            if(this.x + this.radius > player.x && this.x - this.radius < player.x + player.width &&
               this.y + this.radius > player.y && this.y - this.radius < player.y + player.height)
            {
                let playerCenterY = player.y + player.height / 2;
                let intersectY = this.y - playerCenterY;

                let normalIntersectY = intersectY / (player.height / 2);
                let clampedIntersectY = Math.max(-1, Math.min(1, normalIntersectY));

                let bounceAngle = clampedIntersectY * this.maxBounceAngle;

                let totalSpeed = Math.min(this.maxSpeed, Math.hypot(this.speedX, this.speedY) + this.speedIncrement);
                
                this.direction = this.direction * -1;

                this.x = player.x + (this.speedX > 0 ? -this.radius : player.width + this.radius);

                this.speedX = this.direction * totalSpeed * Math.cos(bounceAngle);
                this.speedY = totalSpeed * Math.sin(bounceAngle);
            }
        });
    }

    resetPosition()
    {
        this.x = this.initialX;
        this.y = this.initialY;
        this.speedX = -this.initialSpeed;
        this.speedY = this.initialSpeed;
        this.direction = this.direction * -1;
    }
}