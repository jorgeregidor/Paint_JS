/**
 * @title Paint
 * @author Jorge Regidor
 * @website jorgeregidor.blogspot.com
 * @version 1.1
 */


// get de HTML elements

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var page_header = document.getElementById("page_header");
var container = document.getElementById("container");
var div_canvas = document.getElementById("div_canvas");
var btn_delete = document.getElementById("btn_delete");
 
 	
  	// Define the pencil size
  	ctx.lineWidth = 7;

  	// Pencil colour
  	ctx.strokeStyle = "blue";

  	// create de  MouseEvents
	// When the mouse is pushed call the startPaint function 
	canvas.addEventListener("mousedown",startPaint,false);
	// When the mouse isn´t pushed call the overPaint function 
	canvas.addEventListener("mouseup",overPaint,false);
    // When the button is clicked call the deletePaint function
	btn_delete.addEventListener("click",deletePaint,false);
	
	// create de  TouchEvents
	// When the touch de canavas call the startPaint function 
    canvas.addEventListener("touchstart",startPaint,false);
    // When the stop touch de canvas call the overPaint function 
	canvas.addEventListener("touchend",overPaint,false);
	


// Is placed in the position of the mouse or touch and make the event 
//   that moving the mouse call the paint function
function startPaint(e){

    e.preventDefault();
	ctx.beginPath();
	ctx.moveTo(x_pos(e),y_pos(e));

	canvas.addEventListener("touchmove",paint,false);
	canvas.addEventListener("mousemove",paint,false);

}


// Painting path of the mouse o touch
function paint(e) {
	
	ctx.lineTo(x_pos(e),y_pos(e));
	ctx.stroke();
}

// disable the mouse or touch move event, so stop painting
function overPaint(e){

	canvas.removeEventListener("touchmove",paint,false);
	canvas.removeEventListener("mousemove",paint,false);
 }

//if you redefine the size of the canvas, the screen is clean
function deletePaint(){
	
	canvas.width = canvas.width;
}

// This function find out the position of the mouse or touch on the canvas, 
//   contrasting the position of the canvas in the window
function x_pos(ev){
	if (ev.clientX != null)
	{return ev.clientX - canvas.offsetLeft - container.offsetLeft - div_canvas.offsetLeft; }
	else
	{return ev.targetTouches[0].pageX - canvas.offsetLeft - container.offsetLeft - div_canvas.offsetLeft; }
	}
 function y_pos(ev){
 	if (ev.clientY != null)
 	{return ev.clientY- canvas.offsetTop - div_canvas.offsetTop;}
 	else	
 	{return ev.targetTouches[0].pageY - div_canvas.offsetTop;}
 }