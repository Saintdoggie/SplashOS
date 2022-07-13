
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
    text(mouseX + ", " + mouseY,12,12)
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
            if (logTyped === "something") {
                loggedIn = true
                logTyped = "";

                
            }
        }
        if (keys === ENTER) {
            if (logTyped === "never gon-") {
                println("Done!");
                
            }
        }
        fill(0)
        textSize(40)
        text(logTyped + "|",320,415);
        textSize(12)
        }
        
    




}


//taskbar
{
    function taskbar() {
        rect(0,930,1000,70);

    }
}



function setup() 
{
    const canvas = createCanvas(1000, 1000)
    canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault())
    noCursor();
    frameRate(60);
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

        taskbar()


        mouse()
        break;
    }

}
