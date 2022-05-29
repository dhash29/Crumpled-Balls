//class GroundObj{
    //constructor(x, y, w, h){
        //this.x = x
        //this.y = y
        //this.w = w
        //this.h = h

        //var GroundOptions =  {
            //IsStatic:true
        //}        

        //this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, GroundOptions)
       //World.add(world, this.body)
    //}

     //show(){
        //rect(this.x, this.y, this.w, this.h)
       // push();
        //rectMode(CENTER);
        //stroke(255);
       // fill(127);
        //rect(this.x, this.y, this.w, this.h);
       // pop();
      //}
    //}

    class GroundObj
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}

