class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
        //this.sling1 = loadImage('sprites/sling1.png');
       
        this.chain = Constraint.create(options);
        World.add(myWorld, this.chain);
    }
   
   show(){
        //image(this.sling1,200,20);
        
     
            var bodyA = this.chain.bodyA.position;
            var bodyB = this.chain.bodyB.position;
           
                strokeWeight(7);
                line(bodyA.x , bodyA.y, bodyB.x , bodyB.y);
               
    }
    
}