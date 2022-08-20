var taskbar = {
    init: function() {
        this.x = 10;
        this.y = height + 300;
        this.barThing = false;
        this.barTime = 10;
        this.boxTyped = "";
    },
    bar: function() {
        fill(0,0,0,200);
        rect(0,height - 60,width,60); 
        fill(200);
        if (mouseX > 0 && mouseX < 205 && mouseY > height - 50 && mouseY < height - 10) {
            fill(150);
        }
        rect(5, height - 55,200,50,2);
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
                if (this.boxTyped.toLowerCase() == apps[id].name.toLowerCase()) {
                    apps[id].focused = true;
                    apps[id].open = true;
                }
            }
            if (this.boxTyped == "log out") {
                this.barThing = false;
                this.y = height + 300;
                settings.accounts.bootDone = false;
            }
            this.boxTyped = "";
        }
        fill(0);
        textSize(25);
        if (this.boxTyped != "") {
            text(this.boxTyped.toLowerCase() + "|", 10, height - 25);
        }
    },
}
