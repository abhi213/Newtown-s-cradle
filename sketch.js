
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof, bobDiameter;

function preload()
{
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter = 100;
	roof = new Roof(500, 100);
	bob1 = new Bob(300, 600, bobDiameter);
	bob2 = new Bob(400, 600, bobDiameter);
	bob3 = new Bob(500, 600, bobDiameter);
	bob4 = new Bob(600, 600, bobDiameter);
	bob5 = new Bob(700, 600, bobDiameter);
	rope1 = new Rope(bob1.body, roof.body, -2*bobDiameter, 0);
	rope2 = new Rope(bob2.body, roof.body, -1*bobDiameter, 0);
	rope3 = new Rope(bob3.body, roof.body, 0*bobDiameter, 0);
	rope4 = new Rope(bob4.body, roof.body, 1*bobDiameter, 0);
	rope5 = new Rope(bob5.body, roof.body, 2*bobDiameter, 0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
  keyPressed();
}

function keyPressed(){
   if (keyIsDown(UP_ARROW)) {
	  Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-20, y:-20});
   }
}