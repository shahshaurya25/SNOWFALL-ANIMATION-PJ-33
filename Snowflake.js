class Snowflake {
    constructor(x, y, radius) {
        var options = {
            density: 1,
            restitution: 1,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}