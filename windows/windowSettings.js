var winSettings = {
    0: {
        name: "settings",
        width: 600,
        height: 600,
        x: 200,
        y: 200,
        initDone: false,
        init: function() {
            this.page = "none";
        },
        innerContent: function() {
            fill(255)
            noStroke()
            rect(0,0,this.width,this.height + 11);
            noStroke();
            //start innercontent
            fill(230);
            rect(1,10,142,this.height);

            fill(220)
            if (mouseX > 3 + this.x && mouseX < 143 + this.x && mouseY > 30 + this.y && mouseY < 60 + this.y) {
                fill(200)
                if (mouseIsPressed) {
                    this.page = "personalization";
                }
            }
            rect(3,30,140,30);
            fill(0)
            textSize(15)
            text("Personalization",20,50)
            

            if (this.page == "personalization") {
                textSize(25);
                text("Set color Theme",253,50);
                fill(255,0,0)
                rect(213,80,60,60)
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