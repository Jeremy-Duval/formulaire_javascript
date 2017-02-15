
//Wait for window to be loaded before you execute that code 
window.addEventListener("load", function() {
	console.log(document.getElementById("submit"));
	document.getElementById("age").addEventListener("onclick", function() {
		console.log('haha, tickles'); 
	});
});
	