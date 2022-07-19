var windows = {
    run: function(x,y,w,h,doOnClose = function() {}, insideContent = function() {}, id = 0) {
        
        
        if (winSettings[id].initDone == false) {
            winSettings[id].init();
            winSettings[id].initDone = true;
        }
        if (winSettings[id].fullScreen == true) {
                winSettings[id].x = 0;
                winSettings[id].y = 0;
                winSettings[id].width = 1000;
                winSettings[id].height = 940;
        }
        if (winSettings[id].fullScreen == false) {
            winSettings[id].width = 600;
            winSettings[id].height = 600;
        }
        translate(winSettings[id].x,winSettings[id].y);
        if (this.followMode === true) {
            winSettings[id].x = mouseX;
            winSettings[id].y = mouseY;
            selector.selectAble = false;
            selector.selectAble = false;
            if (mouseIsPressed === false) {
                this.followMode = false;
                selector.selectAble = false;
            }
        }
        insideContent();
        fill(200);
        rect(0,0,winSettings[id].width,20);
        fill(255, 0, 0);
        ellipse(10,10,15,15);
        
        
        if (mouseX > winSettings[id].x + 5 && mouseX < winSettings[id].x + 20 && mouseY > winSettings[id].y + 5 && mouseY < winSettings[id].y + 20) {
            mouseHand = true;
            if (mouseIsPressed) {
                this.followMode = false;
                doOnClose()
            }
        }
        else if (mouseX > winSettings[id].x + 25 && mouseX < winSettings[id].x + 40 && mouseY > winSettings[id].y + 5 && mouseY < winSettings[id].y + 20) {
            mouseHand = true;
            if (mouseIsPressed && winSettings[id].fullScreen == false) {
                winSettings[id].fullScreen = true;
            }
            else if (mouseIsPressed && winSettings[id].fullScreen == true) {
                winSettings[id].fullScreen = false;
            }

        }
        
        else {}
            if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + 20 && mouseIsPressed) {
                this.followMode = true;
            }
            if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h && mouseIsPressed) {
                selector.selectAble = false;
            }
        
        if (winSettings[id].x > 960) {
            winSettings[id].x = 960;
        }
        if (winSettings[id].y > 920) {
            winSettings[id].y = 920;
        }
        if (winSettings[id].x < 0) {
            winSettings[id].x = 0;
        }
        if (winSettings[id].y < 0) {
            winSettings[id].y = 0;
        }
        fill(150,255,10);
        ellipse(30,10,15,15);
        resetMatrix();
        
},
    id: [],
    ids: function() {
        this.id = Object.keys(winSettings)
        for (let id = this.id.length; id--; id === 0) {
            if (winSettings[id].open == true) {
                windows.run(winSettings[id].x,winSettings[id].y,winSettings[id].width,winSettings[id].height, function() {winSettings[id].doOnClose()}, function() {winSettings[id].innerContent()}, id);    
            }        
            
        }
    }
};