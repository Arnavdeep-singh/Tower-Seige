class Box1 {
    constructor(x, y,radius) {
      var options = {
        'restitution':0.8,
        'friction':3.0,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, radius, options, 30);
    this.radius = radius;
    World.add(world, this.body);
    }
    display(){

      rectMode(CENTER);
      fill(251,188,5);
      strokeWeight(2);
      circle(this.body.position.x, this.body.position.y,this.radius*2);
    }
  }
  