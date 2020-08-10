class Box{
  constructor(x,y,width,height){
   var options={
   isStatic:false,
   resitution:0.5/4,
   friction:5
}
this.image=loadImage("Image/BALL_IMAGE_SEPERATE");
this.body = Bodies.rectangle(x,y,width,height,options);
World.add(world, this.body);

  }
  display(){
   var pos=this.body.position
   fill(163, 228, 215 );
   strokeWeight(5)
   imageMode(CENTER)
   image(this.image, 0, 0, this.width, this.height);
   rect(pos.x, pos.y, this.width, this.height);
   }

}