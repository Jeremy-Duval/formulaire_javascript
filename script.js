
//Wait for window to be loaded before you execute that code 
window.addEventListener("load", function() {

	//Action on checkbox 
	console.log(document.getElementById("check")); 
	document.getElementById("check").addEventListener("click", globalCheck);	
		 

	console.log(document.getElementById("name")); 
	document.getElementById("name").addEventListener("input", nameCheck);

	console.log(document.getElementById("firstname")); 
	document.getElementById("firstname").addEventListener("input", firstnameCheck);

	console.log(document.getElementById("age")); 
	document.getElementById("age").addEventListener("input", ageCheck);	

	console.log(document.getElementById("userID")); 
	document.getElementById("userID").addEventListener("input", userIDCheck);

	console.log(document.getElementById("password2")); 
	document.getElementById("password2").addEventListener("input", samePasswordCheck);

	console.log(document.getElementById("password1")); 
	document.getElementById("password1").addEventListener("input", samePasswordCheck);	
	 
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
							if(userIDCheck()==true){
								if(samePasswordCheck()==true){
									document.getElementById("target").disabled = false; 
								}  
							}
						}
					}
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
				document.getElementById("spanName").hidden = true;
			} else {
				document.getElementById("spanName").hidden = false;
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
				document.getElementById("spanFirstName").hidden = true;
			} else {
				document.getElementById("spanFirstName").hidden = false;
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
				document.getElementById("spanAge").hidden = true;
			} else {
				document.getElementById("spanAge").hidden = false;
			}
			return check;
		}

		//Check if the userID's field's length is >= 12 
		//return true if is check, false else
		function userIDCheck(){
			var check = new Boolean(false);
			var field_value = document.forms["form"]["userID"].value;
			//test if the field isn't empty and if the length is >= 12
			if((field_value != "")&&(field_value.length >= 12)){
				check = true;
				document.getElementById("spanUserID").hidden = true;
			} else {
				document.getElementById("spanUserID").hidden = false;
			}
			return check;
		}

		//Check if the 2 passwords are same
		//return true if is check, false else
		function samePasswordCheck(){
			var check = new Boolean(false);
			var field_value_password1 = document.forms["form"]["password1"].value;
			var field_value_password2 = document.forms["form"]["password2"].value;
			//test if the fields are same
			if(field_value_password1===field_value_password2){
				check = true;
				document.getElementById("spanSamePassword").hidden = true;
			} else {
				document.getElementById("spanSamePassword").hidden = false;
			}
			return check;
		}