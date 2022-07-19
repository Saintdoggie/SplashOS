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
            selector.selectAble = false;
            fill(200);
            rect(this.x,this.y,150,70,3);
            fill(220);
            if (mouseX > this.x && mouseX < this.x + 150 && mouseY > this.y && mouseY < this.y + 35) {
                fill(200)
                if (mouseIsClicked) {
                    winSettings[0].open = true;
                    this.clicked = false;
                }
            }
            rect(this.x,this.y,150,35,3);
            fill(0)
            textSize(20);
            text("Settings",this.x + 15,this.y + 25)

            fill(220);
            if (mouseX > this.x && mouseX < this.x + 150 && mouseY > this.y + 35 && mouseY < this.y + 70) {
                fill(200)
                if (mouseIsClicked) {
                    winSettings[1].open = true;
                    this.clicked = false;
                }
            }
            rect(this.x,this.y+35,150,35,3);
            fill(0);
            textSize(20);
            text("Debug",this.x + 15,this.y + 60);
        }
        else {
            selector.selectAble = true;
        }
        if (mouseIsClicked) {
            if (mouseX > this.x && mouseX < this.x + 150 && mouseY > this.y && mouseY < this.y + 70) {}
            else {
                this.timeHeld = 0;
                this.clicked = false;
            }
        }
        if (mouseIsPressed == false) {
            this.timeHeld = 0;
        }
    },
}