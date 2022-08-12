var settings = {
    accounts: {
        currentUser: 0,
        bootDone: false,
        boot: function() {
            background(0)
            textSize(50)
            textAlign(CENTER, TOP);
            fill(255);
            text("Please choose log in profile...", width / 2, height / 18)
            
            fill(30)
            if (mouseX > width / 2 - 150 && mouseX < width / 2 + 160 && mouseY > height / 8 - 35 && mouseY < height / 8 + 70) {
                fill(50);
                if (mouseIsClicked) {
                    this.bootDone =  true;
                    settings.accounts[1].addSettings()
                    this.currentUser = 0;
                }
            }
            rect(width / 2 - 150, height / 8 - 30, 300, 100, 5)
            fill(255)
            
            text("User",width / 2,height / 8);
            
            fill(30)
            if (mouseX > width / 2 - 150 && mouseX < width / 2 + 160 && mouseY > height / 5.5 - 35 && mouseY < height / 5.5 + 70) {
                fill(50);
                if (mouseIsClicked) {
                    this.currentUser = 1;
                    settings.accounts[1].addSettings()
                    this.bootDone = true;
                }
            }
            rect(width / 2 - 150, height / 5.5 - 30, 300, 100, 5)
            fill(255)
            
            text("Root",width / 2,height / 5.5);
            
            fill(30)
            if (mouseX > width / 2 - 150 && mouseX < width / 2 + 160 && mouseY > height / 4 - 35 && mouseY < height / 4 + 70) {
                fill(50);
                if (mouseIsClicked) {
                    this.currentUser = 2;
                    settings.accounts[2].addSettings()
                    this.bootDone = true;
                }
            }
            rect(width / 2 - 150, height / 4 - 30, 300, 100, 5)
            fill(255)
            
            text("Dev",width / 2 ,height / 4);
            
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