var blockedChars = function() {
    if (keyCode !== 8 && keyCode !== ENTER && keyCode !== 16 && keyCode !== CONTROL && keyCode !== 157 && keyCode !== 18 && keyCode !== 20 && keyCode !== 39 && keyCode !== 37 && keyCode !== 38 && keyCode !== 40 && keyCode !== 35 && keyCode !== 34 && keyCode !== 9 && keyCode !== 117 && keyCode !== 118 && keyCode !== 119 && keyCode !== 120 && keyCode !== 121 && keyCode !== 122 && keyCode !== 123 && keyCode !== 46 && keyCode !== 36 && keyCode !== 45 && keyCode !== 33 && keyCode !== 19 && keyCode !== 145 && keyCode !== 42 && keyCode !== 93 && keyCode !== 27 && keyCode !== 0 && keyCode !== 91  && keyCode !== 144) {
        return false;
    }
    else {
        return true;
        
    }
}
function errorMessage() {
    console.log("if your seeing errors...  why are you on firefox");
}
function checkSize() {
    let box = document.getElementById('body');
    var width = box.offsetWidth;
    var height = box.offsetHeight;
}

function checkBox(x,y,ifOff,ifOn) {
    if (acTheme == "black") {
        fill(opposingColor[0], opposingColor[1], opposingColor[2]);
    }
    if (acTheme == "white") {
        fill(opposingColor[0], opposingColor[1], opposingColor[2]);
    }
    if (mouseX > x && mouseX < x + 20) {
        if (acTheme == "black") {
            fill(opposingColor[0] - 100, opposingColor[1] - 100, opposingColor[2] - 100);
        }
        if (acTheme == "white") {
            fill(opposingColor[0] + 100, opposingColor[1] + 100, opposingColor[2] + 100);
        }
        
    }
    rect(x,y,20,20,5);
}
function header2(textStuff, x,y) {
    if (acTheme == "black") {
        fill(opposingColor[0] - 100, opposingColor[1] - 100, opposingColor[2] - 100);
    }
    if (acTheme == "white") {
        fill(opposingColor[0] + 100, opposingColor[1] + 100, opposingColor[2] + 100);
    }
    textSize(14)
    text(textStuff,x,y);
}
