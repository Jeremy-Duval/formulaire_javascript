
//Wait for window to be loaded before you execute that code 
window.addEventListener("load", function() {

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
			
			
			if(checked){
				if(nameCheck()==true){
					if(firstnameCheck()==true){
						if(ageCheck()==true){
							document.getElementById("target").disabled = false; 
						} else {
							alert("Your age isn't correct !");
						} 
					} else {
						alert("Enter a firstname !");
					}
				} else {
					alert("Enter a name !");
				}

			}else{
				document.getElementById("target").disabled = true;
			}
		}


		//Check if the field name isn't empty 
		//return true if is check, false else
		function nameCheck(){
			var check = new Boolean(false);
			var field_value = document.forms["form"]["name"].value;
			//test if the field isn't empty 
			if(field_value != ""){
				check = true;
			}
			return check;
		}

		//Check if the field firstname isn't empty 
		//return true if is check, false else
		function firstnameCheck(){
			var check = new Boolean(false);
			var field_value = document.forms["form"]["firstname"].value;
			//test if the field isn't empty 
			if(field_value != ""){
				check = true;
			}
			return check;
		}

		//Check if the field age is >= 18 
		//return true if is check, false else
		function ageCheck(){
			var check = new Boolean(false);
			var field_value = document.forms["form"]["age"].value;
			//test if the field isn't empty and if it's >= 18
			if((field_value != "")&&(field_value >=18 )){
				check = true;
			}
			return check;
		}