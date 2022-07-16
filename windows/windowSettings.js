var winSettings = {
    0: {
        name: "settings",
        width: 600,
        height: 600,
        x: 200,
        y: 200,
        innerContent: function() {
            fill(255)
            stroke(0)
            rect(0,0,this.width,this.height);
            noStroke();

        },
        doOnClose: function() {
            winSettings[0].open = false;
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
    },
    
}