class box {
    constructor(x,y,width,height){
      var options = {
      'restitution': 0.1,
      'friction': 1,
      'density' : 1

      }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.Visiblity = 255;
      this.width = width;
      this.height = height;
      World.add(world,this.body);


    }
    display(){
      
       if(this.body.speed>2){
      
        World.remove(world, this.body);
    
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(11,this.Visiblity);
        pop();
      
      }

    else{
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x,position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("white");   
        rect(0,0,this.width,this.height);
        pop();
    };

    
  }
  score(){
    if(this.Visiblity<0 && this.Visiblity>-105){
      score++;
    }
  }
}

