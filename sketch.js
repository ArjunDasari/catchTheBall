const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var score; 

var gameState = 2;
var start = 1;
var end = 0;

function setup() {
 // createCanvas(windowWidth, windowHeight);
 createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  bottom_wall =createSprite(200,790,1200,20);
  right = createSprite(790,200,20,1200);
  left = createSprite(10,200,20,1200);
  top_wall = createSprite(200,10,1200,20);
  obstacle1 = createSprite(300,200,20,20);
  obstacle2 = createSprite(200,200,20,20);
  player = createSprite(100,200,20,50);
  ball = createSprite(300,300,30,30)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background("skyblue");  
  bottom_wall.display();
  right.display();
  top_wall.display();
  left.display();
  obstacle1.display();
  obstacle2.display();

  if(keyDown("left_arrow")){
    player.velocityX = -5;
    player.velocityY = 0;
  }
  if(keyDown("right_arrow")){
    player.velocityX = 5;
    player.velocityY = 0;
  }
  if(keyDown("up_arrow")){
    player.velocityY = -5;
    player.velocityX = 0;
  }
  if(keyDown("down_arrow")){
    player.velocityY = 5;
    player.velocityX = 0;
  }

  if(player.x === 789||player.x === 11||player.y === 789 || player.y === 11){
    gameState = 0; 
    player.velocityX = 0;
    player.velocityY = 0;
  }

  if(player.isTouching(bottom_wall)||player.isTouching(top_wall)||player.isTouching(right)||player.isTouching(left)){
    gameState = 0; 
    player.velocityX = 0;
    player.velocityY = 0;
  }


   console.log(player.x);

  drawSprites();
  if(gameState === 0){
    fill("red");
    textStyle("bold");
    textSize(100);
    text("Game Over", 100,400);
    console.log("test");
  }
}