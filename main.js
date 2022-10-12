canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var lastPosition_x,lastPosition_y;
color="green";
width_of_line=3;
var width=screen.width;
var newwidth=screen.width-10;
var newheight=screen.height-100;
if(width<992){
document.getElementById("myCanvas").width=newwidth;
document.getElementById("myCanvas").height=newheight;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
console.log("mytouchstart");
lastPosition_x=e.touches[0].clientX-canvas.offsetLeft;
lastPosition_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clientY-canvas.offsetTop;
console.log("mytouchmove");
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(lastPosition_x,lastPosition_y);
        console.log("lastX:"+lastPosition_x+"lastY"+lastPosition_y);
        ctx.lineTo(current_x,current_y);
        console.log("current_x:"+current_x+"current_y"+current_y);
        ctx.stroke();
        lastPosition_x=current_x;
        lastPosition_y=current_y;  
}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

