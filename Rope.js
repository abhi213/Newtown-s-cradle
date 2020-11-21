class Rope {
    constructor (body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
          bodyA : body1, 
          bodyB : body2, 
          pointB : {x:this.offsetX, y:this.offsetY}
        }
        this.x = body1.position.x;
        this.y = body2.position.y;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
      this.rope.bodyA = null;
    }
    
    display(){
      if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        strokeWeight(5);
        stroke("yellow");
        line(pointA.x, pointA.y, this.x, this.y);
      }
    } 
}