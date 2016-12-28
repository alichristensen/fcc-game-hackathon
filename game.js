var canvas 	= document.getElementById("canvas"), 
	ctx 	= canvas.getContext("2d"), 
	count 	= 0, 
	lives 	= 5;

var button = document.getElementById("startButton");

var table = {
	radius: 45, 
	coords: [
		[100, 130], 
		[150, 450], 
		[300, 150], 
		[290, 310], 
		[500, 130], 
		[500, 430] 
	]
}

console.log(table);

var right = false, left = false, up = false, down = false;

var player = {
	x: canvas.width/2, 
	y: canvas.height/2, 
	width: 30, 
	height: 30
}

var birdRad = 10, 
	dx 		= 2, 
	dy 		= 2;
var birdX;
var birdY;


//randomize which wall the "bird" starts from
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

button.addEventListener("click", game_start, false);

function wall_generator() {
	return Math.floor(Math.random() *4) + 1;
}

function tables_draw(x, y) {
	ctx.beginPath(); 
	ctx.arc(x, y, table.radius, 0, Math.PI*2); 
	ctx.fillStyle = "red"; 
	ctx.fill();
	ctx.closePath;
} 

function player_draw(x, y, w, h) {
	ctx.beginPath(); 
	ctx.rect(x, y, w, h);
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

score_draw = function() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Lives Remaining: " + (lives-count), 10, 560);
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	table.coords.forEach(function(i) {
		tables_draw(i[0], i[1]);
	})

	player_draw(player.x, player.y, player.width, player.height);
	bird_draw (birdX, birdY);
	score_draw();

	//move player
	if (right && playerX < canvas.width - playerWidth) {
		if (playerX<=xCoords[0]-tableRad && playerX>=xCoords[0]-tableRad-30 && playerY>=yCoords[0]-tableRad-30 && playerY<=yCoords[0]+tableRad) {
			playerX += 0;
		} else if (playerX<=xCoords[1]-tableRad && playerX>=xCoords[1]-tableRad-30 && playerY>=yCoords[1]-tableRad-30 && playerY<=yCoords[1]+tableRad) {
			playerX += 0;
		} else if (playerX<=xCoords[2]-tableRad && playerX>=xCoords[2]-tableRad-30 && playerY>=yCoords[2]-tableRad-30 && playerY<=yCoords[2]+tableRad) {
			playerX += 0;
		} else if (playerX<=xCoords[3]-tableRad && playerX>=xCoords[3]-tableRad-30 && playerY>=yCoords[3]-tableRad-30 && playerY<=yCoords[3]+tableRad) {
			playerX += 0;
		} else if (playerX<=xCoords[4]-tableRad && playerX>=xCoords[4]-tableRad-30 && playerY>=yCoords[4]-tableRad-30 && playerY<=yCoords[4]+tableRad) {
			playerX += 0;
		} else if(playerX<=xCoords[5]-tableRad && playerX>=xCoords[5]-tableRad-30 && playerY>=yCoords[5]-tableRad-30 && playerY<=yCoords[5]+tableRad) {
			playerX += 0;
		} else {
			playerX += 2;	
		}
	} else if (left && playerX > 0) {
		if (playerX>=xCoords[0]+tableRad && playerX<=xCoords[0]+tableRad+10 && playerY>=yCoords[0]-tableRad && playerY<=yCoords[0]+tableRad) {
			playerX += 0;
		} else if (playerX>=xCoords[1]+tableRad && playerX<=xCoords[1]+tableRad+10 && playerY>=yCoords[1]-tableRad-30 && playerY<=yCoords[1]+tableRad) {
			playerX += 0;
		} else if (playerX>=xCoords[2]+tableRad && playerX<=xCoords[2]+tableRad+10 && playerY>=yCoords[2]-tableRad-30 && playerY<=yCoords[2]+tableRad) {
			playerX += 0;
		} else if (playerX>=xCoords[3]+tableRad && playerX<=xCoords[3]+tableRad+10 && playerY>=yCoords[3]-tableRad-30 && playerY<=yCoords[3]+tableRad) {
			playerX += 0;
		} else if(playerX>=xCoords[4]+tableRad && playerX<=xCoords[4]+tableRad+10 && playerY>=yCoords[4]-tableRad-30 && playerY<=yCoords[4]+tableRad) {
			playerX += 0;
		} else if(playerX>=xCoords[5]+tableRad && playerX<=xCoords[5]+tableRad+10 && playerY>=yCoords[5]-tableRad-30 && playerY<=yCoords[5]+tableRad) {
			playerX += 0;
		} else {
			playerX -= 2;
		}
	} else if (up && playerY > 0) {
		if (playerX>=xCoords[0]-tableRad-30 && playerX<=xCoords[0]+tableRad && playerY>=yCoords[0]+tableRad && playerY<=yCoords[0]+tableRad+3) {
			playerY += 0;
		} else if (playerX>=xCoords[1]-tableRad-30 && playerX<=xCoords[1]+tableRad && playerY>=yCoords[1]+tableRad && playerY<=yCoords[1]+tableRad+3) {
			playerY += 0;	
		} else if (playerX>=xCoords[2]-tableRad-30 && playerX<=xCoords[2]+tableRad && playerY>=yCoords[2]+tableRad && playerY<=yCoords[2]+tableRad+3) {
			playerY += 0;
		} else if (playerX>=xCoords[3]-tableRad-30 && playerX<=xCoords[3]+tableRad && playerY>=yCoords[3]+tableRad && playerY<=yCoords[3]+tableRad+3) {
			playerY += 0;
		} else if (playerX>=xCoords[4]-tableRad-30 && playerX<=xCoords[4]+tableRad && playerY>=yCoords[4]+tableRad && playerY<=yCoords[4]+tableRad+3) {
			playerY += 0;
		} else if (playerX>=xCoords[5]-tableRad-30 && playerX<=xCoords[5]+tableRad && playerY>=yCoords[5]+tableRad && playerY<=yCoords[5]+tableRad+3) {
			playerY += 0;
		} else {
			playerY -= 2;
		}
	} else if (down && playerY < canvas.height - playerHeight) {
		if (playerX>=xCoords[0]-tableRad-30 && playerX<=xCoords[0]+tableRad && playerY>=yCoords[0]-tableRad-30 && playerY<=yCoords[0]-tableRad) {
			playerY+=0;
		} else if (playerX>=xCoords[1]-tableRad-30 && playerX<=xCoords[1]+tableRad && playerY>=yCoords[1]-tableRad-30 && playerY<=yCoords[1]-tableRad) {
			playerY += 0;
		} else if (playerX>=xCoords[2]-tableRad-30 && playerX<=xCoords[2]+tableRad && playerY>=yCoords[2]-tableRad-30 && playerY<=yCoords[2]-tableRad) {
			playerY +=0;
		} else if (playerX>=xCoords[3]-tableRad-30 && playerX<=xCoords[3]+tableRad && playerY>=yCoords[3]-tableRad-30 && playerY<=yCoords[3]-tableRad) {
			playerY += 0;
		} else if (playerX>=xCoords[4]-tableRad-30 && playerX<=xCoords[4]+tableRad && playerY>=yCoords[4]-tableRad-30 && playerY<=yCoords[4]-tableRad) {
			playerY += 0;
		} else if (playerX>=xCoords[5]-tableRad-30 && playerX<=xCoords[5]+tableRad && playerY>=yCoords[5]-tableRad-30 && playerY<=yCoords[5]-tableRad) {
			playerY += 0;
		} else {
			playerY += 2;
		}
	}

	if ( birdX + dx > canvas.width - birdRad || birdX + dx < birdRad) {
		dx = -dx;
	} else if (birdX+dx>=xCoords[0]-tableRad-birdRad && birdX+dx<=xCoords[0]+tableRad+birdRad && birdY>=yCoords[0]-tableRad && birdY<=yCoords[0]+tableRad) {
		dx = -dx;
		count++;
	} else if (birdX+dx>=xCoords[1]-tableRad-birdRad && birdX+dx<=xCoords[1]+tableRad+birdRad && birdY>=yCoords[1]-tableRad && birdY<=yCoords[1]+tableRad) {
		dx = -dx;
		count++;
	} else if (birdX+dx>=xCoords[2]-tableRad-birdRad && birdX+dx<=xCoords[2]+tableRad+birdRad && birdY>=yCoords[2]-tableRad && birdY<=yCoords[2]+tableRad) {
		dx = -dx;
		count++;
	} else if (birdX+dx>=xCoords[3]-tableRad-birdRad && birdX+dx<=xCoords[3]+tableRad+birdRad && birdY>=yCoords[3]-tableRad && birdY<=yCoords[3]+tableRad) {
		dx = -dx;
		count++;
	} else if (birdX+dx>=xCoords[4]-tableRad-birdRad && birdX+dx<=xCoords[4]+tableRad+birdRad && birdY>=yCoords[4]-tableRad && birdY<=yCoords[4]+tableRad) {
		dx = -dx;
		count++;
	} else if (birdX+dx>=xCoords[5]-tableRad-birdRad && birdX+dx<=xCoords[5]+tableRad+birdRad && birdY>=yCoords[5]-tableRad && birdY<=yCoords[5]+tableRad) {
		dx = -dx;
		count++;
	} else if (birdX>=playerX && birdX<=playerX+playerWidth && birdY>=playerY && birdY<=playerY+playerWidth) {
		alert("YOU WIN!!!!!!"); 
		document.location.reload();
	} else {
		birdX += dx;
	}

	if (birdY + dy > canvas.height - birdRad) {
		dy = -dy;
	} else if (birdY + dy < 0) {
		dy = -dy;
	} else if (birdY+dy>=yCoords[0]-tableRad-birdRad && birdY+dy<=yCoords[0]+tableRad+birdRad && birdX>=xCoords[0]-tableRad && birdX<=xCoords[0]+tableRad) {
		dy = -dy;
		count++;
	} else if (birdY+dy>=yCoords[1]-tableRad-birdRad && birdY+dy<=yCoords[1]+tableRad+birdRad && birdX>=xCoords[1]-tableRad && birdX<=xCoords[1]+tableRad) {
		dy = -dy;
		count++;
	} else if (birdY+dy>=yCoords[2]-tableRad-birdRad && birdY+dy<=yCoords[2]+tableRad+birdRad && birdX>=xCoords[2]-tableRad && birdX<=xCoords[2]+tableRad) {
		dy = -dy;
		count++;
	} else if (birdY+dy>=yCoords[3]-tableRad-birdRad && birdY+dy<=yCoords[3]+tableRad+birdRad && birdX>=xCoords[3]-tableRad && birdX<=xCoords[3]+tableRad) {
		dy = -dy;
		count++;
	} else if (birdY+dy>=yCoords[4]-tableRad-birdRad && birdY+dy<=yCoords[4]+tableRad+birdRad && birdX>=xCoords[4]-tableRad && birdX<=xCoords[4]+tableRad) {
		dy = -dy;
		count++;
	} else if (birdY+dy>=yCoords[5]-tableRad-birdRad && birdY+dy<=yCoords[5]+tableRad+birdRad && birdX>=xCoords[5]-tableRad && birdX<=xCoords[5]+tableRad) {
		dy = -dy;
		count++;
	} else {
		birdY += dy
	}






	//keep track of score
	if (count==lives) {
		alert("GAME OVER!!!!!");
		document.location.reload();
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

function game_start() {
	setInterval(draw, 7);
}

draw();