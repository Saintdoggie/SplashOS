function TimeDisplay() {
    var isAM;
    var h;
    h = hour();
    if (h > 12) {
        isAM = false;
        h-=12;
    }
    else {
        isAM = true;
    }
    var m;
    m = minute();

    fill(200);
    if (mouseX > width - 150 && mouseX < width - 10 && mouseY > height - 50 && mouseY < height - 10) {
        fill(170);
    }
    rect(width - 150 ,height - 50,130,40,5);
    fill(0);
    textSize(25);
    if (m < 10) {
        if (isAM == true) {
            text(h + ":0" + m + " AM", width - 135,height - 22);
        }
        if (isAM == false) {
            text(h + ":0" + m + " PM", width - 135,height - 22);
        }
    }
    else if (m > 10) {
        if (isAM == true) {
            text(h + ":" + m + " AM", width - 135,height - 22);
        }
        if (isAM == false) {
            text(h + ":" + m + " PM", width - 135,height - 22);
        }
    }

    
}