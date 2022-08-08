var windows = {
    backgroundWorkers: {},
    selectedApp: [],
    allowOnLogIn: false,
    init: function() {
        
        for (let i = Object.keys(apps).length; i--; i <= 0) {
            apps[i].xPlus = 0;
            apps[i].yPlus = 0;
            
        }
        for (let i = Object.keys(apps).length; i--; i <= 0) {
            apps[i].focused = false;
            
        }
        for (let i = Object.keys(apps).length; i--; i <= 0) {
            this.id.push(apps[i])
            
        }

    },
    run: function(id) {
        this.followBlock = false;
        
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
                apps[id].width = width;
                apps[id].height = height - 60;
        }
        translate(apps[id].x,apps[id].y);
        if (apps[id].followMode == true) {
            //console.log(apps[id].name + ": X: " + apps[id].x + " , " + apps[id].y)
            apps[id].x = mouseX + apps[id].xPlus;
            apps[id].y = mouseY + apps[id].yPlus;
            selector.selectAble = false;
            if (mouseIsPressed == false) {
                apps[id].followMode = false;
                selector.selectAble = false;
                console.log(apps[id].name + " stopped moving")
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
                console.log(apps[id].name + " closed")
            }
        }
        else if (mouseX > apps[id].x + 25 && mouseX < apps[id].x + 40 && mouseY > apps[id].y + 5 && mouseY < apps[id].y + 20) {
            mouseHand = true;
            if (mouseIsClicked && apps[id].fullScreen == false) {
                console.log(apps[id].name + " fullscreened")
                apps[id].fullScreen = true;
            }
            else if (mouseIsClicked && apps[id].fullScreen == true) {
                apps[id].fullScreen = false;
                console.log(apps[id].name + " not fullscreened")

            }

        }
        
        else {}
            if (mouseX > apps[id].x && mouseX < apps[id].x + apps[id].width && mouseY > apps[id].y && mouseY < apps[id].y + 20 && mouseIsPressed) {
                for (let i = Object.keys(apps).length; i--; i <= 0) {
                    if (apps[i].followMode == true) {
                        this.followBlock = true;
                        
                    }
                    
                }
                if (this.followBlock == false) {
                    apps[id].xPlus = apps[id].x - mouseX;
                    apps[id].yPlus = apps[id].y - mouseY;
                    apps[id].followMode = true;
                    console.log(apps[id].name +  " moving")

                    for (let i = Object.keys(apps).length; i--; i <= 0) {
                        apps[i].focused = false;   
                    }
                    apps[id].focused = true;
                }
                
            }
            if (mouseX > apps[id].x && mouseX < apps[id].x + apps[id].width && mouseY > apps[id].y && mouseY < apps[id].y + apps[id].h && mouseIsPressed) {
                
                for (let i = Object.keys(apps).length; i--; i <= 0) {
                    apps[i].focused = false;   
                }
                apps[id].focused = true;
                apps[id].followMode = true;
                console.log(apps[id].name +  " moving")
                selector.selectAble = false;
                 
            }
        
        if (apps[id].x > width - 40) {
            apps[id].x = width - 40;
        }
        if (apps[id].y > height - 80) {
            apps[id].y = height - 80;
        }
        if (apps[id].x < 0) {
            apps[id].x = 0;
        }
        if (apps[id].y < 0) {
            apps[id].y = 0;
        }
        if (mouseX > apps[id].x && mouseX < apps[id].x + apps[id].width && mouseY > apps[id].y && mouseY < apps[id].y + apps[id].width && mouseIsClicked) {
            for (let i = Object.keys(apps).length; i--; i <= 0) {
                apps[i].focused = false;   
            }
            apps[id].focused = true;
        }
        fill(150,255,10);
        ellipse(30,10,15,15);
        resetMatrix();
        
},
    id: [],
    ids: function() {
        for (let id = this.id.length; id--; id <= 0) {
            if (apps[id].open == true) {
                if (apps[id].open == true && apps[id].focused == false) {
                        windows.run(id);       
                }
                if (apps[id].hasOwnProperty("backgroundWorker") == true) {
                    apps[id].backgroundWorker()
                }
            
            }
        }
        
        for (let i = Object.keys(apps).length; i--; i <= 0) {
            if (apps[i].open == true && apps[i].focused == true) {
                windows.run(i);    
            }
            else if (apps[i].open == false) {
                apps[i].followMode = false;
            }
            if (apps[i].hasOwnProperty("backgroundWorker") == true) {
                apps[i].backgroundWorker()
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