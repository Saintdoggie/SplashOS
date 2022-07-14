var taskbar = {
    init: function() {
        this.x = 10;
        this.y = 1100;
        this.barThing = false;
        this.barTime = 10;
    },
    bar: function() {
    fill(0,0,0,200)
    rect(0,940,1000,60); 
    fill(200)
    if (this.barTime < 12) {
        this.barTime++;
    }
    if (mouseX > 10 && mouseX < 110 && mouseY > 950 && mouseY < 990) {
        fill(150)
        if (mouseIsPressed) {
            if (this.barTime > 10 && this.barThing == false && mouseButton == LEFT) {
                this.barThing = true
                this.barTime = 0;
            }
            else if (this.barTime > 10 && this.barThing == true && mouseButton == LEFT) {
                this.barThing = false;
                this.barTime = 0;
            }
        }
    }
    rect(10,950,100,40,5)
    },
    box: function() {
        if (this.barThing == true) {
            if (this.y > 700) {
                this.y-=30;
            }
            if (mouseX > 10 && mouseX < 110 && mouseY > 950 && mouseY < 990) {
                this.mouseOverBar = true;
            }
            else {
                this.mouseOverBar = false;
            }
            if (mouseIsPressed && this.mouseOverBar == false) {
                
                this.barThing = false;
            
            }
                
                    
                
        }
        else {
            if (this.y < 1100) {
                this.y+=30;
            }
        }
        fill(200,200,200)
        rect(this.x,this.y,300,230,4)

    }
}