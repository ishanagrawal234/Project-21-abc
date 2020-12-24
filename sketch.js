var bullet, wall;
var speed, weight, thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 100, 10);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = rgb(80,80,80);

}

function draw() {
  background("black");
  
  bullet.velocityX = speed;

  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;

  damage = 0.5*weight*speed*speed/thickness*thickness*thickness

  if(damage < 10){
    wall.shapeColor = rgb(0,255,0);
  }
  else if(damage === 10 || damage > 10){
    wall.shapeColor = rgb(255,0,0);
  }

  }

  drawSprites();

  console.log(speed);

}

