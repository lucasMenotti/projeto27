class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restituton : 0.3,
			friction : 0,
			density : 1.2,
		} 
		this.x=x;
		this.y=y;
		this.r=r;
		this.body = Bodies.circle(this.x,this.y,(this.r-20)/2, options);
		World.add(world, this.body);
		
		this.image=loadImage("paper.png")

	}
	display()
	{			
            var paperpos = this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			image(this.image, 0,0, this.width, this.height)
			strokeWeight(4);
			fill(255)
			circle(0,0,this.r, this.r);
			pop()

		
	}

}