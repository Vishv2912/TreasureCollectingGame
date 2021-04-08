var path, boy, cash, diamonds, jwellery, sword;
var pathImg, boyImg, cashImg, diamondsImg, jwelleryImg, swordImg;
var treasureCollection = 0;
var cashG, diamondsG, jwelleryG, swordGroup;
var PLAY = 1;
var END = 0;
var gameState = 1;
var end, endImg;
var runningStop
var restart,restartImage;

function preload() {
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png", "runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg = loadImage("gameOver.png");
  Stop = loadAnimation("runner1.png");
  restartImage=loadImage("reset.png");
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  // Moving background
  path = createSprite(width/2, 200);
  path.addImage(pathImg);
  path.velocityY = 4;


  //creating boy running
  boy = createSprite(width/2,height, 20, 20);
  boy.addAnimation("SahilRunning", boyImg);
  boy.scale = 0.08;


  cashG = new Group();
  diamondsG = new Group();
  jwelleryG = new Group();
  swordGroup = new Group();

  
  end = createSprite(width/2,height-250, 30, 30);
  end.addImage(endImg);
  end.scale = 0.5;
  end.visible = false;
  

restart=createSprite(width/2,height-200,50,50);
restart.addImage(restartImage); 
restart.scale=0.3  
restart.visible=false;  
}


function draw() {


  if (gameState == PLAY) {
    background(0);

    
    
    boy.x = World.mouseX||touches.lenght>0;
if(touches.length>0){
  touches=[];
}
    edges = createEdgeSprites();
    boy.collide(edges);

    //code to reset the background
    if (path.y > 400) {
      path.y = height / 2;
      

    }
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection + 50
      
    } else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection + 50
      
    } else if (jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection + 10
  
    }else{
      if (swordGroup.isTouching(boy)) {
      gameState=END
      }
  if(gameState==END){  //  boy.changeAnimation(runningStop)
    end.visible = true;
    path.velocityY = 0;

    
    

if(mousePressedOver(restart)){
  gmaeState=PLAY;
}
 

    boy.scale = 0;
restart.visible=true;

    cashG.setVelocityYEach(0);
    diamondsG.setVelocityYEach(0);
    jwelleryG.setVelocityYEach(0);
    swordGroup.setVelocityYEach(0);
      

    cashG.destroyEach();
    diamondsG.destroyEach();
    jwelleryG.destroyEach();
    swordGroup.destroyEach();
              
        }}}


  drawSprites();
  textSize(20);
  fill("aqua");
  text("Treasure: " + treasureCollection,width/4,height/10);
 
}


function createCash() {
  if (World.frameCount % 50 == 0) {
    var cash = createSprite(width-Math.round(random(50, 1000), 40, 10, 10));
    cash.addImage(cashImg);
    cash.scale = 0.12;
    cash.velocityY = 3;
    cash.lifetime = 150;
    cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
    var diamonds = createSprite(width-Math.round(random(50, 1000), 40, 10, 10));
    diamonds.addImage(diamondsImg);
    diamonds.scale = 0.03;
    diamonds.velocityY = 3;
    diamonds.lifetime = 150;
    diamondsG.add(diamonds);
  }
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
    var jwellery = createSprite(width-Math.round(random(50, 1000), 40, 10, 10));
    jwellery.addImage(jwelleryImg);
    jwellery.scale = 0.13;
    jwellery.velocityY = 3;
    jwellery.lifetime = 150;
    jwelleryG.add(jwellery);
  }
}

function createSword() {
  if (World.frameCount % 150 == 0) {
    var sword = createSprite(width-Math.round(random(50, 1000), 40, 10, 10));
    sword.addImage(swordImg);
    sword.scale = 0.1;
    sword.velocityY = 3;
    sword.lifetime = 150;
    swordGroup.add(sword);
  }
}