
let counting = ["the little red ball represents the population", "click on the ball to infect it", "look! you are bigger now","infect this ball", "and this one", "this one", "don't forget this one", "and that one", "oh this one too","haha it's harder now", "the population has catch up with your plans", "don't stop", "do not let it get away", "it's too hard to infect the population now", "press the up arrow to gain strength", "false alarm. You've been tricked","the population is too strong now", "press the up arrow again. it'll work this time", "too bad, the red ball has some sort of protection", "the population is too strong"]; 
let a;
let x;
let y;
let sizeV;
let sizeR
let virus;
let city;
let bg;
let speedX;
let  speedY;


function setup() {
  //The background is a cityscape. It represents the world. 
  bg= loadImage ("grey city.png");
  createCanvas(windowWidth, windowHeight);
  
  a = 0;
  x = random (windowWidth);
  y = random (windowHeight);
  sizeV = 50; 
  sizeR = 50;
  speedX = random(8);
  speedY = random(8);
}


function draw(){
  background (bg);
  
  //text
  fill (0);
  textSize (45);
  text (counting [a], 100, 100);
  
  
  //virus, it is a green-yellow colour because it represents sickness. It gives the impression of something bad and uncomfortable.  
  fill (120, 163, 0);
  circle (mouseX, mouseY, sizeV);
  
  
  //red people, the colour red has the meaning of life and courage. That's why I chose it.  
  fill (155, 25, 8);
  circle (x, y, sizeR);
  
  //when the virus gets to powerful, the red ball starts to move to get away from it. 
  if (a>6 && mouseX<x+300 && mouseY<y+300 && mouseX>x-300 && mouseY>y-300){
    x=x+speedX;
    y=y+speedY;
  }
  
  if (x>windowWidth || y>windowHeight || x<0 ||y<0 ){
    speedX=speedX*-1;
    speedY=speedY*-1;
  }
  //this is what appears at the end of the game
  if (a==19 || a==20 || a==21 || a==22) {
    fill (255);
    textSize (100);
    text ('GAME OVER', 300, 250);
    fill (255);
    textSize (60);
    text ('the whole world has worked against you', 100, 300);
    text ('the population is stronger now', 200, 350);
    text ('it is time for you to go away', 200, 400);
    fill (random (255), 0, 0);
    ellipse (random (windowWidth), random (windowHeight), random ([300],[700]));
  }   
  
}

function mousePressed (){
  //every time the virus infects a red ball, it gets bigger (+20)
  if(mouseX<x+30 && mouseY<y+30 && mouseX>x-30 && mouseY>y-30){
    sizeV = sizeV + 20;
    x = random (windowWidth);
    y = random (windowHeight);  
  }
  
  background (bg);
    a=a+1;
    speedX=random(-8,8);
    speedY=random(-8,8);
  
}

function keyPressed (){
  //the red ball gets stronger, bigger and faster. It means that the population is fighting the virus. 
  if (a==10 || keyCode==UP_ARROW) {
    sizeR = sizeR + 400;
    sizeV = sizeV - 100;
    speedX = (-50, 50);
    speedY = (-50, 50);
  }
}
