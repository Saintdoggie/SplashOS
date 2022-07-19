var windows = {
    run: function(id = 0) {
        
        
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
        if (winSettings[id].followMode === true) {
            winSettings[id].x = mouseX;
            winSettings[id].y = mouseY;
            selector.selectAble = false;
            if (mouseIsPressed === false) {
                winSettings[id].followMode = false;
                selector.selectAble = false;
            }
        }
        winSettings[id].innerContent();
        fill(200);
        rect(0,0,winSettings[id].width,20);
        fill(255, 0, 0);
        ellipse(10,10,15,15);
        
        
        if (mouseX > winSettings[id].x + 5 && mouseX < winSettings[id].x + 20 && mouseY > winSettings[id].y + 5 && mouseY < winSettings[id].y + 20) {
            mouseHand = true;
            if (mouseIsPressed) {
                winSettings[id].followMode = false;
                winSettings[id].doOnClose()
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
            if (mouseX > winSettings[id].x && mouseX < winSettings[id].x + winSettings[id].width && mouseY > winSettings[id].y && mouseY < winSettings[id].y + 20 && mouseIsPressed) {
                winSettings[id].followMode = true;
            }
            if (mouseX > winSettings[id].x && mouseX < winSettings[id].x + winSettings[id].width && mouseY > winSettings[id].y && mouseY < winSettings[id].y + winSettings[id].h && mouseIsPressed) {
                winSettings[id].followMode = true;
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
                windows.run(id);    
            }        
            else {
                winSettings[id].followMode = false;
            }
            
        }
    }
};