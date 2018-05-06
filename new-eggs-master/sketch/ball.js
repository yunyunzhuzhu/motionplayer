function Ball(){
    this.x =width/2;
    this.y =height/2;
    this.radius=25;
    this.vx =4;
    this.vy =4;

    this.show = function(){
        fill("white");
        ellipse (this.x,this.y, this.radius,this.radius);
    }

    this.move=function(){
        this.x +=this.vx;
        this.y +=this.vy;
        if (this.x > width ||this.x < 0)
            this.vx=-this.vx;

    }

    this.set = function (x, y) {
        this.x = x;
        this.y = y;
    }

    this.collision = function(e){
        if(this.y <= e.y+e.h+20 && this.y>=e.y-e.h-20)
            if (this.x>=e.top && this.x <=e.bottom)
                return true;
        return false;
    }
// 	var failGet = this.y > height;

//   if(failGet){
// 		mode=1;
// 	}

}