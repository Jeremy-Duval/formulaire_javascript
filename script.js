
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
							if(userIDCheck()==true){
								if(PasswordCheck()==true){
									document.getElementById("target").disabled = false; 
								}else {
									
								}  
							}else {
								alert("Your user ID is too short !");
							} 
						}else {
							alert("Your age isn't correct !");
						} 
					}else {
						alert("Enter a firstname !");
					}
				}else {
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

		//Check if the userID's field's length is >= 12 
		//return true if is check, false else
		function userIDCheck(){
			var check = new Boolean(false);
			var field_value = document.forms["form"]["userID"].value;
			//test if the field isn't empty and if the length is >= 12
			if((field_value != "")&&(field_value.length >= 12)){
				check = true;
			}
			return check;
		}

		//Check if the 2 passwords are same
		//return true if is check, false else
		function PasswordCheck(){
			var check = new Boolean(true);
			var field_value_password1 = document.forms["form"]["password1"].value;
			var field_value_password2 = document.forms["form"]["password2"].value;
			//test if the fields are same
			if(field_value_password1===field_value_password2){
			}
			else
			{
				alert("Passwords aren't same !");
				return false; 
			}
			//if they are same, check if they are 8 character long, or are longer
			if(field_value_password1.length < 8)
			{
				alert("Error, password has to be 8 character or longer"); 
				return false; 
			}
			
			
			//We create 4 boolean check if : -Pass has 1 min letter -Pass has 1 cap letter - Pass has 1 number -Pass has a special character
			var low = new Boolean(false);
			var upp = new Boolean(false);
			var num = new Boolean(false);
			var special = new Boolean(false);
						
			//For each character loop
			for(var i = 0; i < field_value_password1.length; i ++)
			{
				//We check for what the character is 
				
				//If the character is a min 
				if (field_value_password1[i] === field_value_password1[i].toLowerCase())
				{
										
					//Checks if it's a special character 
					if (field_value_password1[i].toLowerCase() === field_value_password1[i].toUpperCase())
					{
						special = true; 
					}
					else
					{
						low = true;
					}					
				}
				if (field_value_password1[i] === field_value_password1[i].toUpperCase())
				{
					//Checks if it's a special character 
					if (field_value_password1[i].toLowerCase() === field_value_password1[i].toUpperCase())
					{
						special = true; 
					}
					else
					{
						upp = true; 
					}
				}
					
				
				if (field_value_password1[i] > '0' && field_value_password1[i] < '9')
				{
					num = true; 
				}

				
			}
			
			//We check if all conditions are filled				
			console.log(low, upp, num , special); 

			if (low === true && upp === true && num === true && special === true )
			{
			}
			
			
			return check;
		}