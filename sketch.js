var path,pathi;
var boy,boy_run;
function preload(){
  //pre-load images
  boy_run = loadAnimation("Runner-1.png","Runner-2.png");
  pathi = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
 
  path = createSprite(200,200);
  path.addImage(pathi);
  path.velocityY= 4;
  path.scale =1.2;

  //create sprites here
  boy = createSprite(50,340,20,50);
  boy.addAnimation("running",boy_run);
  boy.scale = 0.08;

    
  invisibleleftEdge= createSprite(0,0,100,800);
  invisiblerightEdge= createSprite(410,0,100,800);
  invisibleleftEdge.visible = false;
  invisiblerightEdge.visible = false;
}


function draw() {
  background(0);

  
  if(path.y > 400){
    path.y = height/2;
  }

   
  boy.collide(invisibleleftEdge);
  boy.collide(invisiblerightEdge);


  boy.x = World.mouseX;
  

drawSprites();

}