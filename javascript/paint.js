var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var page_header = document.getElementById("page_header");
var container = document.getElementById("container");
var div_canvas = document.getElementById("div_canvas");
var btn_delete = document.getElementById("btn_delete");
 
 	
  	ctx.lineWidth = 7;
  	ctx.strokeStyle = "blue";
	canvas.addEventListener("mousedown",startPaint,false);
	canvas.addEventListener("mouseup",overPaint,false);
	btn_delete.addEventListener("click",deletePaint,false);


function startPaint(e){

	ctx.beginPath();
	ctx.moveTo(x_pos(e),y_pos(e));
	canvas.addEventListener("mousemove",paint,false);

}

function paint(e) {
	ctx.lineTo(x_pos(e),y_pos(e));
	ctx.stroke();
}

function overPaint(e){
	canvas.removeEventListener("mousemove",paint,false);
}

function deletePaint(){
	canvas.width = canvas.width;
}

function x_pos(ev){
	return ev.clientX - canvas.offsetLeft - container.offsetLeft - div_canvas.offsetLeft; 
	}
 function y_pos(ev){
 	return ev.clientY- canvas.offsetTop - div_canvas.offsetTop;
 }