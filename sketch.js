var wall,thickness;
var bullet,speed,weight;
var damage
function setup() {
  createCanvas(1600,400);
  speed=random(223,331);
  weight=random(30,52);
  thickness=random(22,83);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
}
function draw() {
  background(0,0,0);  
  bullet.shapeColor="white";
  wall.shapeColor=(255,255,255);
  bullet.velocityX=speed;
  if (wall.x-bullet.x<=bullet.x-wall.x)
  {
    bullet.velocityX=0;
    if (damage>10)
  {
    wall.shapeColor="green";
  }
  if (damage<10)
  {
    wall.shapeColor="red";
  }
  }
  drawSprites();
}