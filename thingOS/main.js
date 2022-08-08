// p5.js main file

function setup() 
{
    const canvas = createCanvas(1000, 1000)
    canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault())
    noCursor();
    var fps = 60;
    frameRate(fps);
    taskbar.init()
    windows.init()

}


function draw() 
{
    resizeCanvas(windowWidth, windowHeight);
    switch (loggedIn) {
        case false:
            background(220)
            logIn()
            if (windows.allowOnLogIn == true) {
                windows.ids()
            }
            mouse()
            
        break;
        case true:
            background(backgroundColor[0], backgroundColor[1], backgroundColor[2]);
            selector.selectArea();
            windows.ids()

            taskbar.box();
            taskbar.bar();
            TimeDisplay();
            rightClickMain.rightClick()
            mouse()

            //not much here...
        break;
    }
    mouseIsClicked = false;
}

