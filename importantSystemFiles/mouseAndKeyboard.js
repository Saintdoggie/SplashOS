function mouse() {
    fill(255);
    stroke(0);
    strokeWeight(3)
    if (mouseIsPressed) {
        fill(100)
    }
    ellipse(mouseX,mouseY,20,20);
    fill(0)
    noStroke()
    text(mouseX + ", " + mouseY + ",  " + taskbar.barThing + ", " + taskbar.barTime,12,12)
}

var keys = [];
    function keyPressed() {
        keys[keys] = true;
    }
    function keyReleased() {
        keys[keys] = false;
    }