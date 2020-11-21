class Roof {
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.width = 700;
        this.thickness = 70;
        this.body = Bodies.rectangle(x, y, this.width, this.thickness, options);
        this.body.collisionFilter.group = 1;
        World.add(world, this.body);
    } 
        
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(5);
        fill("brown");
        rect(0, 0, this.width, this.thickness);
        pop();
    }    
}