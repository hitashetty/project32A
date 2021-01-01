class rope{
    constructor(pointA,bodyB){
        var options = {
            pointA : pointA,
            bodyB : bodyB,
            'stifness' : 1.2,
            'length' : 10
        }
        this.pointA = pointA;
        this.rope = Constraint.create(options);
        World.add(world,this.rope)
}
attach(body){
    this.rope.bodyB = body;
}
fly(){
    this.rope.bodyB = null;
}
display(){
    if(this.rope.bodyB){
var pointA = this.pointA
var pointB = this.rope.bodyB.position
push();
stroke("teal");
strokeWeight(1);
line(pointA.x,pointA.y,pointB.x,pointB.y)
pop();
    }
}
}