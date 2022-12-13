var mouseHand = false;
function mouse() {
    fill(255);
    stroke(0);
    strokeWeight(3)
    if (mouseIsPressed) {
        fill(100)
    }
    if (mouseHand == true) {
        fill(255,0,0);
        if (mouseIsPressed) {
            fill(200,0,0)
        }
        mouseHand = false;
    }
    rectMode(CENTER)
    translate (mouseX, mouseY);
    rotate(5);
// 	rect(-10, 10, 20, 20);
    resetMatrix()
    noStroke()
    rectMode(CORNER)

}

var keys = [];
function keyPressed() {
    keys[keyCode] = true;
}
function keyReleased() {
    keys[keyCode] = false;
}

var mouseIsClicked = false;

function mouseClicked() {
    mouseIsClicked = true;
}

