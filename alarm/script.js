window.addEventListener("load", function() {

	//Action on checkbox 
	console.log(document.getElementById("new")); 
	document.getElementById("new").addEventListener("click", createAlarm);	
	 
});


function createAlarm(){
	document.createElement("p");
}