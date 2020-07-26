
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paperball;
var bin1;
var ground;
var paperimg,binimg;
var Launch;

function preload(){

}


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paper(200,400,50);
	bin1 = new Bin(400, 625, 200, 150);
	ground = new Ground(600,680,1200,30);
	Launch = new Launcher(paperball.body,{x:200,y:400});
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);
  
	paperball.display();
	bin1.display();
	ground.display();
	Launch.display();

  drawSprites();
 
}

function mouseDragged(){

    Matter.Body.setPosition(paperball.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){

    Launch.fly();

}