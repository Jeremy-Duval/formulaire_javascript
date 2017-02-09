
//Wait for window to be loaded before you execute that code 
window.addEventListener("load", function() {

//Action on button	
console.log(document.getElementById("target"));
document.getElementById("target").addEventListener("click", function() {
	console.log('haha, hey'); 
	
});

//Action on checkbox 
console.log(document.getElementById("check")); 
document.getElementById("check").addEventListener("click", check);	
	 
});


		function check() {
				if(document.getElementById("check").checked)
				{
					console.log("Vous m'avez cochée");
				}
				else 
				{
					console.log("Vous m'avez bien décochée comme il faut !"); 
				}
		}
	