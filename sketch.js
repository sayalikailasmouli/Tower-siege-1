const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ground1,SlingShot1,ball0;



function setup() {
  createCanvas(2000,400);
  engine = Engine.create();
  world = engine.world;
  // createSprite(400, 200, 50, 50);

  box1=new Box(470,315,30,40);
  box2=new Box(415,315,30,40);
  box3=new Box(525,315,30,40);
  box4=new Box(580,315,30,40);
  box5=new Box(635,315,30,40);
  box6=new Box(360,315,30,40);
  box7=new Box(305,315,30,40);
  box8=new Box(360,260,10,20);
  box9=new Box(415,260,10,20);
  box10=new Box(470,260,10,20);
  box11=new Box(525,260,10,20);
  box12=new Box(580,260,10,20);
  box13=new Box(525,205,10,20);
  box14=new Box(415,205,10,20);
  box15=new Box(470,205,10,20);
  box16=new Box(450,150,10,20);
  box17=new Box(505,150,10,20);
  box18=new Box(475,95,10,20);
 
  ground1=new Ground(500,380,450,20);
  ball0=new ball(100,200,30,30);
  SlingShot1=new SlingShot(ball0.body,{x:100,y:200});
  
 
}

function draw() {
  background(244, 208, 63);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  ball0.display();
  SlingShot1.display();
  // box19.display();
  // box20.display();
  ground1.display();
  Engine.update(engine);
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball0.body,{x:mouseX,y:mouseY});


}

function mouseReleased(){
  SlingShot1.fly();
  //gameState = "launched";
}
