class Bob{
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            restitution:1.2,
            friction:0,
            density:1
        }
        this.r = r;
        this.body = Matter.Bodies.circle(x, y, r/2, options);
        this.body.collisionFilter.group = 1;
        World.add(world, this.body);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("yellow");
        fill("yellow");
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}