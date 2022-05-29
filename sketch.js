
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var ball2;

function preload()
{

}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.95,
		friction:0,
		density:1.2
	}


	


	//ground = new GroundObj(400,690,800, 40)

	groundObj = new GroundObj(width/2,670,width,20)

	leftside = new GroundObj(600,600,20,120)

	rigthSide = new GroundObj(1200,600,20,400)

	//Create the Bodies Here.
	ball = Bodies.circle(150, 300, 30, ball_options)
	World.add(world, ball)



	Engine.run(engine);



	
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30)
  
  //ground.show();
  groundObj.show();
  leftside.show();
  rigthSide.show()
  if (keyCode == UP_ARROW) {

	Body.applyForce(ball, ball.position, {x:10, y:-10})

  }

  Engine.update(engine);
  drawSprites();

  
  
 
}






