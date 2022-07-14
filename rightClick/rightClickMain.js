rightClickMain = {
    x: 0,
    y: 0,
    clicked: false,
    timeHeld: 0,
    rightClick: function() {
        if (mouseIsPressed && mouseButton == RIGHT && this.timeHeld === 0) {
            this.clicked = true;
            this.x = mouseX;
            this.y = mouseY;
            this.timeHeld = 1;

        }
        if (this.clicked) {
            fill(200)
            rect(this.x,this.y,80,80,2);

        }
        if (mouseIsPressed && mouseButton == LEFT) {
            this.timeHeld = 0;
            this.clicked = false;
        }
        if (mouseIsPressed == false) {
            this.timeHeld = 0;
        }
    },
}