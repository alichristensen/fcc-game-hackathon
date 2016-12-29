var canvas 	= document.getElementById("canvas"), 
	ctx 	= canvas.getContext("2d"), 
	count 	= 0, 
	lives 	= 5;

const DX = 2, DY = 2;
var right = false, left = false, up = false, down = false;

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
	], 
	draw: function(x, y) {
		ctx.beginPath(); 
		ctx.arc(x, y, table.radius, 0, Math.PI*2); 
		ctx.fillStyle = "red"; 
		ctx.fill();
		ctx.closePath;
	}
}

var randoms = {
	wall: function() {
		return (Math.floor(Math.random() *4) + 1);
	}, 
	bird_x: function() {
		return (Math.floor(Math.random() * (460)) + 10);
	}, 
	bird_y: function() {
		return (Math.floor(Math.random() * (360)) + 10);
	}
}

console.log(table);

var player = {
	x: canvas.width/2, 
	y: canvas.height/2, 
	width: 30, 
	height: 30, 
	draw: function() {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = "#0095DD"; 
		ctx.fill();
		ctx.closePath();
	}
}

class Bird {
	constructor() {
		this.radius = 10;
		if (randoms.wall() == 1) {
			this.x = randoms.bird_x(); 
			this.y = this.radius;
			console.log("1");
		} else if (randoms.wall() == 2) {
			this.x = canvas.width - this.radius;
			this.y = randoms.bird_y();
			console.log("2");
		} else if (randoms.wall() == 3) {
			this.x = randoms.bird_x();
			this.y = canvas.height - this.radius;
			console.log("3");
		} else if (randoms.wall() == 4) {
			this.x = this.radius;
			this.y = randoms.bird_y();
			console.log("4");
		}
	}
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2); 
 		ctx.fillStyle = "black"; 
 		ctx.fill();
 		ctx.closePath;
	}
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

button.addEventListener("click", game_start, false);

function wall_generator() {
	return Math.floor(Math.random() *4) + 1;
}

// function tables_draw(x, y) {
// 	ctx.beginPath(); 
// 	ctx.arc(x, y, table.radius, 0, Math.PI*2); 
// 	ctx.fillStyle = "red"; 
// 	ctx.fill();
// 	ctx.closePath;
// } 

score_draw = function() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Lives Remaining: " + (lives-count), 10, 560);
}

var bird = new Bird;
console.log(bird);

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	table.coords.forEach(function(i) {
		table.draw(i[0], i[1]);
	})

	player.draw();
	bird.draw();
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