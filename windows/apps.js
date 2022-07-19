var winSettings = {
    0: {
        name: "settings",
        width: 600,
        height: 600,
        x: 200,
        y: 200,
        initDone: false,
        theme: "blue",
        acTheme: "white",
        init: function() {
            this.page = "none";
        },
        innerContent: function() {
            fill(theme[0] - 20)
            rect(0,0,this.width,this.height);
            noStroke();



            //start innercontent
            if (acTheme == "black") {
                fill(theme[1] + 20);
            }
            if (acTheme == "white") {
                fill(theme[1] - 20);
            }

            if (mouseIsPressed) {
                this.page = "personalization";
            }

            line(100,100,100, this.height);
            if (mouseX > 3 + this.x && mouseX < 143 + this.x && mouseY > 30 + this.y && mouseY < 60 + this.y) {
                if (acTheme == "black") {
                    fill(theme[1] + 30);
                }
                if (acTheme == "white") {
                    fill(theme[1] - 30);
                }

                if (mouseIsPressed) {
                    this.page = "personalization";
                }
            }
            if (this.page == "personalization") {
                if (acTheme == "black") {
                    fill(theme[1] + 50);
                }
                if (acTheme == "white") {
                    fill(theme[1] - 50);
                }
            }
            rect(3,30,140,30,5);
            fill(opposingColor)
            textSize(15)
            text("Personalization",20,50)

            if (this.page == "personalization") {
                textSize(25);
                fill(opposingColor)
                text("Set color Theme",this.width / 2 - 100,50);
                fill(255,0,0);
                if (mouseX > (this.width / 3) + this.x && mouseX < (this.width / 3) + 60 + this.x && mouseY > 80 + this.y && mouseY < 140 + this.y) {
                    fill(200,0,0); 
                    if (mouseIsPressed) {
                        themes.set("red");
                        this.theme = "red";
                        
                    }
                } 
                if (this.theme == "red") {
                    stroke(opposingColor);
                    strokeWeight(3);
                }
                else {
                    noStroke();
                }
                rect(this.width / 3,80,60,60,5);

                fill(0,0,255);
                if (mouseX > (this.width / 2) + this.x && mouseX < (this.width / 2) + 60 + this.x && mouseY > 80 + this.y && mouseY < 140 + this.y) {
                    fill(0,0,200); 
                    if (mouseIsPressed) {
                        themes.set("blue");
                        this.theme = "blue";
                    }
                } 
                if (this.theme == "blue") {
                    stroke(opposingColor);
                    strokeWeight(3);
                }
                else {
                    noStroke();
                }
                rect(this.width / 2,80,60,60,5);
                noStroke()
            }

            //end inner content


        },
        doOnClose: function() {
            this.page = "none";
            winSettings[0].open = false;
            winSettings[0].fullScreen = false;
        },
        open: false,
        fullScreen: false,

    },
    1: {
        name: "window",
        width: 200,
        height: 200,
        x: 400,
        y: 400,
        innerContent: function() {
            fill(255)
            stroke(0)
            rect(0,0,this.width,this.height);
            noStroke();
        },
        doOnClose: function() {
            winSettings[1].open = false;
        },
        open: false,
        fullScreen: false,
        initDone: false,
        init: function() {

        },
    },
    
}