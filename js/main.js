
/*
0.0.1
restarted on git and vscode because it was getting kind of limiting...


*/

//mouse stuff
{
function mouse() {
    fill(255);
    stroke(0);
    strokeWeight(3)
    if (mouseIsPressed) {
        fill(200)
    }
    ellipse(mouseX,mouseY,20,20);
    fill(0)
    noStroke()
    text(mouseX + ", " + mouseY,12,12)
} 






}

//general stuff
{



}


//log in stuff
{
    let loggedIn = false

    var logIn = function() {
        fill(0)
        rect(200,300,600,200,10);
        fill(255)
        rect(300,350,400,100,10)
        

    }
    




}




function setup() 
{
    createCanvas(1000,1000);
    noCursor();
    frameRate(60);
}


function draw() 
{
    background(220)

    logIn()
    mouse()

}