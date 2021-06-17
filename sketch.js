var jake,jake_running,edges;
var path;
var rightboundary;
var leftboundary;

    
    
function preload(){
  jake_running=
   loadAnimation("Jake1.png","Jake2.png","jake3.png",
                "jake4.PNG","jake5.png");
  pathImage=loadImage("path.png");
 }

function setup(){
  createCanvas(400,400);
  
  
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;
  
  jake=createSprite(180,340,30,30);
  jake.addAnimation("running",boy_running); 
  
  
  
  rightboundary=createSprite(410,0,100,800);
 
  
  
  leftboundary=createSprite(0,0,100,800);
 
  
  
 }

function draw() {
  background(0);
  
  jake.x=World.mouseX;
  jake.collide(leftboundary);
  
  jake.collide(rightboundary);
  
  if(path.y>400){
    path.y=path.width/2
  }
  
  
  
   
    drawSprites();
}

