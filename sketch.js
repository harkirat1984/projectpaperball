
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const World = Matter.World;
var dustbinObj, paperObject,groundObject	
var world;
function setup() {
createCanvas(1600, 700);
rectMode(CENTER);
engine = Engine.create();
world = engine.world;
paperObject=new paper(200,450,40);
groundObject=new ground(width/2,670,width,20);
dustbinObj=new dustbin(1100,650);
var render = Render.create({
element: document.body,
engine: engine,
options: {
width: 1200,
height: 700,
wireframes: false
}
});
Engine.run(engine);
}
function draw() {
rectMode(CENTER);
background(0);
paperObject.display();
dustbinObj.display();
groundObject.display();
}
function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});   
}
}