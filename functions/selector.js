
var selector = {
    selectAble: true,
    selectArea: function() {
        if (mouseIsPressed && mouseButton === LEFT && this.selectAble == true) {
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
                if (acTheme == "white") {
                    fill(theme[0] - 150, theme[1] - 150, theme[2] - 150, 200);
                }
                if (acTheme == "black") {
                    fill(theme[0] + 150, theme[1] + 150, theme[2] + 150, 200);
                }
                strokeWeight(2);

                rect(selectX, selectY, selectWidth, selectHeight, 2);
                noStroke();
            }
            
            
        }
        else {
            selectX = 0;
            selectY = 0;
            selectWidth = 0;
            selectHeight = 0;
            selectTime = 0;
            this.selectAble = true;

        }
       
        
        noStroke();
    }
}