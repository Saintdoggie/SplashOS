var blockedChars = function() {
    if (keyCode !== 8 && keyCode !== ENTER && keyCode !== 16 && keyCode !== CONTROL && keyCode !== 157 && keyCode !== 18 && keyCode !== 20 && keyCode !== 39 && keyCode !== 37 && keyCode !== 38 && keyCode !== 40) {
        return false;
    }
    else {
        return true;
        
    }
}
function errorMessage() {
    console.log("if your seeing errors... why are you on firefox");
}
function checkSize() {
    let box = document.getElementById('body');
    var width = box.offsetWidth;
    var height = box.offsetHeight;
}