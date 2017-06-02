var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var char_x = 32;
var char_y = 32;
var data = createElement('TABLE');
var imgs = data.insertRow();
var img_char = new Image();
var img_floor = new Image();
img_char.src = 'src/char.png';
img_char.parent = imgs;
img_floor.src = 'src/floor.png';
img_floor.parent = imgs;
var snd_vic = new Audio('src/victory.mp3');
var level = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
imgs.onload = function(){
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
				ctx.drawImage(img_floor, i*32, x*32);
			}
		}
	}
	ctx.drawImage(img_char, char_x, char_y);
}
function testCollision(x, y){
	
}
