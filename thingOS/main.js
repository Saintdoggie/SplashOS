// p5.js main file

function setup() 
{
    const canvas = createCanvas(1000, 1000)
    canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault())
    p5.disableFriendlyErrors = true;
    noCursor();
    var fps = 60;
    frameRate(500);
    taskbar.init()
    windows.init()

}


function draw() 
{
    //settings.accounts.loggedIn = true
    resizeCanvas(windowWidth, windowHeight);
    switch (settings.accounts.bootDone) {
        case false:
            background(220)
            settings.accounts.boot()
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
