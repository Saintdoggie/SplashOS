var windows = {
    backgroundWorkers: {},
    run: function(id = 0) {
        if (apps[id].main == true) {
            
        }
        
        if (apps[id].initDone == false) {
            if (apps[id].hasOwnProperty("backgroundWorker") == true) {
                this.backgroundWorkers.push = structuredClone(apps[id].backgroundWorker());

            }
            apps[id].init();
            apps[id].initDone = true;
        }
        if (apps[id].fullScreen == true) {
                apps[id].x = 0;
                apps[id].y = 0;
                apps[id].width = 1000;
                apps[id].height = 940;
        }
        if (apps[id].fullScreen == false) {
            apps[id].width = 600;
            apps[id].height = 600;
        }
        translate(apps[id].x,apps[id].y);
        if (apps[id].followMode === true) {
            apps[id].x = mouseX;
            apps[id].y = mouseY;
            selector.selectAble = false;
            if (mouseIsPressed === false) {
                apps[id].followMode = false;
                selector.selectAble = false;
            }
        }
        
        apps[id].innerContent();
        fill(200);
        rect(0,0,apps[id].width,20);
        fill(255, 0, 0);
        ellipse(10,10,15,15);
        
        
        if (mouseX > apps[id].x + 5 && mouseX < apps[id].x + 20 && mouseY > apps[id].y + 5 && mouseY < apps[id].y + 20) {
            mouseHand = true;
            if (mouseIsPressed) {
                apps[id].followMode = false;
                apps[id].doOnClose()
            }
        }
        else if (mouseX > apps[id].x + 25 && mouseX < apps[id].x + 40 && mouseY > apps[id].y + 5 && mouseY < apps[id].y + 20) {
            mouseHand = true;
            if (mouseIsPressed && apps[id].fullScreen == false) {
                apps[id].fullScreen = true;
            }
            else if (mouseIsPressed && apps[id].fullScreen == true) {
                apps[id].fullScreen = false;
            }

        }
        
        else {}
            if (mouseX > apps[id].x && mouseX < apps[id].x + apps[id].width && mouseY > apps[id].y && mouseY < apps[id].y + 20 && mouseIsPressed) {
                apps[id].followMode = true;
            }
            if (mouseX > apps[id].x && mouseX < apps[id].x + apps[id].width && mouseY > apps[id].y && mouseY < apps[id].y + apps[id].h && mouseIsPressed) {
                apps[id].followMode = true;
                selector.selectAble = false;
            }
        
        if (apps[id].x > 960) {
            apps[id].x = 960;
        }
        if (apps[id].y > 920) {
            apps[id].y = 920;
        }
        if (apps[id].x < 0) {
            apps[id].x = 0;
        }
        if (apps[id].y < 0) {
            apps[id].y = 0;
        }
        if (mouseX > apps[id].x && mouseX < apps[id].x + apps[id].width && mouseY > apps[id].y && mouseY < apps[id].y + apps[id].width && mouseIsClicked) {
            apps[id].main = true;
        }
        fill(150,255,10);
        ellipse(30,10,15,15);
        resetMatrix();
        
},
    id: [],
    ids: function() {
        this.id = Object.keys(apps)
        for (let id = this.id.length; id--; id === 0) {
            if (apps[id].open == true) {
                windows.run(id);    
            }        
            else {
                apps[id].followMode = false;
            }
            if (apps[id].hasOwnProperty("backgroundWorker") == true) {
                apps[id].backgroundWorker()
            }
            
        }
    },
    closeApp: function(appName) {
        for (let id = this.id.length; id--; id === 0) {
            if (apps[id].name == appName) {
                apps[id].open = false;
                return "done!"    
            } 
            
        }
    },
    openApp: function(appName) {
        for (let id = this.id.length; id--; id === 0) {
            if (apps[id].name == appName) {
                apps[id].open = true;
                return "done!"    
            } 
            
        }
    },
};