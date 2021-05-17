function preload(){
}

function setup(){
    canvas=createCanvas(510,450);
    canvas.position(50,187);
    img=createCapture(VIDEO);
    img.hide();

    tint_color="";
}

function draw(){
    image(img,0,0,510,450);
    tint(tint_color);

    fill(255,0,0);
    stroke(255,0,0);
    circle(10,10,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(10,460,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(500,10,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(500,460,80);
}

function take_snapshot(){
    save("picture.png");
}
