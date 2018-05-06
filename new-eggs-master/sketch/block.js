function Block(x,y){
    this.x = x;
    this.y = y;
    // this.color = random (255);
    this.w=80;
    this.h=80;

    this.top = this.x-this.w/2;
    this.bottom = this.x +this.w/2;

    this.show=function(){
        ellipseMode(CENTER);
        fill ('#f1f2e5');
        //rect (this.x, this.y, 40,20);
        push();
        ellipse(this.x+75, this.y+100, 80,80);
        //255, 204, 0 yellow
        fill ("#f6c56d");
        noStroke();
        ellipse(this.x+70, this.y+100, 40,40);
        noStroke();
        pop();
    }
}