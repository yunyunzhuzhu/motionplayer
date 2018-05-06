function Player(){
    this.x = width/2;
    this.y =height -30;
    this.w =120;
    this.h =10;
    this.v=10;
    this.top =this.x-this.w/2;
    this.bottom =this.x+this.w/2;

    this.set = function (x, y) {
        this.x =x;
        this.y =y;
    }
    this.show=function(){
        ellipseMode(CENTER);
        // rectMode(CENTER);
        noStroke();
        fill (0,105,132);
        //rect (this.x, this.y, this.w, this.h);
        //draw

        fill ("grey");
        // stroke("grey");
        rect(this.x+100, this.y-10, this.w/2, this.h);
        fill("#adb8c3")
        rect(this.x+80, this.y-10, this.w/2-20, this.h);
        // stroke("grey");
        fill("#adb8c3")
        arc(this.x, this.y-15, 180, 100, 0, PI , CHORD);
    }

    this.move=function(){
        var factor = Number(happiness)/(Number(happiness)+Number(surprised));
        if (this.x >= 0 && factor >= 0.5) {
            this.x -= 10;
        } else if (this.x <= width && factor < 0.5) {
            this.x += 10;
        }
        this.top =this.x - this.w/2;
        this.bottom =this.x+this.w/2;
    }
}