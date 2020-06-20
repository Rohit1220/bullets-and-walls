var wall,thickness;
var bullet,speed,weight;
var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
function setup() {
  createCanvas(1600,400);
  speed=random(223,331);
  weight=random(30,52);
  thickness=random(22,83);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,thickness,height/2);
}

function draw() {
  background(0,0,0);  
  bullet.shapeColor="white";
  wall.shapeColor=(80,80,80);
  bullet.velocityX=speed;
  if (wall.x-bullet.x<=bullet.x-wall.x)
  {
    bullet.velocityX=0;
  }
  if (damage>10)
  {
    wall.shapeColor=(255,0,0);
  }
  if (damage<10)
  {
    wall.shapeColor=(0,255,100);
  }
  drawSprites();
}