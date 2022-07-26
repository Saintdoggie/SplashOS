var theme = [255,255,255]
var backgroundColor = [0,0,255]
var opposingColor = [0,0,0]
var acTheme = "white"
var colorTheme = [0,0,255]

var themes = {
    set: function(color) {
        if (color == "red") {
            backgroundColor = [255,0,0]
            colorTheme = [255,0,0]

        }
        if (color == "blue") {
            backgroundColor = [0,0,255]
            colorTheme = [0,0,255]
        }
        
        if (color == "green") {
            backgroundColor = [100, 255, 100]
            colorTheme = [100, 255, 100]
        }
    },
    change: function(thing) {
        if (thing == "white") {
            theme = [255,255,255]
            opposingColor = [0,0,0]
            acTheme = "white";
        }
        if (thing == "black") {
            theme = [0,0,0]
            opposingColor = [255,255,255]
            acTheme = "black";
        }
    }
}