const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1,ground3,ground3;
var engine, world;
var position;
var angle;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var ball1,polygonimage;
var rope1;
var bg;
var score=0;

function setup(){
    createCanvas(1440,800);
    engine = Engine.create();
    world = engine.world;

    //creating ball
    ball1 = new ball(50,50,20,20);
    ball1.scale = 0.1;
    //creating base one
    ground1 = new ground(580,700,350,20);
    //creating base two
    ground2 = new ground(1040,500,250,20);

    //creating ground
    ground3 = new ground(720,800,1440,40);
    
    //test

    //creating the boxes
     box1 = new box(460,650,40,70);
     box2 = new box(500,650,40,70);
     box3 = new box(500,600,40,70);
     box4 = new box(540,650,40,70);
     box5 = new box(540,600,40,70);
     box6 = new box(540,520,40,70);
     box7 = new box(580,650,40,70);
     box8 = new box(580,600,40,70);
     box9 = new box(580,550,40,70);
     box10 = new box(580,500,40,70);
     box11 = new box(620,650,40,70);
     box12 = new box(620,600,40,70);
     box13 = new box(620,550,40,70);
     box14 = new box(660,650,40,70);
     box15 = new box(660,600,40,70);
     box16 = new box(700,650,40,70);
     box17 = new box(950,450,40,70);
     box18 = new box(990,450,40,70);
     box19 = new box(990,400,40,70);
     box20 = new box(1030,450,40,70);
     box21 = new box(1030,400,40,70);
     box22 = new box(1030,350,40,70);
     box23 = new box(1070,450,40,70);
     box24 = new box(1070,400,40,70);
     box25 = new box(1110,450,40,70);


    //creating rope
    rope1 = new rope({x : 200,y : 500},ball1.body);
    
}
function preload(){
    backgroundimage();

}
function draw(){
    background("backgroundImg");
    Engine.update(engine);

    //displaying the boxes
    fill("lightpink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    ball1.display();


    //displaying base one and two
    fill("lavender");
    ground1.display();
    ground2.display();
    
    //displaying ground
    fill("lightyellow");
    ground3.display();

    //displaying the rope
    rope1.display();

    //displaying the text
    textSize(25);
    fill("purple");
    text("drag & release the hexagon to remove the blocks",470,100);
    text("press space to return the stone",550,150);
    text("score:"+score,650,200)
    box1.score();
    box2.score();
    box2.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
}


function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x:mouseX , y:mouseY});
}


function mouseReleased(){
    rope1.fly();
}

function keyPressed(){
    if(keyCode === 32){
        rope1.attach(ball1.body);
    }
}
async function backgroundimage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson= await response.json();
    var datetime= responseJson.datetime();
    var hour = datetime.slice(11,13);
    if(hour>=6 && hour<=19){
        bg=("lightblue.png");
    }
    else{
        bg = ("darkblue.png");
    }
    backgroundImg= loadImage(bg);
}