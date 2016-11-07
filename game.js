var canvas 	= document.getElementById("canvas"), 
	ctx 	= canvas.getContext("2d");

var tableRad = 35;

function tables_draw(x, y) {
	ctx.beginPath(); 
	ctx.arc(x, y, tableRad, 0, Math.PI*2); 
	ctx.fillStyle = "red"; 
	ctx.fill();
	ctx.closePath;
} 

function player_draw() {
	ctx.beginPath(); 
	ctx.rect(10, 10, 30, 30);
	ctx.fillStyle = "#0095DD"; 
	ctx.fill();
	ctx.closePath();
}

//fill board with tables: 
tables_draw(70, 100);
tables_draw(200, 180);
tables_draw(300, 260);
tables_draw(100, 280);
tables_draw(260, 70);
tables_draw(388, 170);
tables_draw(410, 50);
player_draw();