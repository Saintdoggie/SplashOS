var theme = [255,255,255]
var backgroundColor = [0,0,255]
var opposingColor = [0,0,0]
var acTheme = "white"

var themes = {
    set: function(color) {
        if (color == "red") {
            main = [255,0,0]
            backgroundColor = [255,0,0]
            theme = [0,0,0]
            opposingColor = [255,255,255]
            acTheme = "black";


        }
        if (color == "blue") {
            theme = [255,255,255]
            backgroundColor = [0,0,255]
            opposingColor = [0,0,0]
            acTheme = "white";

        }
        
        if (color == "green") {
            theme = [255,255,255]
            backgroundColor = [0,255,255]
            opposingColor = [0,0,0]
            acTheme = "white";
            console.log("this is not done, stuff might be glitchy...")
        }
    },
}