class Box extends BaseClass{
  constructor(x, y) {
    super(x,y,50,50);
    //this.visiblity = 255;
  }
  display(){
    
    if(this.body.speed > 3){
      World.remove(world,this.body);
      //push();
      //this.visiblity-=5;
      //tint(255,this.visiblity);
      //rect(this.body.position.x, this.body.position.y,this.width,this.height);
      //pop();
    }
    else{ 
      super.display();
    }
  }
}
