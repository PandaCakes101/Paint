canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "red";


var widthofline = 1;
mousevent = "";
var lastmousex, lastmousey;

canvas.addEventListener("mousedown", my_mousedown);


function my_mousedown(e) {
    color = document.getElementById("color").value;
    widthofline = document.getElementById("width_of_line").value;
    mousevent = "mousedown";



}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    currentmousex = e.clientX - canvas.offsetLeft;
    currentmousey = e.clientY - canvas.offsetTop;
    if (mousevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = widthofline;
        ctx.moveTo(lastmousex, lastmousey);
        console.log("lastmousex= "+lastmousex+" lastmousey= "+lastmousey);
        ctx.lineTo(currentmousex, currentmousey);
        console.log("currentmousex= "+currentmousex+" currentmousey= "+currentmousey);
        ctx.stroke();
    }
    
    lastmousex=currentmousex;
    lastmousey=currentmousey;
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mousevent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mousevent = "mouseleave";
}



function cleararea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
