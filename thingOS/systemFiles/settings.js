var settings = {
    displayGUI: function() {
        background(settings.themes.background.color[0], settings.themes.background.color[1], settings.themes.background.color[2]);

        selector.selectArea();

        windows.ids();

        if (this.taskbar.isDock == false) {
            this.taskbar.panel();
        }
        else if (this.taskbar.isDock == true) {
            this.taskbar.dock();
        }
        this.taskbar.displayTime();

        rightClickMain.rightClick();

        mouse();


    },
    themes: {
        background: {
            isPicture: false,
            color: [0,0,255],
            picturePath: "",
        },
    },
    taskbar: {
        isDock: false,
        init: function() {
            this.x = 10;
            this.y = height + 300;
            this.barThing = false;
            this.barTime = 10;
            this.boxTyped = "";
        },
        panel: function() {
            fill(0);
            drawingContext.filter = 'blur(40px)'
            
            rect(-10,height,width + 10,60); 
            drawingContext.filter = 'blur(0px)'

            fill(0,0,0,127.5)
            rect(0,height - 60,width,60); 

            fill(0,0,0,200);


            // if (mouseX > 0 && mouseX < 205 && mouseY > height - 50 && mouseY < height - 10) {
            //     fill(150);
            // }
            // rect(5, height - 55,200,50,2);
            if (keyCode === 8 && keyIsPressed) {
                this.boxTyped = this.boxTyped.slice(0,this.boxTyped.length-1);
                keyIsPressed = false;
            }
            if (keyCode !== 8 && this.boxTyped.length < 15 && keyCode !== ENTER && keyIsPressed && blockedChars() == false) {
                this.boxTyped+=key;
                keyIsPressed = false;
            }
            if (keyCode === ENTER && keyIsPressed) {
                for (let id = Object.keys(apps).length; id--; id === 0) {
                    if (this.boxTyped.toLowerCase() == apps[id].name.toLowerCase()) {
                        apps[id].focused = true;
                        apps[id].open = true;
                    }
                }
                if (this.boxTyped == "log out") {
                    this.barThing = false;
                    this.y = height + 300;
                    settings.accounts.bootDone = false;
                }
                if (this.boxTyped == "close") {
                    for (let id = Object.keys(apps).length; id--; id === 0) {
                        if (apps[id].focused == true) {
                            apps[id].doOnClose()
                        }
                    }
                }
                if (this.boxTyped == "kill") {
                    for (let id = Object.keys(apps).length; id--; id === 0) {
                        if (apps[id].focused == true) {
                            apps[id].open = false;
                        }
                    }
                }
                this.boxTyped = "";
            }
            fill(0);
            textSize(25);
            if (this.boxTyped != "") {                
                // drawingContext.filter = 'blur(20px)'

                fill(0,0,0, 50);

                rect(0, height - 50, 400, 40, 5);

                drawingContext.filter = 'blur(0px)'

                fill(255);


                text("command: " + this.boxTyped.toLowerCase() + "|", 10, height - 25);

            }
        },
        dock: function() {
            fill(0,0,0,200);
            rect(width - 150, height - 60, 150, 60, 5);

            rect(0, height - 60, width / 4, 60, 5);
        },
        displayTime: function() {
            var isAM;
            var h;
            h = hour();
            if (h > 12) {
                isAM = false;
                h-=12;
            }
            else {
                isAM = true;
            }
            var m;
            m = minute();

            fill(0,0,0,0);
            if (mouseX > width - 130 && mouseX < width - 10 && mouseY > height - 50 && mouseY < height - 10) {
                fill(0,0,0,100);
            }
            rect(width - 130 ,height - 50,130,45,3);
            fill(255);
            textSize(25);
            strokeWeight(1)
            if (m < 10) {
                if (isAM == true) {
                    text(h + ":0" + m + " AM", width - 110,height - 20);
                }
                if (isAM == false) {
                    text(h + ":0" + m + " PM", width - 110,height - 20);
                }
            }
            else if (m > 10) {
                if (isAM == true) {
                    text(h + ":" + m + " AM", width - 110,height - 20);
                }
                if (isAM == false) {
                    text(h + ":" + m + " PM", width - 110,height - 20);
                }
            }
        },
    },
    keyBinds: {
        keyBindsDetect: function() {
            if (keys[17] && keys[37]) {
                for (let id = windows.id.length; id--; id === 0) {
                    if (apps[id].focused == true) {
                        apps[id].x = 0;
                        apps[id].width = width / 2;
                        apps[id].height = height;
                    }
                }
            }
        }
    },
    accounts: {
        currentUser: 0,
        currentUser_string: "User",
        bootDone: false,
        logOut: function() {
            this.code = "";
            apps[6].lines = []
            this.barThing = false;
            this.y = height + 300;
            settings.accounts.bootDone = false;
                
        },
        boot: function() {
            background(0)
            textSize(50)
            textAlign(CENTER, TOP);
            fill(255);
            text("Please choose log in profile...", width / 2, 40)
            
            fill(30)
            if (mouseX > width / 2 - 150 && mouseX < width / 2 + 160 && mouseY > 100 && mouseY < 200) {
                fill(50);
                if (mouseIsClicked) {
                    this.bootDone =  true;
                    settings.accounts[1].addSettings()
                    this.currentUser = 0;
                    this.currentUser_string = "User";
                }
            }
            rect(width / 2 - 150, 100, 300, 100, 5)
            fill(255)
            
            text("User",width / 2,125);
            
            fill(30)
            if (mouseX > width / 2 - 150 && mouseX < width / 2 + 160 && mouseY > 220 && mouseY < 320) {
                fill(50);
                if (mouseIsClicked) {
                    this.currentUser = 1;
                    this.currentUser_string = "Root";
                    settings.accounts[1].addSettings()
                    this.bootDone = true;
                }
            }
            rect(width / 2 - 150, 220, 300, 100, 5)
            fill(255)
            
            text("Root",width / 2,245);
            
            fill(30)
            if (mouseX > width / 2 - 150 && mouseX < width / 2 + 160 && mouseY > 400 && mouseY < 500) {
                fill(50);
                if (mouseIsClicked) {
                    this.currentUser_string = "Dev"
                    this.currentUser = 2;
                    settings.accounts[2].addSettings()
                    this.bootDone = true;
                }
            }
            rect(width / 2 - 150, 400, 300, 100, 5)
            fill(255)
            
            text("Dev",width / 2 ,425);
            
            textAlign(LEFT, BASELINE)
            

        },
        0: {
            name: "user",
            addSettings: function() {
                debugWindowEnabled = false;
                
            },
        },
        1: {
            name: "root",
            addSettings: function() {
                debugWindowEnabled = false;
                
            },
        },
        2: {
            name: "dev",
            addSettings: function() {
                debugWindowEnabled = true;
                
            },
        },
        settings: {
            0: {
                name: "debugWindowEnabled",
                granted: false,
            },
            hasRootPrivileges: false,
        }
    }
}
var terminal =  {
    log: function(stuff, showIfOpenedFromTerminal = true) {
        apps[6].lines.push(stuff);        
        if (apps[6].open == true) {

        }
    },
    clear: function() {
        apps[6].lines = [];
    },
}