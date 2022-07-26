var loggedIn = false;
    let logTyped = "";
    var logIn = function() {
        if ('virtualKeyboard' in navigator) {
            fill(0)
            text("mobile", 10,10)
            navigator.virtualKeyboard.overlaysContent = true;
        }
        else {
            console.log("no mobile support")
        }
        fill(0)
        textSize(50)
        text("Please Log In", width / 2 - 170,200)
        rect(width / 2 - 300,300,600,200,10);
        fill(255)
        rect(width / 2 - 200,350,400,100,10)
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
        text(logTyped.toLowerCase() + "|",width / 2 - 180,415);
        textSize(12)
        }