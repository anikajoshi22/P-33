class Snow{
    constructor(x,y){
        var options = {
            'restitution' : 0.9,
            'friction' : 0.9
            
        }
    this.image= loadImage("snow4.webp");
    this.body = Bodies.circle(x,y,40,40,20,options);
    
    this.radius = 45;
    this.lifetime=100;
    World.add (world,this.body);
    }
    
    changePosition(){
        if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,1400),y:random(0,50)});
        }
        }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
    pop();
    }
}

