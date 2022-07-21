const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

function preload(){
  fruitImg = loadImage("images/melon.png")
}

function setup() {
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(250, 650, 500, 20, { isStatic: true });
  World.add(world, ground);

  rope = new Rope(6,{x:250,y:30})
  fruit = Bodies.circle(250,200,20,{restitution: 0.1})
  World.add(world, fruit);
  link = new Link(rope,fruit)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() {
  background(51);
  Engine.update(engine);
  rect(ground.position.x, ground.position.y, 500, 20)
  push()
  imageMode(CENTER)
  image(fruitImg, fruit.position.x, fruit.position.y, 70, 70)
  pop()
  rope.display()
}




