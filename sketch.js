var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);


  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  
   bullet =createSprite(50,200,30,10);
   bullet.shapeColor="white";
   wall=createSprite(1200,200,thickness,height/2);
   wall.shapeColor=color(80,80,80);
   bullet.velocityX=speed;
  

   
  
}

function draw() {
  background("black");  
  
if(hadCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor="red";
  }
  //if(damage=10){
  //  wall.shapeColor="yellow";
  //}
  if(damage<10){
    wall.shapeColor="green";
  }  
  
}


  drawSprites();
}


function hadCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallRightEdge=lwall.x;
  if(bulletRightEdge>=wallRightEdge){
    return true;
  }
  return false;
}


