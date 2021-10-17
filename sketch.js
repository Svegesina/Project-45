var bg, bgi


function preload()
{ bgi=loadImage("Assets/Background.jpeg")
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
bg=createSprite(displayWidth/2,displayHeight/2, 10,10)
bg.addImage(bgi)
bg.scale=1.6
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



