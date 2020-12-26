
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var dustbin1,dustbin2,dustbin3;
var ball;

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	ground = new Ground(400,710,1200,20);
	ball= new Ball(50,650,40);
	dustbin1 = new Dustbin(770,630,20,150);
	dustbin2= new Dustbin(665,690,190,20);
	dustbin3 = new Dustbin(570,630,20,150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 235, 205);
  ball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:310,y:-250});
	}
}
