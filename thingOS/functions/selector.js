
var selector = {
    selectAble: true,
    selectTime: 0,
    selectX: 0,
    selectY: 0,
    selectWidth: 0,
    selectHeight: 0,
    selectArea: function() {
        if (mouseIsPressed && mouseButton === LEFT && this.selectAble == true) {
            this.selectTime++;
            if (this.selectX <= mouseX && this.selectY <= mouseY) {
                if (this.selectTime < 2) {
                    this.selectX = mouseX;
                    this.selectY = mouseY;
                }
                else {
                    this.selectWidth = mouseX-this.selectX;
                    this.selectHeight = mouseY-this.selectY;
                }
                fill(theme[0],theme[1],theme[2], 100);
                noStroke();

                rect(this.selectX, this.selectY, this.selectWidth, this.selectHeight, 5);
                noStroke();
            }
            
            
        }
        else {
            this.selectX = 0;
            this.selectY = 0;
            this.selectWidth = 0;
            this.selectHeight = 0;
            this.selectTime = 0;
            this.selectAble = true;

        }
       
        
        noStroke();
    }
}