const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var roof ;
var b1,b2,b3,b4,b5;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(1200,700);

	roof = new Roof(width/2,200,600,50)
	//World.add(world,this.body)

	b1 = new Bob(800,600,50)
	b2 = new Bob(700,600,50)
	b3 = new Bob(600,600,50)
	b4 = new Bob(500,600,50)
	b5 = new Bob(400,600,50)

	rope1 = new Rope(b1.body,roof.body,100, 10);
    rope2 = new Rope(b2.body,roof.body,100, 10);
    rope3 = new Rope(b3.body,roof.body,100,10);
    rope4 = new Rope(b4.body,roof.body, 100,10);
    rope5 = new Rope(b5.body,roof.body,100,10);
  

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(255,255,224);


  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}



