var canvas;
var context;
var mouse_down = false;
var draw_color = 'black';

window.addEventListener("load", function() {
	 f_canvas();
});

function f_canvas(){
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');

	canvas.addEventListener("mousedown",mouseStateDown);
	canvas.addEventListener("mousemove",circle);
	canvas.addEventListener("mouseup",mouseStateUp);

}

function circle(event){
	if(mouse_down){
		var x = event.pageX-canvas.offsetLeft;
	    var y = event.pageY-canvas.offsetTop;
	    context.fillStyle = draw_color;
      	context.fill();
	    //console.log("**********************");
	    //console.log(canvas.offsetLeft);
	    //console.log(event.clientX);
	    //console.log(x);
	    context.strokeStyle = draw_color;
		context.beginPath();
		context.arc(x,y,2,0,2*Math.PI);//x,y,radius,break,circle
		context.stroke();
	}
}

function mouseStateDown(){
	mouse_down = true;
}

function mouseStateUp(){
	mouse_down = false;
}