function TimeDisplay() {
    var isAM;
    var h;
    h = hour();
    if (h > 12) {
        isAM = false;
        h-=12;
    }
    else isAm = true;
    var m;
    m = minute();

    fill(200);
    if (mouseX > 850 && mouseX < 980 && mouseY > 950 && mouseY < 990) {
        fill(170);
    }
    rect(850,950,130,40,5);
    fill(0);
    textSize(25);
    if (isAM == true) {
        text(h + ":" + m + " AM", 865,978);
    }
    if (isAM == false) {
        text(h + ":" + m + " PM", 865,978);
    }
}