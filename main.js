canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);
var mevent = "";
function my_mousedown(e) {
    mevent = "down";
    last_position_of_x = e.clientX - canvas.offsetLeft;
    last_position_of_y = e.clientY - canvas.offsetTop;
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    if (mevent == "down") {
        current_position_of_x = e.clientX - canvas.offsetLeft;
        current_position_of_y = e.clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = "light green"
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
        last_position_of_x=current_position_of_x;
        last_position_of_y=current_position_of_y;
    }
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mevent = "up";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mevent = "leave";
}