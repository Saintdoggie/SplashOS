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
            fill(theme[0] - 20)
            rect(0,0,this.width,this.height);
            noStroke();



            //start innercontent
            if (acTheme == "black") {
                fill(theme[1] + 20);
                stroke(theme[1] + 20);

            }
            if (acTheme == "white") {
                fill(theme[1] - 20);
                stroke(theme[1] - 40);
            }

            line(150,10,150, this.height);
            noStroke();
            if (mouseX > 3 + this.x && mouseX < 143 + this.x && mouseY > 30 + this.y && mouseY < 60 + this.y) {
                if (acTheme == "black") {
                    fill(theme[1] + 30);
                }
                if (acTheme == "white") {
                    fill(theme[1] - 30);
                }

                if (mouseIsClicked) {
                    this.page = "personalization";
                }
            }
            if (this.page == "personalization") {
                if (acTheme == "black") {
                    fill(theme[1] + 50);
                }
                if (acTheme == "white") {
                    fill(theme[1] - 50);
                }
            }
            rect(3,30,140,30,5);
            fill(opposingColor)
            textSize(15)
            text("Personalization",20,50)

            if (acTheme == "black") {
                fill(theme[1] + 20);

            }
            if (acTheme == "white") {
                fill(theme[1] - 20);
            }
            if (mouseX > 3 + this.x && mouseX < 143 + this.x && mouseY > 70 + this.y && mouseY < 100 + this.y) {
                if (acTheme == "black") {
                    fill(theme[1] + 30);
                }
                if (acTheme == "white") {
                    fill(theme[1] - 30);
                }

                if (mouseIsClicked) {
                    this.page = "apps";
                }
            }
            if (this.page == "apps") {
                if (acTheme == "black") {
                    fill(theme[1] + 50);
                }
                if (acTheme == "white") {
                    fill(theme[1] - 50);
                }
            }
            rect(3,70,140,30,5);
            fill(opposingColor)
            textSize(15)
            text("Apps",20,90)

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
                text("Set Color Theme",this.width / 2 - 50, 220);

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
            
            if (this.page == "apps") {
                fill(opposingColor)
                text("this will be made later, so go away(until later)", this.width / 2 - 100, 50);
                //rect(this.width / 2 - 40, 50, 80,80,5);

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
        width: 200,
        height: 200,
        x: 200,
        y: 200,
        followMode: false,
        innerContent: function() {
            fill(255)
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
        width: 300,
        height: 300,
        x: 200,
        y: 200,
        followMode: false,
        open: true,
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
        init: function() {
            this.openApplications = [];
        },
        innerContent: function() {
            fill(theme);
            rect(0,0,this.width,this.height)
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
            fill(opposingColor)
            textSize(25)
            for (let i = this.openApplications.length; i--; i <= 0) {
                text(i + 1 + " " + this.openApplications[i],10,(50 * i) + 100);
            }
            text(0 + " System", 10,50)
            rightClickMain.addRightClick(10 + this.x,50 + this.y,50,25,"kill", function() {})
            this.openApplications = [];
        },
        doOnClose: function() {
            this.open = false;
        },
        backgroundWorker: function() {
            
        },

    }
    
}