// p5s.js main file

function setup() 
{
    const canvas = createCanvas(1000, 1000)
    canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault())
    noCursor();
    frameRate(60);
    taskbar.init()

}


function draw() 
{
    resizeCanvas(windowWidth, windowHeight);

    switch (loggedIn) {
        case false:
            background(220)
            logIn()
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

