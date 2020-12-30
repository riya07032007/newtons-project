class Paper {
    constructor(x,y,r) {
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }

      
     
      this.body = Bodies.circle(x,y+40,r-30,options);
      this.r=r-30
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var paperPos =this.body.position;
      var angle=this.body.angle
      push()
      translate(paperPos.x,paperPos.y)
      imageMode(CENTER)
      image(this.image,0,0,55,60)
      pop()
    }
  };




