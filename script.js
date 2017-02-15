
//Wait for window to be loaded before you execute that code 
window.addEventListener("load", function() {

globalCheck(); 

//Action on button	
console.log(document.getElementById("target"));
document.getElementById("target").addEventListener("click", function() {
	console.log('haha, hey'); 
	
});

//Action on checkbox 
console.log(document.getElementById("check")); 
document.getElementById("check").addEventListener("click", globalCheck);	
	 
});

	
		//checks every field to see if we can enable the button 
		//Call this function everytime the users does something 
		function globalCheck(){
			
			//We store the value into a variable (because it's a too long name in the conditionnal structure bellow !) 
			var checked = document.getElementById("check").checked; 
			
			
			if(checked)
				document.getElementById("target").disabled = false; 
			else 
				document.getElementById("target").disabled = true; 
		}