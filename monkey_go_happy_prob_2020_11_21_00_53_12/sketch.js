var monkey, monkey_running
var bannana, bananaImage, obstacleImage, obstacle;
var bannanaGroup, obstacleGroup
var score, survivalTime, ground, bannanaGroup, obstacleGroup;

var PLAY=1;
var END=0;
var gameState=PLAY;


function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  bannanaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");


}

function setup() {
  createCanvas(400, 400);
  monkey = createSprite(80, 315, 20, 20);
  monkey.scale = 0.1;
      monkey.addAnimation("moving", monkey_running);

  ground = createSprite(400, 350, 900, 10);
  survivalTime = 0
  obstacleGroup = createGroup();
  bannanaGroup = createGroup();


}

function draw() {
  background(255)

  if(gameState===PLAY){
    
      if (ground.x > 0) {

    ground.x = ground.width / 2;

  }

  ground.velocityX = -12;

  if (keyDown("space") && monkey.y > 200) {

    monkey.velocityY = -10;
  }

  monkey.velocityY = monkey.velocityY + 0.8;
    

    stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score, 500, 50);

  stroke("blace");
  textSize(20);
  fill("black");
  survivalTime = Math.round(frameCount / frameRate());
  text("Survival Time:" + survivalTime, 100, 50);
    
    if(bannanaGroup.isTouching(monkey)){
  
  bannanaGroup.destroyEach(monkey);
  
}
    
    
    
    
    ranrock();
  ranbannana();
    if(monkey.isTouching(obstacleGroup)){
      
      gameState=END;
      
    }
  }
    else if(gameState===END){
      
      
      
    }
  
  
  


  monkey.collide(ground);


  



  drawSprites();
  
}

function ranrock() {
  if (frameCount % 130 === 0) {

    //obstacle.velocityX = 4
    obstacle = createSprite(300, 323, 30, 30);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -7;
    obstacleGroup.add(obstacle);
  }
}

function ranbannana() {

  if (frameCount % 80 === 0) {
    bannana = createSprite(390, 200, 40, 40);
    bannana.addImage(bannanaImage);
    bannana.scale = 0.1;
    bannana.y = Math.round(random(330, 140));
    bannana.velocityX = -8;
    bannana.lifetime = 80;
    bannanaGroup.add(bannana);

  }

}