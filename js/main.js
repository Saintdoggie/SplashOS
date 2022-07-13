
//mouse stuff
{
function mouse() {
    fill(255);
    stroke(0);
    strokeWeight(3)
    if (mouseIsPressed) {
        fill(100)
    }
    ellipse(mouseX,mouseY,20,20);
    fill(0)
    noStroke()
    text(mouseX + ", " + mouseY + ",  " + taskbar.barThing + ", " + taskbar.barTime,12,12)
} 


//keyboard
{
    var keys = [];
    function keyPressed() {
        keys[keys] = true;
    }
    function keyReleased() {
        keys[keys] = false;
    }
}



}

//general stuff
{



}


//log in stuff
{
    var loggedIn = false;
    let logTyped = "";
    var logIn = function() {
        
        fill(0)
        textSize(50)
        text("Please Log In", 330,200)
        rect(200,300,600,200,10);
        fill(255)
        rect(300,350,400,100,10)
        textSize(12)
        
        if (keyCode === 8 && keyIsPressed) {
            logTyped = logTyped.slice(0,logTyped.length-1);
            keyIsPressed = false
        }
        if (keyCode !== 8 && logTyped.length < 10 && keyCode !== ENTER && keyIsPressed) {
            logTyped+=key.toString();
            keyIsPressed = false
        }
        if (keyCode === ENTER && keys) {
            if (logTyped.toLowerCase() === "something") {
                loggedIn = true
                logTyped = "";

                
            }
        }
        if (keys === ENTER) {
            if (logTyped.toLowerCase() === "extra") {
                println("Done!");
                
            }
        }
        fill(0)
        textSize(40)
        text(logTyped.toLowerCase() + "|",320,415);
        textSize(12)
        }
    




}


//taskbar
{
    var taskbar = {
        init: function() {
            this.x = 10;
            this.y = 1100;
            this.barThing = false;
            this.barTime = 10;
        },
        bar: function() {
        fill(0,0,0,200)
        rect(0,940,1000,60); 
        fill(200)
        if (this.barTime < 12) {
            this.barTime++;
        }
        if (mouseX > 10 && mouseX < 110 && mouseY > 950 && mouseY < 990) {
            fill(150)
            if (mouseIsPressed) {
                if (this.barTime > 10 && this.barThing == false && mouseButton == LEFT) {
                    this.barThing = true
                    this.barTime = 0;
                }
                else if (this.barTime > 10 && this.barThing == true && mouseButton == LEFT) {
                    this.barThing = false;
                    this.barTime = 0;
                }
            }
        }
        rect(10,950,100,40,5)
        },
        box: function() {
            if (this.barThing == true) {
                if (this.y > 700) {
                    this.y-=20;
                }
                if (mouseX > 10 && mouseX < 110 && mouseY > 950 && mouseY < 990) {
                    this.mouseOverBar = true;
                }
                else {
                    this.mouseOverBar = false;
                }
                if (mouseIsPressed && this.mouseOverBar == false) {
                    
                    this.barThing = false;
                
                }
                    
                        
                    
            }
            else {
                if (this.y < 1100) {
                    this.y+=20;
                }
            }
            fill(200,200,200)
            rect(this.x,this.y,300,230,4)

        }
    }
    
}



function setup() 
{
    const canvas = createCanvas(1000, 1000)
    canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault())
    noCursor();
    frameRate(60);
    loggedIn = true;
    taskbar.init()

}


function draw() 
{
    
    switch (loggedIn) {
        case false:
            background(220)
            logIn()
            mouse()
        break;
        case true:
        background(0,0,255)
        taskbar.box()


        taskbar.bar()


        mouse()
        break;
    }

}
