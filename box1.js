class Box1 extends BaseClass {
    constructor(x, y, width, height) {
      super(x,y, width,height);
      this.image = loadImage("Lol_circle.png");
    }
    display(){
      super.display;
     image(this.image, this.body.position.x, this.body.position.y,40,40);
    }
  }
  