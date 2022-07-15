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
    ellipse(mouseX,mouseY,20,20);
    fill(0)
    noStroke()
}

var keys = [];
    function keyPressed() {
        keys[keys] = true;
    }
    function keyReleased() {
        keys[keys] = false;
    }