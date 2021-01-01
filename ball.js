class ball {
    constructor(x,y,radius){
      var options = {
      'density' : 1
      }
      this.body = Bodies.circle(x,y,radius,options)
      this.radius = radius;
      radius = 9;
      this.image = loadImage("polygon.png");
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipse(0,0,this.radius,this.radius);
        this.image.size = 0.3;
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*3, this.radius*3);
        pop(); 
    }
}