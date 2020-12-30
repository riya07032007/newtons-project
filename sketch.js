
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint
var dustbingreenImg;

function preload()
{

}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

  paper = new Paper (120,420,40)
  ground = new Ground(width/2,480,width,10)
  dustbin1= new Trash (600,425)
	

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width:1600,
      height: 700,
      wireframes:false
    }
  })


	Engine.run(engine);
  Render.run (render);
}


function draw() {
 rectMode(CENTER);
  background(100);

  ground.display();
  paper.display();
  dustbin1.display();
 


  drawSprites();

}

function keyPressed() {
   if(keyCode === UP_ARROW){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:9,y:-9});

   }

}

