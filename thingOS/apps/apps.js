var apps = {
    0: {
        name: "settings",
        taskName: "Settings",
        width: 600,
        height: 600,
        x: 200,
        y: 200,
        initDone: false,
        theme: "white",
        colorTheme: "blue",
        acTheme: "white",
        followMode: false,
        main: false,
        init: function() {
            this.page = "none";
            
        },
        innerContent: function() {
            fill(theme[0] - 20, theme[1] - 20, theme[2] - 20,200)
            rect(0,0,this.width,this.height, 5);
            noStroke();



            //start innercontent
            if (acTheme == "black") {
                fill(theme[0] + 20, theme[1] + 20, theme[2] + 20, 200);
                stroke(theme[0] + 40, theme[1] + 40, theme[2] + 40, 200);

            }
            if (acTheme == "white") {
                fill(theme[0] - 20, theme[1] - 20, theme[2] - 20, 200);
                stroke(theme[0] - 40, theme[1] - 40, theme[2] - 40, 200);
            }

            line(150,10,150, this.height);
            noStroke();
            if (mouseX > 3 + this.x && mouseX < 143 + this.x && mouseY > 30 + this.y && mouseY < 60 + this.y) {
                if (acTheme == "black") {
                    fill(theme[0] + 30, theme[1] + 30, theme[2] + 30, 200);
                }
                if (acTheme == "white") {
                    fill(theme[0] - 30, theme[1] - 30, theme[2] - 30, 200);
                }

                if (mouseIsClicked) {
                    this.page = "personalization";
                }
            }
            if (this.page == "personalization") {
                if (acTheme == "black") {
                    fill(theme[0] + 30, theme[1] + 30, theme[2] + 30, 200);
                }
                if (acTheme == "white") {
                    fill(theme[0] - 30, theme[1] - 30, theme[2] - 30, 200);
                }
            }
            rect(3,30,140,30,5);
            fill(opposingColor)
            textSize(15)
            text("Personalization",20,50)

            if (acTheme == "black") {
                fill(theme[0] + 20, theme[1] + 20, theme[2] + 20, 200);

            }
            if (acTheme == "white") {
                fill(theme[0] - 20, theme[1] - 20, theme[2] - 20, 200);
            }
            if (mouseX > 3 + this.x && mouseX < 143 + this.x && mouseY > 70 + this.y && mouseY < 100 + this.y) {
                if (acTheme == "black") {
                    fill(theme[0] + 30, theme[1] + 30, theme[2] + 30, 200);
                }
                if (acTheme == "white") {
                    fill(theme[0] - 30, theme[1] - 30, theme[2] - 30, 200);
                }
                if (mouseIsClicked) {
                    this.page = "Display";
                }
            }
            rect(3,70,140,30,5);
            fill(opposingColor)
            textSize(15)
            text("Display",20,90)

            if (this.page == "personalization") {
                textSize(25);
                fill(opposingColor)
                text("Set Main Theme",this.width / 2 - 55 ,50);
                fill(0);
                if (mouseX > (this.width / 1.5) + this.x && mouseX < (this.width / 1.5) + 60 + this.x && mouseY > 80 + this.y && mouseY < 140 + this.y) {
                    fill(50,50,50); 
                    if (mouseIsClicked) {
                        themes.change("black");
                        this.theme = "black";
                        
                    }
                } 
                if (this.theme == "black") {
                    stroke(0,0,200);
                    strokeWeight(3);
                }
                else {
                    stroke(200,0,0);
                    strokeWeight(3);
                }
                rect(this.width / 1.5,80,60,60,5);

                fill(255);
                if (mouseX > (this.width / 3) + this.x && mouseX < (this.width / 3) + 60 + this.x && mouseY > 80 + this.y && mouseY < 140 + this.y) {
                    fill(200,200,200); 
                    if (mouseIsClicked) {
                        themes.change("white");
                        this.theme = "white";
                    }
                } 
                if (this.theme == "white") {
                    stroke(0,0,200);
                    strokeWeight(3);
                }
                else {
                    stroke(200,0,0);
                    strokeWeight(3);
                }
                rect(this.width / 3,80,60,60,5);
                noStroke()

                fill(opposingColor);
                text("Set Background color",this.width / 2 - 100, 220);

                fill(255,0,0);
                if (mouseX > (this.width / 3) + this.x && mouseX < (this.width / 3) + 60 + this.x && mouseY > 240 + this.y && mouseY < 310 + this.y) {
                    fill(200,0,0); 
                    if (mouseIsClicked) {
                        themes.set("red");
                        this.colorTheme = "red";
                    }
                } 
                if (this.colorTheme == "red") {
                    stroke(theme[1] - 20);
                    strokeWeight(5);
                }
                else {
                    noStroke()
                }
                rect(this.width / 3,240,60,60,5);
                noStroke()

                fill(0,0,255);
                if (mouseX > (this.width / 2) + this.x && mouseX < (this.width / 2) + 60 + this.x && mouseY > 240 + this.y && mouseY < 310 + this.y) {
                    fill(0,0,200); 
                    if (mouseIsClicked) {
                        themes.set("blue");
                        this.colorTheme = "blue";
                    }
                } 
                if (this.colorTheme == "blue") {
                    stroke(theme[1] - 20);
                    strokeWeight(5);
                }
                else {
                    noStroke()
                }
                rect(this.width / 2,240,60,60,5);
                noStroke()
                
                fill(100,255,100);
                if (mouseX > (this.width / 1.5) + this.x && mouseX < (this.width / 1.5) + 60 + this.x && mouseY > 240 + this.y && mouseY < 310 + this.y) {
                    fill(75,200,75); 
                    if (mouseIsClicked) {
                        themes.set("green");
                        this.colorTheme = "green";
                    }
                } 
                if (this.colorTheme == "green") {
                    stroke(theme[1] - 20);
                    strokeWeight(5);
                }
                else {
                    noStroke()
                }
                rect(this.width / 1.5,240,60,60,5);
                noStroke()


            }
            
            if (this.page == "Display") {
                fill(opposingColor);
                textSize(20);
                text("Display Settings", this.width / 2 - 30, 50);
                text("Auto resize", this.width / 2 - 90, 120);
                if (mouseX > this.x + this.width / 2 - 100 && mouseX < this.x + this.width / 2 + 20 && mouseY > this.y + 150 && mouseY < this.y + 230) {
                    if (acTheme == "white") {
                        fill(theme[0] - 20, theme[1] - 20, theme[2] - 20, 200);
                    }
                    if (acTheme == "black") {
                        fill(theme[0] + 20, theme[1] + 20, theme[2] + 20, 200);
                    }
                    if (mouseIsClicked) {
                        resizeCanvas(windowWidth, windowHeight);
                    }
                }
                else {
                    if (acTheme == "white") {
                        fill(theme[0] + 20, theme[1] + 20, theme[2] + 20, 200);
                    }
                    if (acTheme == "black") {
                        fill(theme[0] - 20, theme[1] - 20, theme[2] - 20, 200);
                    }
                }
                rect(this.width / 2 - 100, 150, 120,80,5);

                fill(opposingColor);
                textSize(20);
                text("Fullscreen", this.width / 1.3 - 90, 120);
                if (mouseX > this.x + this.width / 1.3 - 100 && mouseX < this.x + this.width / 1.3 + 20 && mouseY > this.y + 150 && mouseY < this.y + 230) {
                    if (acTheme == "white") {
                        fill(theme[0] - 20, theme[1] - 20, theme[2] - 20, 200);
                    }
                    if (acTheme == "black") {
                        fill(theme[0] + 20, theme[1] + 20, theme[2] + 20, 200);
                    }
                    if (mouseIsClicked) {
                        let fullscreenState = fullscreen();
                        if (document.fullscreenEnabled) {                            
                            fullscreen(!fullscreenState);
                        }
                    }
                }
                else {
                    if (acTheme == "white") {
                        fill(theme[0] + 20, theme[1] + 20, theme[2] + 20, 200);
                    }
                    if (acTheme == "black") {
                        fill(theme[0] - 20, theme[1] - 20, theme[2] - 20, 200);
                    }
                }
                rect(this.width / 1.3 - 100, 150, 120,80,5);

            }

            //end inner content


        },
        doOnClose: function() {
            this.page = "none";
            apps[0].open = false;
            apps[0].fullScreen = false;
        },
        open: false,
        fullScreen: false,

    },
    1: {
        name: "apps",
        taskName: "apps",
        width: 600,
        height: 600,
        x: 200,
        y: 200,
        followMode: false,
        innerContent: function() {
            fill(theme[0], theme[1], theme[2], 200)
            noStroke()
            rect(0,0,this.width,this.height);
            fill(opposingColor)
            text("Snake", this.width / 4 - 25, 120);
            fill(opposingColor)
            if (mouseX > this.width / 4 - 25 + this.x && mouseX < this.width / 4 + 45 && mouseY > this.y + 150 && mouseY < this.y + 220) {
                fill(255)
                if (acTheme == "black") {
                    fill(opposingColor[1] + 20);
                }
                if (acTheme == "white") {
                    fill(opposingColor[1] - 20);
                }
                if (mouseIsClicked) {

                }

            }
            rect(this.width / 4 - 25, 150,70,50, 5);
            
        },
        doOnClose: function() {
            apps[1].open = false;
        },
        open: false,
        fullScreen: false,
        initDone: false,
        init: function() {

        },
        
    },
    2: {
        name: "snake",
        taskName: "snake.exe",//perfect
        width: 300,
        height: 300,
        x: 200,
        y: 200,
        followMode: false,
        open: false,
        fullScreen: false,
        initDone: false,
        main: false,
        init: function() {
            this.snakeX = 200;
            this.snakeY = 200;
            this.pSnakeX = [200,200];
            this.pSnakeY = [200,200];
            this.timeX = 0;
            this.timeY = 0;
            this.dir = 0;
            this.snakeLength = 2; 
            this.showSnake = function() {
                for (let i = this.snakeLength; i--; i <= 0) {
                    
                    fill(255,0,0);
                    //rect(this.pSnakeX[i],this.pSnakeY[i],20,20);

                    fill(255,0,0);
                    //rect(this.pSnakeX[i-10],this.pSnakeY[i-10],20,20);
                }
                this.pSnakeX = this.pSnakeX.slice(-1, this.snakeLength+ 15);
                this.pSnakeY = this.pSnakeY.slice(-1, this.snakeLength+ 15);
                
            }
        },
        innerContent: function() {

            fill(0)
            rect(0,0,this.width,this.height, 5);

            this.fullScreen = true;
            if (this.timeX > 0) {
                this.timeX--;
            } 

            if (keys[68]|| keys[39]) {
                this.dir = 1;
            }
            else if (keys[65] || keys[37]) {
                this.dir = 2;
            }

            if (keys[87]|| keys[38]) {
                this.dir = 3;
            }
            else if (keys[83] || keys[40]) {
                this.dir = 4;
            }

            if (this.dir == 1 && this.timeX <= 0) {
                this.snakeX+=20;
                this.timeX = 5;
                this.pSnakeX.push(this.snakeX);
            }

            else if (this.dir == 2 && this.timeX <= 0) {
                this.snakeX-=20;
                this.timeX = 5;
                this.pSnakeX.push(this.snakeX);
            }
            else if (this.dir == 3 && this.timeX <= 0) {
                this.snakeY-=20;
                this.timeX = 5;
                this.pSnakeY.push(this.snakeY);

            }
            else if (this.dir == 4 && this.timeX <= 0) {
                this.snakeY+=20;
                this.timeX = 5;
                this.pSnakeY.push(this.snakeY);
            }
    
            if (this.snakeX < this.x / 2) {
                this.snakeX = this.width - 20;
            }
            if (this.snakeX + 20 > this.width) {
                this.snakeX = this.x / 2;
            }

            if (this.snakeY < this.y / 2) {
                this.snakeY = this.height - 20;
            }
            if (this.snakeY + 20 > this.height) {
                this.snakeY = this.y / 2;
            }
            fill(255,0,0);
            rect(this.snakeX,this.snakeY,20,20);

            this.showSnake()

            textSize(30)
            text("Score: " + this.snakeLength,10,50);
            //console.log(this.pSnakeX + ", " + this.pSnakeY)
        },
        doOnClose: function() {
            this.open = false;
        },

    },
    3: {
        name: "calculator",
        taskName: "Calculator",
        width: 600,
        height: 600,
        x: 200,
        y: 200,
        followMode: false,
        open: false,
        fullScreen: false,
        initDone: false,
        main: false,
        number1: 0,
        number2: 0, 
        init: function() {

        },
        innerContent: function() {
            fill(theme[0], theme[1], theme[2], 220);
            rect(0,0,this.width,this.height);
            
            //plus button

            fill(opposingColor);
            if (mouseX > this.x + this.width / 6 && mouseX < this.x + this.width / 6 + 80 && mouseY > this.y + 150 && mouseY < this.y + 190) {
                if (acTheme == "black") {
                    fill(opposingColor[0] - 100);
                }
                if (acTheme == "white") {
                    fill(opposingColor[0] + 100);
                }
                if (mouseIsClicked) {
                    this.equation = "+";
                }
            }
            rect(this.width / 6,150,80,40,5);
            fill(theme);
            textSize(35)
            text("+",this.width / 6 + 25,183);

            //minus button

            fill(opposingColor);
            if (mouseX > this.x + this.width / 3 && mouseX < this.x + this.width / 3 + 80 && mouseY > this.y + 150 && mouseY < this.y + 190) {
                if (acTheme == "black") {
                    fill(opposingColor[0] - 100);
                }
                if (acTheme == "white") {
                    fill(opposingColor[0] + 100);
                }
                if (mouseIsClicked) {
                    this.equation = "-";
                }
            }
            rect(this.width / 3,150,80,40,5);
            fill(theme);
            textSize(50)
            text("-",this.width / 3 + 30,183);

            //multiply button

            fill(opposingColor);
            if (mouseX > this.x + this.width / 2 && mouseX < this.x + this.width / 2 + 80 && mouseY > this.y + 150 && mouseY < this.y + 190) {
                if (acTheme == "black") {
                    fill(opposingColor[0] - 100);
                }
                if (acTheme == "white") {
                    fill(opposingColor[0] + 100);
                }
                if (mouseIsClicked) {
                    this.equation = "*";
                }
            }
            rect(this.width / 2,150,80,40,5);
            fill(theme);
            textSize(40)
            text("*",this.width / 2 + 27,190);

            //divide button

            fill(opposingColor);
            if (mouseX > this.x + this.width / 1.5 && mouseX < this.x + this.width / 1.5 + 80 && mouseY > this.y + 150 && mouseY < this.y + 190) {
                if (acTheme == "black") {
                    fill(opposingColor[0] - 100);
                }
                if (acTheme == "white") {
                    fill(opposingColor[0] + 100);
                }
                if (mouseIsClicked) {
                    this.equation = "/";
                }
            }
            rect(this.width / 1.5,150,80,40,5);
            fill(theme);
            textSize(35)
            text("/",this.width / 1.5 + 30,183);
            

            //buttons



            //calculations

            switch(this.equation) {
                case "+":
                //console.log(this.number1 + this.number2)

                break;
            }
            

        },
        doOnClose: function() {
            this.open = false;
        },
        backgroundWorker: function() {
        },

    },
    4: {
        name: "task manager",
        taskName: "Task Manager", 
        width: 300,
        height: 300,
        x: 200,
        y: 200,
        followMode: false,
        open: false,
        fullScreen: false,
        initDone: false,
        main: false,
        openApplications: [],
        init: function() {
            
        },
        innerContent: function() {
            fill(theme[0], theme[1], theme[2], 200);
            rect(0,0,this.width,this.height, 5)
            fill(opposingColor)
            textSize(25)
            for (let id = windows.id.length; id--; id === 0) {
                if (apps[id].open == true) {
                    if (apps[id].taskName == undefined) {
                        this.openApplications.push(apps[id].name);
                    }   
                    else {
                        this.openApplications.push(apps[id].taskName);

                    }                 
                }
            }
            for (let i = this.openApplications.length; i--; i <= 0) {
                text(i + 1 + " " + this.openApplications[i],10,(50 * i) + 100);
            }
            text(0 + " System", 10,50)
            rightClickMain.addRightClick(10 + this.x,50 + this.y,50,25,"kill", function() {})//I know this doesn't work, it will when I decide to fix it...
            this.openApplications = [];

        },
        doOnClose: function() {
            this.open = false;
        },
        backgroundWorker: function() {

        },

    },
    5: {
        name: "debug",
        taskName: "Debug", 
        width: 600,
        height: 600,
        x: 400,
        y: 400,
        followMode: false,
        open: false,
        fullScreen: false,
        initDone: false,
        main: false,
        init: function() {
            this.openApplications = [];
        },
        innerContent: function() {
            fill(theme[0], theme[1], theme[2], 200);
            noStroke()
            rect(0,0,this.width,this.height, 5)
            if (mouseIsPressed && mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
                this.followMode = true;
                this.xPlus = this.x - mouseX;
                this.yPlus = this.y - mouseY;
            }
            else {
                this.followMode = false;
            }
            noStroke()
            fill(opposingColor)
            textSize(15)
            text("framerate: " + floor(frameRate()), 50, 50)
            text("deltaTime " + deltaTime,170,50)
            text("current open User " + settings.accounts.currentUser, 50, 100)
        },
        doOnClose: function() {
            this.open = false;
        },
        backgroundWorker: function() {
            if (settings.accounts.currentUser == 0 || settings.accounts.currentUser == 1) {
                apps[5].open = false;
            }
        },
    },
    6: {
        name: "Terminal",
        taskname: "Splash",
        width: 600,
        height: 600,
        x: 200,
        y: 200,
        followMode: false,
        open: false,
        fullScreen: false,
        initDone: false,
        main: false,
        location: "/",
        lines: [],
        code: "",
        keyHeld: false,
        init: function() {

        },
        innerContent: function() {
            fill(theme[0], theme[1], theme[2], 200)
            rect(0,0,this.width,this.height,5)
            textSize(25)
            fill(opposingColor[0], opposingColor[1], opposingColor[2]);
            if (40 + this.lines.length * 30 > this.height) {
                this.lines = []
            }
            for (let i = this.lines.length; i--; i <= 0) {
                text(this.lines[i],20,40 + i * 30, this.width, this.height);
            }
            text("[" + settings.accounts.currentUser_string  + "@thingOS " + this.location + "] $ " + this.code + "_",20, 40 + this.lines.length * 30, this.width, this.height)
            if (40 + this.lines.length * 30 > this.height) {
                this.lines = []
            }
            if (this.focused == true) {
                if (keyCode === 8 && keyIsPressed) {
                    this.code = this.code.slice(0,this.code.length-1);
                    keyIsPressed = false;
                }
                if (keyCode !== 8 && keyCode !== ENTER && keyIsPressed && blockedChars() == false) {
                    this.code+=key.toString();
                    keyIsPressed = false;
                }
                if (keys[ENTER] && this.keyHeld == false) {
                    this.lines.push("[" + settings.accounts.currentUser_string  + "@thingOS " + this.location + "] $ " + this.code);
                    if (this.code == "log out") {
                        settings.accounts.logOut()
                    }
                    else if (this.code == "clear") {
                        terminal.clear();
                    }
                    else if (this.code == "cool thing") {
                        terminal.clear();
                        this.lines.push(round(random(0, 1)))
                    }
                    else if (this.code == "neofetch") {
                        terminal.log("<    ?    >:      name: " + settings.accounts.currentUser_string  + "@thingOS ");
                        terminal.log("<    ?    >:      shell: Splash(version 0.1.2 )");
                        terminal.log("<    ?    >:      OS: thingOS (version 0.1.3)");
                        terminal.log("<    ?    >:      Resolution: " + width + "x" + height);

                    }
                    else if (this.code.startsWith("echo")) {
                        if (this.code.slice(5) != "") {
                            terminal.log(this.code.slice(5))
                        }
                        else {
                            terminal.log("Nothing to Echo")
                        }
                    }
                    else if (this.code.startsWith("open")) {
                        if (this.code.slice(5) != "") {
                            this.doOpenError = false;

                            for (let id = windows.id.length; id--; id === 0) {
                                if (this.code.slice(5) == apps[id].name) {
                                    apps[id].focused = true;
                                    apps[id].open = true;
                                    this.doOpenError = true;
                                }

                            }
                        }
                        if (this.doOpenError == false) {
                            terminal.log("Nothing to open")
                        }
                    }
                    else if (this.code.startsWith("do")) {
                        if (this.code.slice(3) != "") {
                            try {
                                eval(this.code.slice(3))
                            }
                            catch {
                                terminal.log("This string contains errors, Please try again")
                            }
                        }
                        else {
                            terminal.log("Nothing to Eval")
                        }
                    }
                    else if (this.code.startsWith("go")) {
                        if (this.code.slice(3).startsWith("https://")) {
                            window.open(this.code.slice(3), "_blank")
                        }
                        else {
                            window.open("https://" + this.code.slice(3), '_blank');
                        }
                    }
                    // else if (this.code.startsWith("cd")) {
                    //     if (this.code.slice(3) != "") {
                    //         if (this.code.slice(3) == "settings") {
                    //             this.location = "settings";
                    //         }
                    //         else {
                    //             terminal.log("No such directory")
                    //         }
                        
                    //     }
                    //     else {
                    //         terminal.log("No such directory")
                    //     }
                        
                    // }
                    else if (this.code == "exit") {
                        this.doOnClose()                        
                    }
                    else if (this.code.startsWith("ls")) {
                        terminal.log("settings  apps")
                    }
                    else if (this.code != ""){
                    
                        try {
                            eval(this.code)
                        }
                        catch {
                            terminal.log("splash: " + this.code + ": command not found")
                            }
                        
                    
                    }
                    this.code = ""
                    this.keyHeld = true;
                
                }
                if (!keys[ENTER]) {
                    this.keyHeld = false;
                }

            }
        },
        doOnClose: function() {
            this.lines = [];
            this.open = false;
        },
        backgroundWorker: function() {
            if (settings.accounts.currentUser == 0) {
                apps[5].open = false;
            }
        },
    },
    
    
}