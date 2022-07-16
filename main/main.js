

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
    loggedIn = true;
    switch (loggedIn) {
        case false:
            background(220)
            logIn()
            mouse()
        break;
        case true:
        background(0,0,255);
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

}
