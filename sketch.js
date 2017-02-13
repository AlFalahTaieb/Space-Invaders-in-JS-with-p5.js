var ship;

function setup() {
createCanvas(600,400);
ship=new ship();
}

function draw() {
  background(51);
}
function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        ship.left();
    } else if (keyCode === LEFT_ARROW){
        ship.right();
    }
}