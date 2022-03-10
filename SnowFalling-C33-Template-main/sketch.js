var backgr1
var engine, world
var particles  = []
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function preload() {
  backgr1 = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  grounds = new Ground(400,height,800,10)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgr1);  
  Engine.update(engine);
if(frameCount%20 === 0){
  p = new Particle(random(10,800),50,20)
  particles.push(p)
}

for(i = 0;i<particles;i++){
  particles[i].display()
}
grounds.display()
  drawSprites();
}
