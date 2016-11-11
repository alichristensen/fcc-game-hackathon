var canvas 	= document.getElementById("canvas"), 
	ctx 	= canvas.getContext("2d");

var tableRad = 35, 
	xCoords  = [70, 200, 300, 100, 260, 388, 410], 
	yCoords  = [100, 180, 260, 280, 70, 170, 50];

var right 	= false, 
	left 	= false, 
	up 		= false, 
	down 	= false;

var playerX 	 = 10,
	playerY 	 = 10, 
	playerWidth  = 30, 
	playerHeight = 30;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function tables_draw(x, y) {
	ctx.beginPath(); 
	ctx.arc(x, y, tableRad, 0, Math.PI*2); 
	ctx.fillStyle = "red"; 
	ctx.fill();
	ctx.closePath;
} 

function player_draw(x, y) {
	ctx.beginPath(); 
	ctx.rect(x, y, playerWidth, playerHeight);
	ctx.fillStyle = "#0095DD"; 
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//draw tables
	for (var i=0; i<xCoords.length; i++) {
		tables_draw(xCoords[i], yCoords[i]);
	}

	player_draw(playerX, playerY);

	//move player
	if (right && playerX < canvas.width - playerWidth) {
		playerX += 7;
	} else if (left && playerX > 0) {
		playerX -= 7;
	} else if (up && playerY > 0) {
		playerY -= 7;
	} else if (down && playerY < canvas.height - playerHeight) {
		playerY += 7;
	}
}

function keyDownHandler(e) {
	if (e.keyCode == 39) {
		right = true;
	} else if (e.keyCode == 37) {
		left = true;
	} else if (e.keyCode == 38) {
		up = true;
	} else if (e.keyCode == 40) {
		down = true;
	}
}

function keyUpHandler(e) {
	if (e.keyCode == 39) {
		right = false;
	} else if (e.keyCode == 37) {
		left = false; 
	} else if (e.keyCode == 38) {
		up = false;
	} else if (e.keyCode == 40) {
		down = false;
	}
}

setInterval(draw, 38);

