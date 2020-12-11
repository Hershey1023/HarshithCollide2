var fixedRect, movingRect;
var r1, r1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
  
  r1 = createSprite(800, 300, 90, 50);
  r1.shapeColor = "blue";
  r1.debug = true;
  r2 = createSprite(800, 600, 60, 80);
  r2.shapeColor = "yellow";
  r2.debug = true;

  r1.velocityY = +5;
  r2.velocityY = -5;
  
}

function draw() {
  background(0,0,0);  
  
  bounceOff(r1, r2);
  bounceOff(movingRect, fixedRect)

  drawSprites();
}

