var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var char_x = 32;
var char_y = 32;
var img_char = new Image();
img_char.src = 'src/char.png';
var snd_vic = new Audio('src/victory.mp3');
var level = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
img_char.onload = function(){
	draw();
};
document.onkeypress = function(event){
	switch(event.keyCode){
		case 119: char_y-=32;snd_vic.play();break;
		case 97: char_x-=32;break;
		case 115: char_y+=32;break;
		case 100: char_x+=32;break;
	}
	draw();
};
function draw(){
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "rgb(102, 64, 5)";
	for(var i = 0; i < level.length; i++){
		for(var x = 0; x < level[0].length; x++){
			if(level[i][x] == 1){
				ctx.fillRect(i*32, x*32, (i+1)*32, (x+1)*32);
			}
		}
	}
	ctx.drawImage(img_char, char_x, char_y);
}
function testCollision(x, y){
	
}
