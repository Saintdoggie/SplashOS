// p5.js main file

function setup() 
{
    checkSize()
    const canvas = createCanvas(1000,1000);
    checkSize()
    resizeCanvas(width, height);
    canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault())
    p5.disableFriendlyErrors = true;
    noCursor();
    frameRate(500);
    settings.taskbar.init()
    windows.init()

}

function draw() 
{
    switch (settings.accounts.bootDone) {
        case false:
            background(220)
            settings.accounts.boot()
            if (windows.allowOnLogIn == true) {
                windows.ids()
            }
            mouse()
            if (settings.accounts.bootDone == true) {
                checkSize()
                resizeCanvas(width, height);
                errorMessage();
            }
        break;
        case true:

        settings.displayGUI()
        
        //not much here...
        break;
    }
    mouseIsClicked = false;
}
