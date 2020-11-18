const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bobImg;

var score=0;

function preload(){
bobImg = loadImage("Lol_circle.png")
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  floor = new Ground(width/2,350,width,20)
  
  block8 = new Box(330+150,235-50,30,40); 
  block9 = new Box(360+150,235-50,30,40); 
  block10 = new Box(390+150,235-50,30,40); 
  block11 = new Box(420+150,235-50,30,40);
   block12 = new Box(450+150,235-50,30,40);
    //level three
  block13 = new Box(360+150,195-50,30,40);
  block14 = new Box(390+150,195-50,30,40);
  block15 = new Box(420+150,195-50,30,40);
   //top
    block16 = new Box(390+150,155-50,30,40);

  stand = new Ground(400+150,200,300,20)
  //stand2 = new Ground(600,120,200,10)


   bob = new Box1(150,200,20)
   sling = new SlingShot(bob.body, { x: 150, y: 200 });
      
}      
      
function draw() {      
        
  Engine.update(engine);
  background(255,255,255);  
  drawSprites();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  floor.display();
  stand.display();
  //stand2.display();


  sling.display();
  bob.display();

  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  text("Score: " + score,730,40);
}

function mouseDragged() {

  Matter.Body.setPosition(bob.body, { x: mouseX, y: mouseY });
 
  
}

function mouseReleased() {
  sling.fly(); 
}

function keyPressed() {
  if (keyCode === 32 ) {
    sling.attach(bob.body);
  }
}
