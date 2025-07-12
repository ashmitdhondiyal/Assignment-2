var start = new Date().getTime();
var box = document.getElementById("box");

//color changing of the box
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//moving of the box
function move() {
    var left;
    var top;
    var wh;
    left = Math.random() * 300;
    top = Math.random() * 300;
    wh = ((Math.random() * 400) + 100);
    box.style.left = left + "px";
    box.style.top = top + "px";
    box.style.width = wh + "px";
    box.style.height = wh + "px";
    box.style.display = "block";
    box.style.backgroundColor = getRandomColor();
    start = new Date().getTime();

}

//main of the program
move();
box.onclick = function () {
    box.style.display = "none";
    var end = new Date().getTime();
    var timetook = (end - start) / 1000;
    alert(timetook + " Seconds");
    move();
}
