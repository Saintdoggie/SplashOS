var blockedChars = function() {
    if (keyCode !== 8 && keyCode !== ENTER && keyCode !== 16 && keyCode !== CONTROL && keyCode !== 157 && keyCode !== 18 && keyCode !== 20) {
        return false;
    }
    else {
        return true;
        
    }
}