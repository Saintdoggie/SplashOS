var windows = {
    new: function(x,y,w,h,doOnClose = function() {}, insideContent = function() {}, id = 0) {
        
        if (this.id[id[0]] == false) {
            return;
        }
        this.id.splice(id,1,true);
        translate(x,y);
        if (this.followMode === true) {
            x = mouseX;
            y = mouseY;
            if (mouseReleased === false) {
                this.followMode = false;
            }
        }
        insideContent();
        fill(200);
        rect(0,0,w,20);
        fill(255, 0, 0);
        ellipse(10,10,15,15);
        if (mouseX > x + 5 && mouseX < x + 20 && mouseY > y + 5 && mouseY < y + 20) {
            mouseHand = true;
            if (mouseIsPressed) {
                this.id[id[0]] = false;
                this.id[id[1]] = false;

                doOnClose();
            }
        }
        else {}
            if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h && mouseIsPressed) {
                x = mouseX;
                y = mouseY;
            }
        

        
        
        
        fill(150,255,10);
        ellipse(30,10,15,15);
        resetMatrix();
        
},
    id: [],
    ids: function() {
        if (this.id[0[0]] == true) {
            windows.new(200,200,400,400, function() {return;}, function() {
                rect(0,0,400,400);
            });
            
        }
    }
};