
var selector = {
        
    selectArea: function() {
        if (mouseIsPressed && mouseButton === LEFT) {
            selectTime++;
            if (selectX <= mouseX && selectY <= mouseY) {
                if (selectTime < 2) {
                    selectX = mouseX;
                    selectY = mouseY;
                }
                else {
                    selectWidth = mouseX-selectX;
                    selectHeight = mouseY-selectY;
                }
                fill(0,255,255,200);
                rect(selectX, selectY, selectWidth, selectHeight, 2);
            }
            
            
        }
        else {
            selectX = 0;
            selectY = 0;
            selectWidth = 0;
            selectHeight = 0;
            selectTime = 0;
        }
        noStroke();
    }
}