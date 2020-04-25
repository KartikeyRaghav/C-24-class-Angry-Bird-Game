class Log {
    constructor(x, y, height, angle) {
      var options = {
          isStatic: false,
          'restitution':0.8,
          'friction':0.6,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rotate(angle);
      translate(pos.x,pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("yellow");
      fill("red");
      rect(0, 0,this.width, this.height);
      pop();
    }
  }