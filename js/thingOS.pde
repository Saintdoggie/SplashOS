
/*
0.10.2
minor stuff:
changed time place
# games command now just goes to that scene 
(password is: something)
*/

size(600,600)
//big variable stuff {
    var cA = false;
    var sPlay = 0;
    //}
    
    //animation stuff {
    var animation1 = ".";
    var animationTime1 = 0;
    var animation3 = ".";
    var animationTime3 = 0;
    var rectAnimationX = -40;
    //}
    
    //time stuff {
    var time1 = 300;
    var time2 = 0;
    var time3 = 0;
    var time5 = 0;
    //}
    
    //theme stuff {
    var theme = [];
    var themeRed = [[255,0,0],[0,0,0]];
    var themeBlue = [[0,0,255],[0,0,0]];
    var themeGreen = [[0,255,0],[0,0,0]];
    var themeCount = 0;
    var themeThing = 20;
    var themes = function() {
        if (themeCount === 0) {
            theme = themeBlue;
        }
        if (themeCount === 1) {
            theme = themeRed;
        }
        if (themeCount === 2) {
            theme = themeGreen;
        }
        if (themeCount > 2) {
            themeCount = 0;
        }
    };
    //}
    
    //random stuff {
    var numberOfPasswordEnters = 0;
    var rectBigBox = false;
    var rectBigBox2 = 10;
    var Restart = false;
    var fpsTyped = "60";
    var thing2 = 0;
    var fpsFocused = false;
    var fullDate = 9;
    var hours;
    var mins;
    var dWeek;
    
    //}
    
    //notifications stuff {
    var notificationsPressed = false;
    var nXOffset = 400;
    //}
    
    //blocked chars {
    var blockedChars = function() {
        if (keyCode !== 8 && keyCode !== ENTER && keyCode !== 16 && keyCode !== CONTROL && keyCode !== 157 && keyCode !== 18 && keyCode !== UP && keyCode !== DOWN && keyCode !== RIGHT && keyCode !== LEFT && keyCode !== 20) {
            return false;
        }
        else {
            return true;
            
        }
    };
    //}
    
    //adventure settings{
        // {
            var coins = 0;
            var playerX = 200; 
            var playerY = 200;
            var hP = 100;
            var sP = 100;
            var sPlay2 = 0;
            var mobX1 = 100;
            var mobY1 = 100;
            var mob1 = true;
            var mobHP1 = 10;
            var mobX2 = 300;
            var mobY2 = 100;
            var mobHP2 = 10;
            var mob2 = true; 
            var time = 0;
            var dmgLvl = 1;
            var hPLvl = 1;
            var lvl = 1;
            var mobMaxHP;
            var playerMaxHP;
            var mobTime1 = 0;
            var mobTime2 = 0;
            var title = "Noob";
            var dmg;
            var speed = 0.05;
        //}
        // {
        
        //}
        // {
        
    var sPlay = 0;// set this to 2 to get to thing faster
    var devMode = 0; // nothing here...
    var paintColor = 0; // da paint color stupid
    var s1a = 0; // sequence 1 animation
    var s2a = 0; // sequence 2 animation
    var s3a = 0;// other s thing
    var time = 0; // time?
    var mOS = 0; // shift thing
    var toggleB1 = 0; 
    var eT = 0; // don't you dare change this to one
    var rT = 0;
    var mD = 0;
    var vM = 200;
    var hM = 200;
    var eS = 20;
    var pSS = 0;
    var thing = keyCode === SHIFT;
    var t = 255;
    var sUFS = rect(350,350,40,40,10); 
    var color1 = 0;
    var tT = "Current Transparency: ";
    var dMOOO = "";
    var dMO = 0;
    var tempT = 1;
        //}// actual variables
        //number Generator variables {
            var move = 10;
    //var number = random(0,1000);
    var number;
    var number666 = random(1,10);
    var newnumber666 = round(number666);//for 666
    var number4 = random(1,2);
    var newnumber4 = round(number4);// for 4
    var number9 = random(1,2);
    var newnumber9 = round(number9);
    var screen;
    var time = 0;
    //var newnumber = round(number);
    var newnumber;
    var MouseX;
    var MouseY;
    
        //}
    //}
    
    //right click settings {
        var rightClickX;
        var rightClickY;
        var rightClicked = false;
        var rightClickThing = 60;
    //}
    
    //app pinning {
        var appPinSettings = false;
        var appSettingsX = 100;
        var appSettingsY = 100;
    //}
    
    //debug Settings {
        var debugClicked = false;
        
    //}
    
    //keys {
    var keys = [];
    keyPressed = function() {
        keys[keyCode] = true;
    };
    keyReleased = function() {
        keys[keyCode] = false;
    };
    
    //}
    
    //select Area {
    var weirdThing = false;
    var selectX = 0;
    var selectY = 0;
    var selectWidth = 0;
    var selectHeight = 0;
    var selectTime = 0;
    var selectArea = function() {
        if (mousePressed && mouseButton === LEFT) {
            selectTime++;
            if (selectX <= mouseX && selectY <= mouseY) {
                if (selectTime < 2) {
                    selectX = mouseX;
                    selectY = mouseY;
                }
                else {
                    selectWidth = mouseX-selectX;
                    selectHeight = mouseY-selectY;
                }
                fill(0,255,0,150);
                rect(selectX, selectY, selectWidth, selectHeight, 2);
            }
            else if (weirdThing) {
                if (selectTime < 2) {
                    selectX = mouseX;
                    selectY = mouseY;
                }
                else {
                    selectWidth = mouseX-selectX;
                    selectHeight = mouseY-selectY;
                }
                fill(0,255,0,200);
                rect(selectX, selectY, selectWidth, selectHeight, 2);
            }
            
        }
        else {
            selectX = 0;
            selectY = 0;
            selectWidth = 0;
            selectHeight = 0;
            selectTime = 0;
        }
        noStroke();
    };
    
    //}
    
    //window {
    var window = {
        new: function(x,y,w,h,doOnClose, insideContent) {
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
                rect(0,0,this.w,20);
                fill(255, 0, 0);
                ellipse(10,10,15,15);
                if (mouseX > x + 5 && mouseX < x + 20 && mouseY > y + 5 && mouseY < y + 20) {
                    cursor(HAND);
                    if (mousePressed) {
                        doOnClose();
                    }
                }
                if (mousePressed && mouseX > x + 25 && mouseX < this.x + 45 && mouseY > y + 5 && mouseY < y + 20) {
                    this.followMode = true;
                    println("yes");
                    
                }
                
                
                fill(150,255,10);
                ellipse(30,10,15,15);
                resetMatrix();
                
        }
    };
    //}
    
    //go to scene {
    var sceneTrue = false;
    var goToScene = function() {
        if (sceneTrue) {
            window.new(200,200,50,50,function() {sceneTrue = false;}, function() {            
            rect(0,0,200,200);
            });
        }
    };
    //}
    
    //terminal {
    var terminalWindowOpened = false;
    var terminalTyped = "";
    var terminalOutput = "";
    var terminalWindow = function() {
        if (terminalWindowOpened === true) {
            window.new(200,200,200,200,function() {
                terminalWindowOpened = false;
            },function() {
                fill(255, 255,255, 200);
                rect(0,0,200,200,5);
                keyPressed = function() {
                    
                    if (keyCode === 8) {
                        terminalTyped = terminalTyped.slice(0,terminalTyped.length-1);
                    }
                    if (keyCode !== 8 && keyCode !== ENTER && keyCode !== 16 && keyCode !== CONTROL && keyCode !== 157 && keyCode !== 18 && keyCode !== UP && keyCode !== DOWN && keyCode !== RIGHT && keyCode !== LEFT && keyCode !== 20 && terminalTyped.length < 20) {
                        terminalTyped+=key.toString();
                    }
                    if (keyCode === ENTER) {
                        if (terminalTyped === "pwd") {
                            terminalOutput = "/home/";      
                        }
                        if (terminalTyped === "clear") {
                            terminalOutput = "";      
                        }
                        terminalTyped = "";
                    }
                    
                };
                fill(255, 0, 0);
                text("/home/" + terminalTyped + "|", 10,50);
                fill(0,0,255);
                text(terminalOutput,10,70);
            });
        }
    }; 
    //}
    
    // finder {
    var textThing = 0;
    var finderTyped = "";
            var Finder = function() {
                this.barX = 40;
                this.x = 30;
                this.y = 600;
                this.switchTime = 0;
            };
            var finderBar = false;
            Finder.prototype.bar = function() {
                if (finderBar === true) {
                    if (this.y > 350) {
                        this.y-=20;
                    
                    }
                    
                }
                else {
                    if (this.y < 600) {
                        this.y+=20;
                    }
                }
                fill(200,200,200,230);
                rect(this.x,this.y,150,180,5);
                fill(0,0,0,230);
                rect(this.x+10,this.y+10,130,40,5);
                fill(0,255,200,200);
                keyPressed = function() {
                    if (finderBar === true) {
                    if (keyCode === 8) {
                        finderTyped = finderTyped.slice(0,finderTyped.length-1);
                    }
                    if (keyCode !== 8 && keyCode !== ENTER && keyCode !== 16 && keyCode !== CONTROL && keyCode !== 157 && keyCode !== 18 && keyCode !== UP && keyCode !== DOWN && keyCode !== RIGHT && keyCode !== LEFT && keyCode !== 20 && finderTyped.length < 10) {
                        finderTyped+=key.toString();
                    }
                    if (keyCode === ENTER) {
                        if (finderTyped === "# settings") {
                            finderTyped = "";
                            sPlay = 7;
                        }
                        if (finderTyped === "# games") {
                            sPlay = 5;
                        }
                        if (finderTyped === "# terminal") {
                            terminalWindowOpened = true;
                        }
                        if (finderTyped.charAt(0) === "@") {
                            println(finderTyped.substring(1));                               finderTyped = "";
                        }
                        if (finderTyped === "! date") {
                            println(fullDate);
                        }
                        if (finderTyped === "! time") {
                            println(hours+":"+mins);
                        }
                        if (finderTyped.startsWith("@#")) {
                            eval(finderTyped.slice(2));//jshint ignore: line
                            
                        } 
                        if (finderTyped === "# restart") {
                            Program.restart();
                        }
                    }
                    }
                };
                thing++;
                textSize(20);
                if (thing < 30) {
                    text(finderTyped + "|",this.x+20,this.y+35);
                }
                if (thing >= 30) {
                    text(finderTyped,this.x+20,this.y+35);
    
                }
                if (thing > 60) {
                    thing = 0;
                }
            };
            Finder.prototype.draw = function() {
                    this.switchTime++;
                    fill(0, 0, 255, 240);
                    noStroke();
                    if (keyIsPressed && keyCode === CONTROL && finderBar === false && this.switchTime > 20) {
                            finderBar = true;
                            this.switchTime = 0;
                        }
                        if (keyIsPressed && keyCode === CONTROL && finderBar === true && this.switchTime > 20) {
                            finderBar = false;
                            this.switchTime = 0;
                            finderTyped = "";
                        }
                    if (mouseX > 10 && mouseX < 10 + this.barX && mouseY > 550 && mouseY < 590) {
                        fill(150);
                        if (this.barX < 150) {
                            this.barX+=10;
                        }
                        if (mousePressed && finderBar === false && this.switchTime > 10) {
                            finderBar = true;
                            this.switchTime = 0;
                        }
                        if (mousePressed && finderBar === true && this.switchTime > 10) {
                            finderBar = false;
                            this.switchTime = 0;
                            finderTyped = "";
                        }
                    }
                    else {
                        if (this.barX > 40) {
                            this.barX-=10;
                        }
                        fill(100);
                    }
                    rect(10,555,this.barX, 40,5);
                    if (this.barX === 150) {
                        textSize(19);
                        fill(0);
                        text("Commands",30,580);
                    }
                    
            };
            var finder = new Finder();
    //}
    
    //other stuff {
        var button = function(x,y,w,h,goesto) {
        if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
            fill(200,200,200);
            cursor(HAND);
            mouseClicked = function() {
                if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h && mouseButton === LEFT) {
                    sPlay = goesto;
                }
            };
        }
        else {
            fill(255);
        }
        rect(x,y,w,h,10);
    };
    //}
    
    //start vars {
    var dots = ".";
    var logTime = 0;
    var logTime2 = 0;
    var typed = "";
    var repeat = 0;
    var xThing = 100;
    thing = 1;
    //}
    
    draw = function() {
        themes();
        if (Restart === true) {
            debugClicked = false;
            fill(255, 0, 0);
            rect(200,200,200,200,5);
            //restart();
        }
        cursor(ARROW);
        //date and time {
    var days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
    var months = ["January","Febuary","March","April","May","June","July","August","September", "October","November","December"];
    var am = false;
    hours = hour();
    mins = minute();
    if (hours <= 11){am = true;}//is it AM/PM?
    hours%= 12;
    if(hours === 0){hours = 12;}
    mins = mins.toString();
    var today = (function() { return this.Function('return new Date()'); })()();
    dWeek = today.getDay();
    var d = today.getDate();
    var m = today.getMonth();
    dWeek = days[dWeek];
    m = months[m];
    fullDate = dWeek + ", " + m + " " + d;
    //}
        switch (sPlay) {
            case 0: {
                logTime++;
                logTime2++;
                if (repeat === 0) {
                    xThing = 100;
                    repeat = 1;
                }
                background(0, 0, 0);
                fill(200);
                noStroke();
                rect(100,300,400,50,5);
                fill(100);
                if (xThing > 400) {
                    thing = 2;
                }
                if (xThing < 100) {
                    thing = 1;
                }
                if (thing === 1) {
                    xThing+=5;
                }
                if (thing === 2) {
                    xThing-=5;
                }
                rect(xThing,300,100,50,5);
                fill(255);
                textSize(55);
                if (logTime > 0 && logTime < 20) {
                    dots = ".";
                }
                if (logTime > 20 && logTime < 40) {
                    dots = "..";
                }
                if (logTime > 60) {
                    dots = "...";
                }
                if (logTime > 80) {
                    logTime = 0;
                }
                text("Loading" + dots,200,200);
                stroke(0);
                if (logTime2 > 200) {
                    background(0);
                    rect(150,300,300,55,5);
                    fill(0);
                    mousePressed = function() {
                        println("thing")
                    };
                    keyPressed = function() {
                        if (keyCode === 8) {
                            typed = typed.slice(0,typed.length-1);
                        }
                        if (keyCode !== 8 && typed.length < 10 && keyCode !== ENTER) {
                            typed+=key.toString();
                        }
                        if (keyCode === ENTER) {
                            if (typed === "something") {
                                typed = "";
                                sPlay = 4;
                                
                            }
                        }
                        if (keyCode === ENTER) {
                            if (typed === "never gon-") {
                                weirdThing = true;
                                println("Done!");
                                
                            }
                        }
                    };
                    text(typed + "|",160,342);
                    
                }
    
            }//start animation
            break;
            case 4:{
            background(theme[0][0], theme[0][1], theme[0][2]);
            selectArea();
            
            textSize(12);
            finder.bar();
            fill(0,0,0,200);
            rect(0,550,599,52,3);
            finder.draw();
            goToScene();
            terminalWindow();
            fill(0);
            if (appPinSettings === true) {
                if (mouseX > appSettingsX && mouseX < appSettingsX + 400 && mouseY > appSettingsY && mouseY < appSettingsY + 400) {
                    
                }
                fill(255);
                stroke(0);
                strokeWeight(5);
                rect(appSettingsX,appSettingsY,400,400,10);
                noStroke();
                fill(200);
                rect(appSettingsX+5,appSettingsY+5,390,40,5);
                fill(240);
                rect(appSettingsX+355,appSettingsY+10,30,30,5);
                if (mouseX > 465 && mouseX < 495 && mouseY > 105 && mouseY < 135) {
                    if (mousePressed) {
                        appPinSettings = false;
                    }
                }
                stroke(100);
                strokeWeight(10);
                line(460,135,480,115);
                line(480,135,460,115);
                noStroke();
                textSize(20);
                fill(0);
                text("Pick an App to Pin",120,130);
                resetMatrix();
                
            }
            if (debugClicked === true) {
                fill(255);
                stroke(0);
                strokeWeight(5);
                rect(20,20,200,200,5);
                noStroke();
                fill(240);
                if (mouseX > 175 && mouseX < 205 && mouseY > 25 && mouseY < 55) {
                    if (mousePressed) {
                        debugClicked = false;
                        
                    }
                }
                rect(175,25,30,30,5);
                fill(0);
                textSize(14);
                text("Debug Console",30,40);
                textSize(12);
                text("Reset Variables",30,85);
                text("Restart",150,85);
                stroke(200);
                strokeWeight(10);
                line(180,30,200,50);
                line(200,30,180,50);
                noStroke();
                fill(230);
                if (mouseX > 50 && mouseX < 90 && mouseY > 100 && mouseY < 140) {
                    cursor(CROSS);
                    if (mousePressed) {
                        rectBigBox = false;
                        rectBigBox2 = 10;
                        rightClickX = null;
                        rightClickY = null;
                        rightClicked = false;
                        appPinSettings = false;
                        appSettingsX = 100;
                        appSettingsY = 100;
                        debugClicked = false;
                        debugClicked = false;
                        
                    }
                }
                rect(50,100,40,40,5);
                if (mouseX > 150 && mouseX < 190 && mouseY > 100 && mouseY < 140) {
                    cursor(CROSS);
                    if (mousePressed) {
                        Restart = true;
                    }
                }
                rect(150,100,40,40,5);
            }
            fill(0);
            if (mins < 10) {
                mins = 0 + mins;
            }
            textSize(20);
            if (mouseX > 470 && mouseX < 595 && mouseY > 555 && mouseY < 595) {
                fill(200,200,200,200);
                if (mousePressed) {
                    notificationsPressed = true;
                }
            }
            else {
                fill(255,255,255,200);
            }
            rect(470,555,125,40,5);
            
            fill(0);
            
            text(dWeek + ", " + hours+":"+mins,480,580);
            
            if (notificationsPressed === true) {
                translate(nXOffset,0);
    
    
            }
            
            rect(550,500,40,40,5);
            
            
            print(notificationsPressed);
            resetMatrix();
                
            }//home
            break;
            case 5: {
            background(theme[0][0],theme[0][1],theme[0][2]);
            selectArea();
            textSize(15);
            fill(255);
            text("Adventure",40,40);
            button(500,500,80,80,4);//leave
            button(50,50,40,40,6);//adventure
            fill(255);
            text("Number Generator",130,40);
            text("new Game(name not decided)",270,40);
            button(280,50,40,40,13);
            button(140,50,40,40,11);
            
        
    
        }//game center
            break;
            case 6: {
            if (sPlay2 === 0) {
            time++;
            background(255,255,255);
            fill(0,0,0);
            textSize(20);
            if (mouseX > 150 && mouseX < 200 && mouseY > 180 && mouseY < 200 && time > 5) {
                textSize(23);
                text("-Play-",150,200);
                if (mousePressed) {
                    sPlay2 = 0.5;
                    if (lvl > 1 && lvl < 10) {
                        mobHP1 = lvl*2;
                        mobHP2 = lvl*2;
                        mobMaxHP = lvl*2;
                    } 
                    if (lvl > 10 && lvl < 25) {
                        mobHP1 = lvl*4;
                        mobHP2 = lvl*4;
                        mobMaxHP = lvl*4;
                    }
                    if (lvl > 25 && lvl < 50) {
                        mobHP1 = lvl*8;
                        mobHP2 = lvl*8;
                        mobMaxHP = lvl*8;
                    }
                    if (lvl > 50 && lvl < 100) {
                        mobHP1 = lvl*16;
                        mobHP2 = lvl*16;
                        mobMaxHP = lvl*16;
                    }
                    if (lvl > 100 && lvl < 200) {
                        mobHP1 = lvl*32;
                        mobHP2 = lvl*32;
                        mobMaxHP = lvl*32;
                    } 
                    if (lvl > 200) {
                        mobHP1 = lvl*64;
                        mobHP2 = lvl*64;
                        mobMaxHP = lvl*64;
                    }
                }
            }
                else {
                    textSize(20);
                    text("Play",150,200);
                }
            
            if (mouseX > 150 && mouseX < 200 && mouseY > 220 && mouseY < 240 && time > 5) {
                textSize(23);
                text("-Shop-",150,240);
                if (mousePressed) {
                    sPlay2 = 3;
                }
            }
            else {
                textSize(20);
                text("Shop",150,240);
            }
            if (mouseX > 150 && mouseX < 200 && mouseY > 250 && mouseY < 275) {
                textSize(23);
                if (mousePressed) {
                    sPlay2 = 4;
                }
                text("-Mode-",150,275);
            }
            else {
                textSize(20);
                text("Mode",150, 275);
            }
            if (mouseX > 150 && mouseX < 205 && mouseY > 285 && mouseY < 310) {
                textSize(23);
                text("-Stats-",150,305);
                if (mousePressed) {
                    sPlay2 = 5;
                }
            } 
            else {
                textSize(20);
                text("Stats",150,305);   
            }
            if (mouseX > 150 && mouseX < 190 && mouseY > 325 && mouseY < 335) {
                textSize(23);
                text("-Home-",150,335);
                if (mousePressed) {
                    sPlay = 4;
                }
            }
            else {
                textSize(20);
                text("Home",150,335);
            }
            
            }//menu
            if (sPlay2 === 0.5) {
            if (lvl > 0 && lvl < 10) {
                    dmg = dmgLvl*2;
                } 
            if (lvl > 10 && lvl < 25) {
                    dmg = dmgLvl*4;
                }
                if (lvl > 25 && lvl < 50) {
                    dmg = dmgLvl*8;
                }
                if (lvl > 50 && lvl < 100) {
                    dmg = dmgLvl*16;
                }
                if (lvl > 100 && lvl < 200) {
                    dmg = dmgLvl*32;
                } 
                if (lvl > 200) {
                    dmg = dmgLvl*64;
                }
            hP = hPLvl * 20 + 100;
            sPlay2 = 1;
            playerMaxHP = hP;
        }//game setup thing
            if (sPlay2 === 1) {
                textSize(12);
                var error = "";
                background(50, 100, 10);
                noStroke();
                var inCombat = false;
                {
                    mouseClicked = function () {
                        if (sPlay === 6) { 
                            playSound(battleSwing);
                        if (mouseX > mobX1 - 10 && mouseX < mobX1 + 10 && mouseY > mobY1 - 10 && mouseY < mobY1 + 10 && sP > 49) {
                            mobHP1-=dmg;
                            coins+=1;
                            sP-=50;
                            coins++;
                        }
                        if (mouseX > mobX2 - 20 && mouseX < mobX2 + 20 && mouseY > mobY2 - 20 && mouseY < mobY2 + 20 && sP > 49) {
                            mobHP2-=dmg;
                            coins+=5;
                            sP-=50;
                        }
                        }
                    };
                    if (mobHP1 < 1) {
                        mobTime1++;
                        if (mobTime1 < 10) {
                            playSound(coin);
                        }
                        mob1 = false;
                    }
                    if (mobHP2 < 1) {
                        mobTime2++;
                        if (mobTime2 < 10) {
                            playSound(coin);
                        }
                        mob2 = false;
                    }
                    if (mob2 === false && mob1 === false) {
                        time = 0;
                        sPlay2 = 101;
                        playSound(winSound);
                        lvl++;
                    }
                    if (mob1 === true) {
                        if (mobX1 < playerX) {
                            mobX1++;
                        }
                        if (mobX1 > playerX) {
                            mobX1--;
                        }
                        if (mobY1 > playerY) {
                            mobY1--;
                        }
                        if (mobY1 < playerY) {
                            mobY1++;
                        }
                        text("Melee Soldier " + mobHP1 + "/" +mobMaxHP,mobX1 - 50, mobY1 - 10);
                        ellipse(mobX1,mobY1,20,20);
                        if (playerX > mobX1 - 10 && playerX < mobX1 + 10 && playerY > mobY1 - 10 && playerY < mobY1 + 10) {
                            hP-=1+lvl;
                            inCombat = true;
                        }  
                    }
                    if (mob2 === true) {
                        if (mobX2 < playerX) {
                            mobX2+=1;
                        }
                        if (mobX2 > playerX) {
                            mobX2-=1;
                        }
                        if (mobY2 < playerY) {
                            mobY2+=1;
                        }
                        if (mobY2 > playerY) {
                            mobY2-=1;
                        }
                        if (playerX > mobX2- 100 && playerX < mobX2 + 100 && playerY > mobY2 - 100 && playerY < mobY2 + 100) {
                            hP-=0.6;
                            inCombat = true;
                         
                        text("Melee Soldier Boss " + mobHP2 + "/" + mobMaxHP,mobX2 - 30,mobY2 - 10);
                        ellipse(mobX2,mobY2,20,20);
                        }
                    }
                }//mobs
                var speed = random(1,3);
                speed = round(speed);
                if (hP < 0) {
                    playSound(loseSound);
                    time = 0;
                    sPlay2 = 100;
                }
                if (hP < hPLvl * 20 + 100 && inCombat === false) {
                    hP+=1;
                }
                if (sP < 100) {
                    sP+=5;
                }
                if (hP < 0) {
                    hP = 0;
                }
                hP = round(hP);
                //setup
                {
                if (playerY > mouseY) {
                    playerY-=speed;
                }
                if (playerY < mouseY) {
                    playerY+=speed;
                }
                if (playerX < mouseX) {
                    playerX+=speed;
                }
                if (playerX > mouseX) {
                    playerX-=speed;
                }
                }//movement code
                
                fill(217, 255, 0);
                ellipse(playerX, playerY, 20,20);
                rect(playerX - 10, playerY, 20,20,5);
                fill(0, 0, 255,200);
                rect(0,0,sP,50,10);
                fill(0,0,0,200);
                text("Stamina: " + sP + "/100",1,10);
                fill(255, 0, 0,200);
                rect(400 - hP / playerMaxHP,0,hP / playerMaxHP,50,10);
                fill(0,0,0,200);
                text("Health: " + hP+"/"+playerMaxHP,310,12);
                if (error !== "") {
                    println(error);
                }
        }//game thing
            if (sPlay2 === 3) {
                var s = "None";
                background(theme[0][0], theme[0][1], theme[0][2]);
                fill(200,200,200);
                noStroke();
                rect(50,50,300,300,10);
                mousePressed = function () {
                    if (mouseX > 100 && mouseX < 140 && mouseY > 100 && mouseY < 140 && coins >  2*dmg) {
                        coins-=2*dmg;
                        dmgLvl++;
                }
                    if (mouseX > 250 && mouseX < 290 && mouseY > 100 && mouseY < 140 && coins >2*hPLvl-1) {
                        coins-=2*hPLvl;
                        hPLvl++;
                }
                
                };
                if (mouseX > 100 && mouseX < 140 && mouseY > 100 && mouseY < 140) {
                    fill(255, 0, 0);
                    s = "Cost: " + 2*dmg;
                    
                }
                else {
                    fill(255,255,255);
                }
                rect(100,100,40,40,10);
                if (mouseX > 250 && mouseX < 290 && mouseY > 100 && mouseY < 140) {
                    fill(255, 0, 0);
                    s = "Cost: " + 2*hPLvl;
                }
                else {
                    fill(255,255,255);
                }
                rect(250,100,40,40,10);
                if (mouseX > 100 && mouseX < 140 && mouseY > 150 && mouseY < 190) {
                    fill(255,0,0);
                    s = "Cost: " + 0;//speed;
                }
                else {
                    fill(255,255,255);
                }
                rect(100,150,40,40,10);
                fill(0,0,0);
                textSize(12);
                text("More Damage, Level: " + dmgLvl,60,90);
                text("More health, level: " + hPLvl,220,90);
                if (mouseX > 350 && mouseX < 390 && mouseY > 350 && mouseY < 390) {
                    fill(255, 0, 0);
                    s = "Go Back";
                    if (mousePressed) {
                        sPlay2 = 0;
                    }
                    
                }
                else {
                    fill(255,255,255);
                }
                rect(350,350,40,40,10);
                fill(255,255,255);
                textSize(20);
                text("Coins: "+coins,300,25);
                text("Selected: "+s,10,25);
        }//shop
            if (sPlay2 === 4) {
                    background(theme[0][0], theme[0][1], theme[0][2]);
                    if (mouseX > 350 && mouseX < 390 && mouseY > 350 && mouseY < 390) {
                        fill(255, 0, 0,200);
                        if (mousePressed) {
                            sPlay2 = 0;
                        }
                    }
                    else {
                        fill(255, 0, 0);
                    }
                    rect(350,350,40,40,10);
                    fill(255, 0, 0);
                    textSize(12);
                    text("Go Back",340,340);
                }//modes
            if (sPlay2 === 5) {
                    background(255,255,255);
                    fill(0,0,0);
                    textSize(20);
                    text("Stats:",140,50);
                    text("Level: "+lvl,50,100);
                    text("Damage: "+dmg + "/Click",200,100);
                    text("Health: "+playerMaxHP,50,140);
                    text("Stamina: "+sP,200,140);
                    if (lvl > 1 && lvl < 10) {
                        title = "Noob";
                    } 
                    if (lvl > 10 && lvl < 25) {
                        title = "Amateur";
                    }
                    if (lvl > 25 && lvl < 50) {
                        title = "Becker";
                    }
                    if (lvl > 50 && lvl < 100) {
                        title = "Good Player";
                    }
                    if (lvl > 100 && lvl < 200) {
                        title = "Master";
                    } 
                    if (lvl > 200) {
                        title = "God";
                    }
                    text("Title: "+title,50,180);
                    textSize(15);
                    text("Go Back",340,340);
                    if (mouseX > 350 && mouseX < 390 && mouseY > 350 && mouseY < 390) {
                        fill(255, 0, 0);
                        if (mousePressed) {
                            sPlay2 = 0;
                        }
                    }
                    else {
                        fill(0,0,0);
                    }
                    rect(350,350,40,40,10);
                }//stats
            if (sPlay2 === 100) {
                    time++;
                    background(theme[0][0], theme[0][1], theme[0][2]);
                    fill(255, 0, 0);
                    textSize(20);
                    text("You Died",50,50);
                    text("Click to go back",50,175);
                    if (mousePressed && time > 10) {
                        sPlay2 = 0;
                        hP = 100;
                        sP = 100;
                        time = 0;
                        mobHP1 = 10;
                        mobHP2 = 10;
                        mobX1 = 100;
                        mobY1 = 100;
                        mobX2 = 300;
                        mobY2 = 100;
                        mob1 = true;
                        mob2 = true;
                        mobTime1 = 0;
                        mobTime2 = 0;
                    }
        }//lose screen
            if (sPlay2 === 101) {
            time++;
            background(mouseX,0,mouseY);
            fill(mouseY, 0, 0);
            textSize(30);
            text("You Passed Level " + lvl,100,200);
            text("Press to Leave",125,300);
            
            if (mousePressed && time > 30) {
                sPlay2 = 0;
                hP = 100;
                sP = 100;
                time = 0;
                mobHP1 = 10;
                mobHP2 = 10;
                mobX1 = 100;
                mobY1 = 100;
                mobX2 = 300;
                mobY2 = 100;
                mob1 = true;
                mob2 = true;
                mobTime1 = 0;
                mobTime2 = 0;
            }
        }//win screen
    
            }//adventure
            break;
            case 7: {
            background(theme[0][0], theme[0][1], theme[0][2]);
            fill(255);
            textSize(15);
            text("General",50,50);
            button(50,75,40,40,8);
            button(500,500,80,80,4);
            
    
            } //settings
            break;
            case 8: {
            background(theme[0][0], theme[0][1], theme[0][2]);
            textSize(15);
            fill(255);
            text("Fps(set to 60 as default)",60,140);
            fill(0);
            if (mousePressed && mouseX > 100 && mouseX < 200 && mouseY > 180 && mouseY < 210) {
                fpsFocused = true;
            }
            else if (mousePressed === true) {
                fpsFocused = false;
            } 
            rect(100,180,100,30,5);
            fill(0);
            if (fpsFocused) {
                keyPressed = function() {
                    if (keyCode === 8) {
                        fpsTyped = fpsTyped.slice(0,fpsTyped.length-1);
                    }
                    if (keyCode !== 8 && fpsTyped.length < 10 && keyCode !== ENTER && keyCode !== 16 && keyCode !== CONTROL && keyCode !== 157 && keyCode !== 18 && keyCode !== UP && keyCode !== DOWN && keyCode !== RIGHT && keyCode !== LEFT) {
                        fpsTyped+=key.toString();
                    }
                    if (keyCode === ENTER) {
                        frameRate(parseInt(fpsTyped, 10));
                    }
                    
                        
                    };
                    thing2++;
                    textSize(20);
                    fill(255);
                    if (thing2 < 30) {
                        text(fpsTyped + "|",105,200);
                    }
                    if (thing2 >= 30) {
                        text(fpsTyped,105,200);
        
                    }
                    if (thing2 > 60) {
                        thing2 = 0;
                    }
                     
                    
            }
            if (fpsFocused === false) {
                frameRate(parseInt(fpsTyped, 10));
                textSize(20);
                fill(100);
                text(fpsTyped, 105,200);
            }
            fill(255);
            textSize(15);
            text("Theme", 400,130);
            fill(theme[0][0], theme[0][1], theme[0][2]);
            stroke(0);
            strokeWeight(5);
            rect(400,170,50,50, 2);
            if (themeThing > 0) {
                themeThing--;
            }
            if (mouseX > 400 && mouseX < 450 && mouseY > 170 && mouseY < 220) {
                if (themeThing <=0) {
                    themeCount++;
                    themeThing = 20;
                }
            }
            noStroke();
            button(550,550,40,40,7);
    
            }//general settings
            break;
            case 9: {
            background(theme[0][0], theme[0][1], theme[0][2]);
            textSize(20);
            fill(255);
            text("Coming Soon",140,200);
            button(350,350,40,40,7);
            
        
    
            }
            break;
            case 10: {
            background(theme[0][0], theme[0][1], theme[0][2]);
            button(350,350,40,40,7);
            
            }
            break;
            case 11: {
            background(0, 0, 0);
            cursor("NONE");
    
        fill(255,255,255);
        noStroke();
        triangle(mouseX,mouseY + 6,mouseX-15,mouseY-15, mouseX - 25,mouseY);
        textSize(40);
        text('Number      Generator\n              2.0 \n      Early Access',100,50);
        if(mouseX > 250 && mouseX < 325 && mouseY > 215 && mouseY < 260){
            textSize(45);
            text("Play",245,250);
            if(mousePressed){
                screen = 1;
            }
        }
        else{
            text('Play',250,250);
        }
        if(mouseX > 250 && mouseX < 345 && mouseY > 315 && mouseY < 360){
            textSize(45);
            text("Home",245,350);
            if(mousePressed){
                sPlay = 4;
            }
        }
        else{
            textSize(40);
            text("Home",250,350);
        }
        if(screen === 1){
            background(0, 0, 0);
            fill(255, 255, 255);
            if(mouseX>250&&mouseX<350&mouseY>250&& mouseY < 355){
                rect(245,245,110,110,10);
            }
            else{
                fill(150, 150, 150);
                rect(250,250,100,100,10);
            }
        mouseClicked = function() {
            if(mouseX>250&&mouseX<350&mouseY>250&& mouseY < 355){
                 number= random(0,1000);
                 newnumber = round(number);
            }
        };
        if (mouseX > 530 && mouseX < 590 && mouseY > 530 && mouseY < 590) {
                fill(255, 255, 255);
                rect(530,530,60,60,10);
                if (mousePressed) {
                    screen = 0;}
            }
            else{
            fill(150,150,150);
            rect(530,530,60,60,10);
            }
    //ALERT! THIS GAME HAS SOUND. IF YOUR PLAYING IN SCHOOL TURN YOUR VOLUME OFF !ALERT
    //help me pls
    
    
    
    
        
    
    
    textSize(30);
    fill(255, 255, 255);
    text(newnumber,250,200);
    fill(0, 0, 0);
    
    
    //bad numbers
    if(newnumber === 666){
         
         background(90, 0, 0);
         textSize(30);
         text("666",150,200);
         textSize(20);
         text("did you call my number...?(WIP)",50,300);
         text("HOLD click to summon me",50,350);
         text("--> CLICK <--",50,20,1000,100);
         if(mouseX > 80 && mouseX < 150 && mouseY > 20 &&mouseY < 40){
             if(mousePressed){
                 screen = 666;
             } 
             if(screen === 666){
                 background(0, 0, 0);
                 fill(255, 255, 255);
                 ellipse(90,100,60,60);
                 ellipse(300,100,60,60);
                 fill(255, 0, 0);
                 rect(10,250,380,10,10);
                 fill(255,255,255);
                 text("This is still a work in progress...",50,300,10000,1000);
             }
         }
         if(newnumber666 === 3){
             noStroke();
             background(50, 180, 200);
             fill(255, 255, 0); 
             ellipse(100,100,100,100);
             fill(255, 255, 255);
             
             ellipse(200,250,70,70);
             ellipse(240,260,70,70);
             textSize(17);
             text("You escaped Satan.... you win the game......................",0,350);
             textSize(30);
             
             
         }
            
         
         
         
             
         fill(0);
         
         
         
            
         
            
         
         
        
     }// There's a goal in this number..
    if(newnumber === 13) {
         background(255, 0, 0);
         textSize(30);
         text("13",150,200);
         textSize(17);
         text("13 a is bad number....  bad luck activited for an hour",3,300);
     }//Europe USA bad number
    if(newnumber === 69){
        background(235, 60, 210);
        textSize(30);
        text("69",150,200);
        textSize(20);
        text("ew are u william?(william summoned)",30,300);
    }//the sussy number
    if(newnumber === 4){
          if(newnumber4 === 1){
            background(255, 0, 0);
            textSize(30);
            text('4',150,200);
            textSize(18);
            text("4's pronouncing is simluar to death's pronouncing\n in china and japan",7,300);
        }
          if(newnumber4 === 2){
            background(0, 255, 0);
            textSize(30);
            text('4',150,200);
            textSize(20);
            text("4 leaf clover!!  *luck activited for 24 hours*", 15,300);
        }
        }//China/Japan bad number and other countries good number
    if(newnumber === 9){
          
          if(newnumber9 === 1){
              background(255, 0, 0);
              textSize(30);
              text("9",150,200);
              textSize(13);
              text("9's pronouncing is simular to Torture's pronouncing in japan...",10,300);
          }
          if(newnumber9 === 2){
              background(235, 60, 210);
              textSize(30);
              text('9',150,200);
              textSize(12);
              text("In all european and usa cities, this number means LOVE and GENTLE",15,300);
          }
    }//Japan bad number and others good number
    if(newnumber === 911) {
        background(255, 0, 0);
        fill(0, 0, 255);
        noStroke();
        rect(190,0,2000,400);
        fill(0);
        textSize(30);
        text('911',150,200);
        text("you called 911...",100,300);
        
    }//idk if this is bad
    if(newnumber === 66){
        background(90, 0, 0);
        textSize(30);
        text('66',150,200);
        textSize(15);
        text("You will drive with your friends to route 66...",60,300);
    }//a route
    
    //good numbers 
    if(newnumber === 888){
        background(255, 255, 0);
        textSize(30);
        text("888",150,200);
        textSize(15);
        text("888 is a good fortune number because of its triple 8",15,300);
    }//fortune number(basically wealthx3)
    if(newnumber === 3){
        background(0, 255, 0);
        textSize(30);
        text("3",150,200);
        textSize(15);
        text("3 means birth in china it symbolizes the stages of life",15,300);
    }//birth
    if(newnumber === 444){
        background(0, 255, 0);
        textSize(30);
        text("444",150,200);
        textSize(17);
        text("444 is a protection number.*protection from angels\n activited for 24 hours*",1,300);
    }//protection from angels and 4-leaf cloverx3
    if(newnumber === 8){
        background(255, 255, 0);
        textSize(30);
        text("8",150,200);
        textSize(19);
        text(" 8 is a wealth/fortune number *good fortune \nactivited for an hour*",15,300);
    }//Wealth
    if(newnumber === 0){
        background(255, 255, 0);
        textSize(30);
        text('0',150,200);
        textSize(15);
        text("i chose this number.. u will be trillionare when u grow up",15,300);
    }//chosen number from me
    if(newnumber === 7){
          background(0, 255, 0);
          textSize(30);
          text('7',150,200);
          textSize(15);
          text("7 is a voted lucky number * luck activited for an hour*",15,300);
        
    }//voted number
    if(newnumber === 999){
        background(255, 255, 0);
        textSize(30);
        text('999',150,200);
        textSize(17);
        text("A sign from God that your prayers have been heard\n and answered *u have holywater now*",10,300); 
    }//HolYWATER
    if(newnumber === 17){
        background(255, 255, 0);
        textSize(30);
        text('17',150,200);
        textSize(17);
        text("17 is another fortune number from india as 1 + 7 = 8 \n*you have fortune luck for 1 hour*",1,300);
    }//fortune
    if(newnumber === 333){
        background(255, 255, 0);
        textSize(30);
        text('333',150,200);
        textSize(17);
        text("333 is the invitation from angels and a wake-up call\n from the universe",15,300);
    }//WAKE UP!
    if(newnumber === 77){
        background(255, 255, 0);
        textSize(30);
        text('77',150,200);
        textSize(13);
        text("This number is  associated with Jesus *Protection for 48 hours*",15,300);
    }//Jesus
    if(newnumber === 44){
        background(255, 255, 0);
        textSize(30);
        text('44',150,200);
        textSize(20);
        text("Just expect fortune for the rest of your life...",4,300);
    }//fortune again bruh
    if(newnumber === 789){
        background(255, 255, 0);
        textSize(30);
        text('789',150,200);
        textSize(25);
        text("be nice and u will not be punished",2,300);
    }//angels
    
    //???
    if(newnumber === 1000){
         playSound(getSound("retro/rumble"));
         playSound(getSound("retro/whistle1"));
         background(0, 0, 0);
         fill(255, 255, 255);
         ellipse(90,100,60,60);
         ellipse(300,100,60,60);
         fill(255, 0, 0);
         rect(10,250,380,10,10);
        
    }//   ?      ?      ?   .    .     . 
    }
    noStroke();
    fill(50, 50, 50);
    triangle(mouseX,mouseY + 6,mouseX-15,mouseY-15, mouseX - 25,mouseY);
    
            }
            break;
            case 12: {
            background(theme[0][0], theme[0][1], theme[0][2]);
            textSize(25);
            text("Number Generator...\nby Becker",100,100);
            button(550,550,40,40,4);
    
            }
            break;
            case 13: {
            background(0,255,0);
    
            }
            break;
        }
         
        if (sPlay > 3.5 && sPlay !==100 && keyIsPressed && keyCode === ALT) {
            sPlay = 4;
        }
        if (sPlay !== 4) {
            rectBigBox = false;
        }
        mousePressed = function() {
            if (mouseButton === RIGHT) {
                rightClicked = true;
                rightClickX = mouseX;
                rightClickY = mouseY;
            }
            if (mouseButton === LEFT) {
                if (mouseX > rightClickX && mouseX < rightClickX + 120 && mouseY > rightClickY && mouseY < rightClickY + 40) {
                    
                }
                else {
                    rightClicked = false;
                }
            
                }
            
        };
        if (rightClicked === true) {
            fill(255);
            rect(rightClickX,rightClickY,120,rightClickThing,5);
            if (sPlay === 4) {
                if (mouseX > rightClickX && mouseX < rightClickX + 120 && mouseY > rightClickY && mouseY < rightClickY + 20) {
                    if (mousePressed && mouseButton === LEFT) {
                        sPlay = 7;
                        rightClicked = false;
                    }
                    fill(220);
                }
                else {
                    fill(255);
                }
                rect(rightClickX,rightClickY,120,20,5);
                if (mouseX > rightClickX && mouseX < rightClickX + 120 && mouseY > rightClickY + 20 && mouseY < rightClickY+ 40) {
                    fill(220);
                    if (mousePressed && mouseButton === LEFT) {
                        debugClicked = true;
                        rightClicked = false;
                    }
                }
                else {
                    fill(255);
                }
                rect(rightClickX,rightClickY+20,120,20,5);
                if (mouseX > rightClickX && mouseX < rightClickX + 120 && mouseY > rightClickY + 40 && mouseY < rightClickY + 60) {
                    fill(220);
                    if (mousePressed && mouseButton === LEFT) {
                        
                    }
                }
                else {
                    fill(255);
                }
                rect(rightClickX, rightClickY+40, 120,20,5);
                fill(0);
                textSize(12);
                text("Settings",rightClickX+5,rightClickY+15);
                text("Debug Console",rightClickX+5,rightClickY+35);
                text("Go to scene",rightClickX+5, rightClickY+55);
                
            }
            if (sPlay < 4) {
                textSize(10);
                fill(0);
                text("No Options when locked",rightClickX+5,rightClickY+20);
            }
            }
    };
    