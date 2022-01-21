const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow1, snow2,snow3,snow4,snow5;




 

function preload() {
 
  snow1 = loadImage("snow1.jpg");
  snow2 = loadImage("snow2.jpg");
  snow3 = loadImage("snow3.jpg");
  snow4 = loadImage("snow4.webp");
  snow5 = loadImage("snow5.webp");
 
}

function setup() {
  createCanvas(1000,600);
   snow1 = createSprite(100, 200, 10, 20);
   snow2= createSprite(90,100, 20, 10);
   snow3= createSprite(50,50, 15, 10);
   snow4= createSprite(30,300, 25, 15);
   snow5= createSprite(150,100, 20, 10);
  
  
   snowGroup = new Group();
}

function draw() {
  background(snow2); 
  
   
      snowGroup.setVelocityXEach(0);
  
      //set lifetime of the game objects so that they are never destroyed
      snowGroup.setLifetimeEach(-1);
    
    drawSprites();
  }
  

function spawnSnow() {
  if(frameCount % 60 === 0) {
    var snow = createSprite(600,165,10,40);
    //snow.debug = true;
    snow.velocityX = -(6 + 3*score/100);
    
    //generate random snow
    var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: snow.addImage(snow1);
              break;
      case 2: snow.addImage(snow2);
              break;
      case 3: snow.addImage(snow3);
              break;
      case 4: snow.addImage(snow4);
              break;
      case 5: snow.addImage(snow5);
              break;
      default: break;
      }

      //assign scale and lifetime to the snow           
    snow.scale = 0.5;
    snow.lifetime = 300;
    //add each snow to the group
    snowGroup.add(Snow);
  }
}
