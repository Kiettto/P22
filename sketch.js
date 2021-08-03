const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here

var ball, ball2, ball3, ball4, ball5;
//var rope, rope2, rope3, rope4, rope5;
var con,con2,con3,con4,con5;



function setup() {
	createCanvas(400, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 1.49,
		//isStatic:true
	}

	var roof_options={
		isStatic:true			
	}


	roof = Bodies.rectangle(200,100,250,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(20,200,15,ball_options);
	World.add(world,ball);

	ball2 = Bodies.circle(150,250,15,ball_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(200,250,15,ball_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(250,250,15,ball_options);
	World.add(world,ball4);

	ball5 = Bodies.circle(300,250,15,ball_options);
	World.add(world,ball5);



	con = Matter.Constraint.create({
		pointA:{x:100,y:100},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.1
	});

	World.add(world,con);

	con2 = Matter.Constraint.create({
		pointA:{x:150,y:100},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.1
	});

	World.add(world,con2);

	con3 = Matter.Constraint.create({
		pointA:{x:200,y:100},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.1
	});

	World.add(world,con3);
	
	con4 = Matter.Constraint.create({
		pointA:{x:250,y:100},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.1
	});

	World.add(world,con4);

	con5 = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:ball5,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.1
	});

	World.add(world,con5);



	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,250,20);

  //call display() to show ropes here
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);


  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,30);

  ellipse(ball2.position.x,ball2.position.y,30);

  ellipse(ball3.position.x,ball3.position.y,30);

  ellipse(ball4.position.x,ball4.position.y,30);

  ellipse(ball5.position.x,ball5.position.y,30);


}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
