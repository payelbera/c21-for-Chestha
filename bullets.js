class bullet{
    constructor(x,y,weight, speed){
        this.weight=weight;
        this.speed=speed;
        this.velocityX=this.speed;
        this.width=35;
        this.heigth=5;
        this.x = x;
        this.y = y;
        this.bullet = createSprite(this.x,this.y,this.width,this.height);
        this.bullet.velocityX = this.speed;
        this.bullet.shapeColor = "white";
        
        
    }

display() {
    
    drawSprites();
}

changeColor(color){
    this.bullet.shapeColor = color;
}

isTouchingwall(wall,bullet){
    var bulletRightEdge=this.bullet.x+this.bullet.width/2;
    console.log("bulletRightEdge :"+bulletRightEdge)
    console.log("isTouchingwall")
    var wallLeftEdge=wall.x- wall.width/2;
    console.log("wallLeftEdge :"+wallLeftEdge)
    if(bulletRightEdge>=wallLeftEdge){
        console.log("art");
        return true;
    }
    else{
        return false;
    }
  }
  collition(){
      this.bullet.collide(wall);
  }
}