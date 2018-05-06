//by yunzhu
var player;
var blocks = [];
var b;
var mode = 0;
var angry;
var sad;
var surprised;
var happiness;

// var coins;
// var score=0;


function preload() {
    happy = loadFont('/eggs/sketch/KGHAPPY.ttf');
    song1 = loadSound('/eggs/sketch/POP.WAV');
    song2 = loadSound('/eggs/sketch/morning.mp3');
}

function setup() {
    createCanvas(900, 600);
    // song2.play();
    // coins = new Group();

    player = new Player();
    b = new Ball();
    for (var i = 0; i < 3; i++)
        for (var j = 0; j < 10; j++)
            blocks.push(new Block(j * 80, i * 80));
}


function draw() {
    background("lightblue");
    angry = parent.document.getElementById("angry").innerHTML
    sad = parent.document.getElementById("sad").innerHTML
    surprised = parent.document.getElementById("surprised").innerHTML
    happiness = parent.document.getElementById("happy").innerHTML
    // console.log(angry, sad, surprised, happiness);
    if (mode === 0) {
        textFont(happy);

        fill('#f1f2e5');
        textSize(20);
        text('Yunzhu \'s Egg House', 300, 20);
        if (parent.document.getElementById("start").innerHTML === "start") {
            player.move();
            b.move();
        }
        player.show();

        for (var i = 0; i < blocks.length; i++) {
            blocks[i].show();
            if (b.collision(blocks[i])) {
                b.vy = -b.vy;
                blocks.splice(i, 1);
                // coins.add(c);
                // song1.play();
            }
        }
        if (b.collision(player))
            b.vy = -b.vy;
        if (b.y < 0)
            b.vy = -b.vy;
        b.show();

        if (blocks.length > 0) {
            // text(score, width/2, height/2);
        }
        else {
            text("you win!", width / 2, height / 2);
        }
        if (b.y >= height) {
            mode = 1;
        }
    }

    if (mode === 1) {
        fill("#f6c56d");
        noStroke();
        rect(100, 100, 700, 500);
        textSize(45);
        text("Replay", 430, 400);
        fill(50);
        rect(363, 400, 160, 55);
        textSize(70);
        text("YOU LOST", 250, 300);
        fill(255);
        textSize(35);
        text("Replay", 368, 440);
    }
}


function mousePressed() {
    // if((mouseX <= 423) && (mouseX >= 263) && (mouseY <= 355) && (mouseY >= 300)){
    reset();
    // }
}

function reset() {
    blocks = [];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 10; j++) {
            blocks.push(new Block(j * 80, i * 80));
        }
    }
    mode = 0;
    player.set(width / 2, height -30);
    b.set(width / 2, height / 2);
}