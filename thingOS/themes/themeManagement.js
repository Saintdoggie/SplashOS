var theme = [0,0,0]
var backgroundColor = [0,0,255]
var opposingColor = [255,255,255]
var acTheme = "black"
var colorTheme = [0,0,255]

var themes = {
    set: function(color) {
        if (color == "red") {
            settings.themes.background.color = [255,0,0]
            colorTheme = [255,0,0]

        }
        if (color == "blue") {
            settings.themes.background.color = [0,0,255]
            colorTheme = [0,0,255]
        }
        
        if (color == "green") {
            settings.themes.background.color = [100, 255, 100]
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