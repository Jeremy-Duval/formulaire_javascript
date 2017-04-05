var canvas;
var context;
var mouse_down = false;
var draw_color = 'black';
var reset_button;

window.addEventListener("load", function() {
	 f_canvas();
});

window.addEventListener("keydown", changeColor);

function f_canvas(){
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');

	canvas.addEventListener("mousedown",mouseStateDown);
	canvas.addEventListener("mousemove",circle);
	canvas.addEventListener("mouseup",mouseStateUp);


	reset_button = document.getElementById("reset");
	reset_button.addEventListener("click", f_reset);

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

function changeColor(event){
	console.log(event.keyCode);
	if((event.keyCode==49)||(event.keyCode==97)){
		draw_color = 'red';
	}
	if((event.keyCode==50)||(event.keyCode==98)){
		draw_color = 'green';
	}
	if((event.keyCode==51)||(event.keyCode==99)){
		draw_color = 'blue';
	}
	if((event.keyCode==52)||(event.keyCode==100)){
		draw_color = 'Aqua';
	}
	if((event.keyCode==53)||(event.keyCode==101)){
		draw_color = 'BlueViolet';
	}
	if((event.keyCode==54)||(event.keyCode==102)){
		draw_color = 'Chartreuse';
	}
	if((event.keyCode==55)||(event.keyCode==103)){
		draw_color = 'Gold';
	}
	if((event.keyCode==56)||(event.keyCode==104)){
		draw_color = 'OrangeRed';
	}
	if((event.keyCode==57)||(event.keyCode==105)){
		draw_color = 'Magenta';
	}
	if((event.keyCode==48)||(event.keyCode==96)){
		draw_color = 'black';
	}
}

function f_reset(){
	// Store the current transformation matrix
	context.save();

	// Use the identity matrix while clearing the canvas
	context.setTransform(1, 0, 0, 1, 0, 0);
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Restore the transform
	context.restore();
}