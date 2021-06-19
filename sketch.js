const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var engine, world, bg;

var snow = [];


function preload(){
  bg=loadImage("snow3.jpg");
 
}



function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world= engine.world;
 
  


}



function draw() {
  Engine.update(engine);
  background(bg);
  
 if(frameCount%20 === 0){
   snow.push(new Snow(random(800,400), random(500,100)))
 }
for(var i=0; i<snow.length; i++){
  console.log("snow display")
  snow[i].display();
}

}











