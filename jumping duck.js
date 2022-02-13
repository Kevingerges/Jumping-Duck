// Create your variables here
var ground = createSprite(200,200);
var star = createSprite(200,200);
star.scale = 0.25;



var star2 = createSprite(200,100);
star2.scale = 0.25;
var bird = createSprite(50,200);
var pipe1 = createSprite(190,100);
var pipe2 = createSprite(300,300);
var pipe3 = createSprite(470,100);
var pipe4 = createSprite(600,400);
var score = 0;




// Create your sprites here
star.setAnimation("star2_1");
star2.setAnimation("star2_1_copy_1");
bird.setAnimation("duckling_1");
pipe1.setAnimation("shell_01_1");
pipe2.setAnimation("shell_01_2");
ground.setAnimation("background_landscape07_1");
pipe3.setAnimation("shell_01_2_copy_1");
pipe4.setAnimation("shell_01_2_copy_1_copy_1");


//  adjustament 

bird.setCollider("circle");

pipe1.setCollider("rectangle",0,0,470,90,140);
pipe2.setCollider("rectangle",0,0,470,90,140);
bird.scale = 0.15;
pipe1.scale = 0.42;
pipe2.scale = 0.42;
pipe1.rotation = 125;
pipe2.rotation = -55;
pipe3.setCollider("rectangle",0,0,470,90,140);
pipe4.setCollider("rectangle",0,0,470,90,140);
pipe3.scale = 0.42;
pipe4.scale = 0.42;
pipe3.rotation = 125;
pipe4.rotation = -55;


function draw() {
background("transparent");
controls();
  
  
  go();
  move();
  scorer();
  scorerr();
drawSprites();
   
ending();
   showScore();  
}

// Create your functions here

function scorer(){
  star.velocityX = - 3; 
  star2.velocityX = -3;
  if (star.x < -10) {
    star.x = 450;
    }
  if (star2.x < -10) {
    star2.x = 450;
    
  }
}


function showScore() {
  fill("white");
  textSize(20);
  text("score :",20,20,200,100);
  text(score,90,22,200,100);
}
function go() {
  bird.x = bird.x + 1;
  pipe1.x = pipe1.x - 2;
  pipe2.x = pipe2.x - 2;
  pipe3.x = pipe3.x - 2;
  pipe4.x = pipe4.x - 2;
}
  function move(){
  if (pipe1.x < 0) {
     pipe1.x = pipe1.x + 410;
  }
  if (pipe2.x < 0) {
    pipe2.x = pipe2.x + 410;
  }
  if (pipe3.x < 0) {
     pipe3.x = pipe3.x + 410;
  }
  if (pipe4.x < 0) {
     pipe4.x = pipe4.x + 410;
  }
  }
  function controls(){
if (keyDown("up")) {
    bird.velocityY = bird.velocityY - 0.8;
  }
if (keyDown("left")) {
    bird.velocityX = bird.velocityX - 0.4;
    }
if (keyDown("right")) {
   bird.velocityX = bird.velocityX + 0.4;
  }
if (keyDown("down")) {
    bird.velocityY = bird.velocityY + 0.8;
  }
}

function ending() {
 if (bird.isTouching(pipe1)) {
   bird.velocityY = 9;
 }
 if (bird.y > 400) {
   background("black");
    fill("green");
   textSize(50);
    text("Game Over!" , 40, 200);
 }
 if (bird.isTouching(pipe2)) {
   bird.velocityY = 9;
 }
 if (bird.y > 400) {
   background("black");
    fill("green");
   textSize(50);
    text("Game Over!" , 40, 200);
 }
 if (bird.isTouching(pipe3)) {
   bird.velocityY = 9;
 }
 if (bird.y > 400) {
   background("black");
    fill("green");
   textSize(50);
    text("Game Over!" , 40, 200);
 }
if (bird.isTouching(pipe4)) {
   bird.velocityY = 9;
   
 }
 if (bird.y > 400) {
   background("black");
    fill("green");
   textSize(50);
    text("Game Over!" , 40, 200);
 }
}
function scorerr(){
  if (bird.isTouching(star)) {
    score = score +1 ;
    star.x = 450;
  }
   if (bird.isTouching(star2)) {
    score = score +1 ;
    star2.x = 450;
  }
  
}
 
  
  
       
