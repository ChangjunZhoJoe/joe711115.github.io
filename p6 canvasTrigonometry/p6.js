//drawcanvas redrawcanvas drawrec drawlines drawcicle howlong() getmouseposition() dratextatpoint
//getmouseposition getangleUsingXandY degreesToRadius RadiustoDegrees drawtriangle
class MousePosition{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

let mousePos = new MousePosition(0,0);

document.addEventListener('DOMontentLoaded', setupCanvas);

function setupCanvas(){
    canvas = document.getElementById('my-canvas');
     ctx = canvas.getContext('2d');
    drawCanvas();
    canvas.addEventListener("mousemove",redrawCanvas);
}
function drawCanvas(){
    drawRectangle('#000000',5,0,0,600,600);
    drawLine('#00000',1,X_CIRCLE_CENTER,0,X_CIRCLE_CENTER,600);
    drawLine('#00000',1,0,Y_CIRCLE_CENTER,600,Y_CIRCLE_CENTER);
    drawCircle('#000000',1,X_CIRCLE_CENTER,Y_CIRCLE_CENTER,radius,2*Math.PI);
}
function redrawCanvas(evt){
    ctx.clearRect(0,0,600,600);
    drawCanvas();
    getMousePosition(evt);
    

}
function drawRectangle(strokeColor,lineWidth,startX,startY,endX,endY){
    ctx.strokeColor = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(startX,startX,endX,endY);
}
function drawCircle(strokeColor,lineWidth,xCenter,YCenter,radius,startArc,endArc){
    ctx.strokeColor = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(xCenter,YCenter,radius,startArc,endArc);
    ctx.stroke();

}
function drawLine(strokeColor,lineWidth,startX,startY,endX,endY){
    ctx.strokeColor = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.move(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}
function drawTriangle(){}
function drawTextAtPoint(text,x,y){
    ctx.font = '15px Arial';
    ctx.fillText(text,x,y);
}
function getMousePosition(){}
function degreesToRadius(){}
function radiusToDegrees(){}
function getLineLength(){}
function getTangleUsingXandY(){}
