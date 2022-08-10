var taskbar = {
    init: function() {
        this.x = 10;
        this.y = 1100;
        this.barThing = false;
        this.barTime = 10;
        this.boxTyped = "";
    },
    bar: function() {
        fill(0,0,0,200)
        rect(0,height - 60,width,60); 
        fill(200)
        if (this.barTime < 12) {
            this.barTime++;
        }
        if (mouseX > 10 && mouseX < 110 && mouseY > height - 50 && mouseY < height - 10) {
            fill(150)
            if (mouseIsClicked) {
                if (this.barTime > 10 && this.barThing == false && mouseButton == LEFT) {
                    this.barThing = true;
                    this.boxTyped = "";
                    this.barTime = 0;
                }
                else if (this.barTime > 10 && this.barThing == true && mouseButton == LEFT) {
                    this.barThing = false;
                    this.barTime = 0;
                    this.boxTyped = "";

                }
            }
            
        }
        rect(10,height - 50,100,40,5)
        if (this.barThing == false) {
            this.boxTyped = "";
        }
    },
    box: function() {
        if (this.barThing == true) {
            if (this.y > height - 300) {
                this.y-=30 * (deltaTime / 10);
            }
            if (mouseX > 10 && mouseX < 110 && mouseY > height - 50 && mouseY < height - 10) {
                this.mouseOverBar = true;
            }
            else {
                this.mouseOverBar = false;
            }
            if (mouseIsClicked && this.mouseOverBar == false) {
                
                this.barThing = false;
            
            }
                
                    
                
        }
        else {
            if (this.y < height + 100) {
                this.y+=30 * (deltaTime / 10);
            }
        }
        fill(200,200,200);
        rect(this.x,this.y,300,230,4);
        fill(0,0,0,200);
        rect(this.x + 20, this.y + 20, 250,50,4);
        if (keyCode === 8 && keyIsPressed) {
            this.boxTyped = this.boxTyped.slice(0,this.boxTyped.length-1);
            keyIsPressed = false;
        }
        if (keyCode !== 8 && this.boxTyped.length < 15 && keyCode !== ENTER && keyIsPressed && blockedChars() == false) {
            this.boxTyped+=key.toString();
            keyIsPressed = false;
        }
        if (keyCode === ENTER && keys) {
            for (let id = windows.id.length; id--; id === 0) {
                if (this.boxTyped == apps[id].name) {
                    apps[id].open = true;
                }
            }
        
        }
        fill(255,255,255,200);
        textSize(25)
        text(this.boxTyped.toLowerCase() + "|",this.x + 30, this.y + 50)

    }
}
