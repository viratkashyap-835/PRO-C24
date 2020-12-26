class Ball{

    constructor(x,y,radius){
      var options={
       resitution:0.3,
       isStatic:false,
       friction:0.5,
       density:1.2
      }
     
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius;
    World.add(world,this.body)
    }
  
  
     display(){
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     fill(0, 255, 255);
     strokeWeight(5);
     ellipseMode(RADIUS);
     ellipse(0,0,this.radius,this.radius);
    pop();
     }
  
  }
  
  
  