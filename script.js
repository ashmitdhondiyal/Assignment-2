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
    wh = ((Math.random() * 300) + 100);
    var maxLeft = window.innerWidth - wh;
    var maxTop = window.innerHeight - wh;
    maxLeft = Math.max(0, maxLeft);
    maxTop = Math.max(0, maxTop);
    left = Math.random() * maxLeft;
    top = Math.random() * maxTop;
    box.style.left = left + "px";
    box.style.top = top + "px";
    box.style.width = wh + "px";
    box.style.height = wh + "px";
    box.style.display = "block";
    box.style.backgroundColor = getRandomColor();
    start = new Date().getTime("seconds");

}

//main of the program
move();
box.onclick = function () {
    box.style.display = "none";
    var end = new Date().getTime();
    var timetook = (end - start) / 1000;
    alert(timetook + " seconds");
    move();
}
