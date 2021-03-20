//..
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,r1,r2,r3,r4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-45, width, 10);
	groundSprite.shapeColor=color(255);

	groundSprite=createSprite(width/2, height-45, width, 10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
    r1 = new r(310, 586, 20, 100);
	r2 = new r(490, 586, 20, 100);
	r3 = new r(width/2, height-60, 200, 20);
	r4 = new r(width/2, height-80, 200, 20);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  r1.display();
  r2.display();
  r3.display();
  drawSprites();
}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}
