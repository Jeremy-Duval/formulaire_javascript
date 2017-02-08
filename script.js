
//Wait for window to be loaded before you execute that code 
window.addEventListener("load", function() {
console.log(document.getElementById("target"));
document.getElementById("target").addEventListener("click", function() {
	console.log('haha, tickles'); 
});
});

		function test() {
		
			console.log('test');
		}
	