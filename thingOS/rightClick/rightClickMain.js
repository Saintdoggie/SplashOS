rightClickMain = {
    x: 0,
    y: 0,
    clicked: false,
    timeHeld: 0,
    barHeight: 35,
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
            rect(this.x,this.y,150,35,3);
            fill(220);
            if (mouseX > this.x && mouseX < this.x + 150 && mouseY > this.y && mouseY < this.y + 35) {
                fill(200)
                if (mouseIsClicked) {
                    apps[0].open = true;
                    this.clicked = false;
                }
            }
            rect(this.x,this.y,150,this.barHeight,3);
            fill(0)
            textSize(20);
            text("Settings",this.x + 15,this.y + 25)

        }
        if (mouseIsClicked) {
            if (mouseX > this.x && mouseX < this.x + 150 && mouseY > this.y && mouseY < this.y + 70) {}
            else {
                this.timeHeld = 0;
                this.clicked = false;
                selector.selectAble = false;
            }
        }
        if (mouseIsPressed == false) {
            this.timeHeld = 0;
        }
    },
    addRightClick: function(x,y,w,h,name,doesSomething) {
        return;
        //not done, also it kinda sucks
        let init = function() {
            var done = false;
            if (!done) {
                done = true;
                this.barHeight+=35;
            }
        }
        if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
            if (this.clicked == true) {
                init();
                this.barHeight+=35;
            }   
    }
    },
}