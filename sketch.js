var ground,groundImage;
var mario,marioImage;
var clouds,cloudsImage;
var enemies,enemiesImage;
var invisibleGround;

function preload(){
  //bg=loadImage("images/bg.png");
  groundImage=loadImage("images/ground.png");
  marioImage=loadImage("images/mario1.png","images/mario2.png");

}

function setup(){
  createCanvas(1200,400);

  ground=createSprite(600,390,1200,10);
  ground.addImage("ground",groundImage);
  ground.x=ground.width/2;

  mario=createSprite(50,335,10,10);
  mario.addAnimation("mario",marioImage);
  mario.scale=0.3;

  invisibleGround=createSprite(600,375,1200,10);
  invisibleGround.visible=false;

}

function draw(){
  background("blue");

  drawSprites();
}