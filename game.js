function draw() 
{
    const canvas = document.getElementById("pongCanvas");
    const ctx = canvas.getContext("2d");
    const canvasHeight = canvas.height;
    const canvasWidth = canvas.width;

    const playersHeight = 100;
    const playersWidth = 10;
    const playersMargin = 20;

    const ballDiameter = 7;

    // player 1
    const player1InitialX = playersMargin;
    const player1InitialY = (canvasHeight / 2) - (playersHeight / 2);

    ctx.fillStyle = "rgb(200 0 0)";
    ctx.fillRect(player1InitialX, player1InitialY, playersWidth, playersHeight);

    // player 2
    const player2InitialX = canvasWidth - playersMargin - playersWidth;
    const player2InitialY = (canvasHeight / 2) - (playersHeight / 2);

    ctx.fillStyle = "rgb(0 0 200)";
    ctx.fillRect(player2InitialX, player2InitialY, playersWidth, playersHeight);

    // ball
    ctx.fillStyle = "rgb(255 255 255)";
    ctx.beginPath()
    ctx.arc(canvasWidth / 2, canvasHeight / 2, ballDiameter, 0, Math.PI * 2);
    ctx.fill();
}

draw();