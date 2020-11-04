class paper
{
constructor(x,y,r)
{
var options={
isStatic:false,
restitution:0.2,
friction:0.6,
density:1.3			
}
this.x=x;
this.y=y;
this.r=r
this.body=Bodies.circle(this.x, this.y, this.r/2, options)
World.add(world, this.body);
}
display()
{			
var paperpos=this.body.position;		
push()
translate(paperpos.x, paperpos.y);
rectMode(CENTER)
strokeWeight(5);
fill("red")
ellipse(0,0,this.r, this.r);
pop()			
}
}