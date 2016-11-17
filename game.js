var canvas 	= document.getElementById("canvas"), 
	ctx 	= canvas.getContext("2d");

var tableRad = 35, 
	xCoords  = [70, 200, 300, 290, 460, 500], 
	yCoords  = [130, 400, 150, 310, 180, 440];

var right 	= false, 
	left 	= false, 
	up 		= false, 
	down 	= false;

var playerX 	 = canvas.width/2,
	playerY 	 = canvas.height/2, 
	playerWidth  = 30, 
	playerHeight = 30;

var birdRad = 10, 
	dx 		= 1, 
	dy 		= 1;
var birdX;
var birdY;

var wall = wall_generator();
console.log(wall);
if (wall == 1) {
	birdX = Math.random() * (460) + 10;
	birdY = birdRad;
} else if (wall == 2) {
	birdX = canvas.width-birdRad;
	birdY = Math.random() * (360) + 10;
} else if (wall == 3) {
	birdX = Math.random() * (460) + 10;
	birdY = canvas.height-birdRad;
} else if (wall == 4) {
	birdX = birdRad;
	birdY = Math.random() * (360) + 10;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function wall_generator() {
	return Math.floor(Math.random() *4) + 1;
}

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

function bird_draw() {
	ctx.beginPath();
	ctx.arc(birdX, birdY, birdRad, 0, Math.PI*2); 
	ctx.fillStyle = "black"; 
	ctx.fill();
	ctx.closePath;
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//draw tables
	for (var i=0; i<xCoords.length; i++) {
		tables_draw(xCoords[i], yCoords[i]);
	}

	player_draw(playerX, playerY);

	bird_draw (birdX, birdY);

	//move player
	if (right && playerX < canvas.width - playerWidth) {
		if (playerX<=xCoords[0]-tableRad && playerX>=xCoords[0]-tableRad-30 && playerY>=yCoords[0]-tableRad && playerY<=yCoords[0]+tableRad) {
			playerX += 0;
		} else if (playerX<=xCoords[1]-tableRad && playerX>=xCoords[1]-tableRad-30 && playerY>=yCoords[1]-tableRad && playerY<=yCoords[1]+tableRad) {
			playerX += 0;
		} else if (playerX<=xCoords[2]-tableRad && playerX>=xCoords[2]-tableRad-30 && playerY>=yCoords[2]-tableRad && playerY<=yCoords[2]+tableRad) {
			playerX += 0;
		} else if (playerX<=xCoords[3]-tableRad && playerX>=xCoords[3]-tableRad-30 && playerY>=yCoords[3]-tableRad && playerY<=yCoords[3]+tableRad) {
			playerX += 0;
		} else if (playerX<=xCoords[4]-tableRad && playerX>=xCoords[4]-tableRad-30 && playerY>=yCoords[4]-tableRad && playerY<=yCoords[4]+tableRad) {
			playerX += 0;
		} else if(playerX<=xCoords[5]-tableRad && playerX>=xCoords[5]-tableRad-30 && playerY>=yCoords[5]-tableRad && playerY<=yCoords[5]+tableRad) {
			playerX += 0;
		} else {
			playerX += 3;	
		}
	} else if (left && playerX > 0) {
		if (playerX>=xCoords[0]+tableRad && playerX<=xCoords[0]+tableRad+10 && playerY>=yCoords[0]-tableRad && playerY<=yCoords[0]+tableRad) {
			playerX += 0;
		} else if (playerX>=xCoords[1]+tableRad && playerX<=xCoords[1]+tableRad+10 && playerY>=yCoords[1]-tableRad && playerY<=yCoords[1]+tableRad) {
			playerX += 0;
		} else if (playerX>=xCoords[2]+tableRad && playerX<=xCoords[2]+tableRad+10 && playerY>=yCoords[2]-tableRad && playerY<=yCoords[2]+tableRad) {
			playerX += 0;
		} else if (playerX>=xCoords[3]+tableRad && playerX<=xCoords[3]+tableRad+10 && playerY>=yCoords[3]-tableRad && playerY<=yCoords[3]+tableRad) {
			playerX += 0;
		} else if(playerX>=xCoords[4]+tableRad && playerX<=xCoords[4]+tableRad+10 && playerY>=yCoords[4]-tableRad && playerY<=yCoords[4]+tableRad) {
			playerX += 0;
		} else if(playerX>=xCoords[5]+tableRad && playerX<=xCoords[5]+tableRad+10 && playerY>=yCoords[5]-tableRad && playerY<=yCoords[5]+tableRad) {
			playerX += 0;
		} else {
			playerX -= 3;
		}
	} else if (up && playerY > 0) {
		if (playerX>=xCoords[0]-tableRad && playerX<=xCoords[0]+tableRad && playerY>=yCoords[0]+tableRad && playerY<=yCoords[0]+tableRad+3) {
			playerY += 0;
		} else if (playerX>=xCoords[1]-tableRad && playerX<=xCoords[1]+tableRad && playerY>=yCoords[1]+tableRad && playerY<=yCoords[1]+tableRad+3) {
			playerY += 0;	
		} else if (playerX>=xCoords[2]-tableRad && playerX<=xCoords[2]+tableRad && playerY>=yCoords[2]+tableRad && playerY<=yCoords[2]+tableRad+3) {
			playerY += 0;
		} else if (playerX>=xCoords[3]-tableRad && playerX<=xCoords[3]+tableRad && playerY>=yCoords[3]+tableRad && playerY<=yCoords[3]+tableRad+3) {
			playerY += 0;
		} else if (playerX>=xCoords[4]-tableRad && playerX<=xCoords[4]+tableRad && playerY>=yCoords[4]+tableRad && playerY<=yCoords[4]+tableRad+3) {
			playerY += 0;
		} else if (playerX>=xCoords[5]-tableRad && playerX<=xCoords[5]+tableRad && playerY>=yCoords[5]+tableRad && playerY<=yCoords[5]+tableRad+3) {
			playerY += 0;
		} else {
			playerY -= 3;
		}
	} else if (down && playerY < canvas.height - playerHeight) {
		if (playerX>=xCoords[0]-tableRad && playerX<=xCoords[0]+tableRad && playerY>=yCoords[0]-tableRad-30 && playerY<=yCoords[0]-tableRad) {
			playerY+=0;
		} else if (playerX>=xCoords[1]-tableRad && playerX<=xCoords[1]+tableRad && playerY>=yCoords[1]-tableRad-30 && playerY<=yCoords[1]-tableRad) {
			playerY += 0;
		} else if (playerX>=xCoords[2]-tableRad && playerX<=xCoords[2]+tableRad && playerY>=yCoords[2]-tableRad-30 && playerY<=yCoords[2]-tableRad) {
			playerY +=0;
		} else if (playerX>=xCoords[3]-tableRad && playerX<=xCoords[3]+tableRad && playerY>=yCoords[3]-tableRad-30 && playerY<=yCoords[3]-tableRad) {
			playerY += 0;
		} else if (playerX>=xCoords[4]-tableRad && playerX<=xCoords[4]+tableRad && playerY>=yCoords[4]-tableRad-30 && playerY<=yCoords[4]-tableRad) {
			playerY += 0;
		} else if (playerX>=xCoords[5]-tableRad && playerX<=xCoords[5]+tableRad && playerY>=yCoords[5]-tableRad-30 && playerY<=yCoords[5]-tableRad) {
			playerY += 0;
		} else {
			playerY += 3;
		}
	}

	//move bird
	if ( birdX + dx > canvas.width - birdRad || birdX + dx < birdRad) {
		dx = -dx;
	} else {
		if (birdX>=playerX && birdX<=playerX+playerWidth && birdY>=playerY && birdY<=playerY+playerWidth) {
			alert("YOU WIN");
			document.location.reload();
		} else if (birdX>=xCoords[0]-tableRad && birdX<=xCoords[0]+tableRad && birdY<=yCoords[0]+tableRad && birdY>=yCoords[0]-tableRad) {
			alert("YOU LOSE");
			document.location.reload();
		} else if (birdX>=xCoords[1]-tableRad && birdX<=xCoords[1]+tableRad && birdY<=yCoords[1]+tableRad && birdY>=yCoords[1]-tableRad) {
			alert("YOU LOSE");
			document.location.reload();
		} else if(birdX>=xCoords[2]-tableRad && birdX<=xCoords[2]+tableRad && birdY<=yCoords[2]+tableRad && birdY>=yCoords[2]-tableRad) {
			alert("YOU LOSE");
			document.location.reload();
		} else if(birdX>=xCoords[3]-tableRad && birdX<=xCoords[3]+tableRad && birdY<=yCoords[3]+tableRad && birdY>=yCoords[3]-tableRad) {
			alert("YOU LOSE");
			document.location.reload();
		} else if (birdX>=xCoords[4]-tableRad && birdX<=xCoords[4]+tableRad && birdY<=yCoords[4]+tableRad && birdY>=yCoords[4]-tableRad) {
			alert("YOU LOSE");
			document.location.reload();
		} else if (birdX>=xCoords[5]-tableRad && birdX<=xCoords[5]+tableRad && birdY<=yCoords[5]+tableRad && birdY>=yCoords[5]-tableRad) {
			alert("YOU LOSE");
			document.location.reload();
		} else {
			birdX += dx;
		}
	}
	if (birdY + dy > canvas.height - birdRad) {
		dy = -dy;
	} else if (birdY + dy < 0) {
		dy = -dy;
	} else {
		birdY += dy;
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

setInterval(draw, 20);