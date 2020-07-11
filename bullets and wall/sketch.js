var wall,thickness;
var bullet,speed,weight;
thickness=random(22,83);
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(60,800,80,20);
  wall=createSprite(1200, 200,thickness,height/2);
  wall.shapeColor(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  bullet.shapeColor("white");


}

function draw() {
  background(0,0,0);  

  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*speed*speed/(thickness*thickness*thickness);
  
     if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
  
    if(damage<10)
    {
  
      wall.shapeColor=color(0,255,0);
  
    }
  
  
  
  
  }
  
  
  
  
    drawSprites();
  }
  
  function hascollided(Lbullet,Lwall)
  {
  
    bulletRightEdge=lbullet+lbullet.width;
    wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
  
  return true;
  
  }
   return false;
  }


