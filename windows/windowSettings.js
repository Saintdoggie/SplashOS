var winSettings = {
    0: {
        name: "settings",
        width: 600,
        height: 600,
        x: 200,
        y: 200,
        innerContent: function() {
            rect(0,0,this.width,this.height);
        },
        doOnClose: function() {
            winSettings[0].open = false;
        },
        open: false,
        fullScreen: false,

    }
}