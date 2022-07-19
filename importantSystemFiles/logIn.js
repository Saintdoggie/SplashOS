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
        if (keyCode !== 8 && logTyped.length < 10 && keyCode !== ENTER && keyIsPressed && blockedChars() == false) {
            logTyped+=key.toString();
            keyIsPressed = false
        }
        if (keyCode === ENTER && keys) {
            if (logTyped.toLowerCase() === "something") {
                loggedIn = true 
            }
            if (logTyped.toLowerCase() === "extra") {
                extra = true;
            }
        }
        fill(0)
        textSize(40)
        text(logTyped.toLowerCase() + "|",320,415);
        textSize(12)
        }