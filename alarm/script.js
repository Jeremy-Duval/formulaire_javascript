window.addEventListener("load", function() {

	//Action on checkbox 
	console.log(document.getElementById("new"));
	
	//Generates one clock timer 
	updateClock();
	

	document.getElementById("new").addEventListener("click", createAlarm);	
	
	 
});



num_id=0;
var alarmArray

function updateClock()
{
	//Get the current time 
	var currentTime = new Date(); 
	
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	
	if (hours < 10 )
		hours = "0"+hours; 
	if (minutes < 10) 
		minutes= "0"+minutes;
	if (seconds < 10)
		seconds = "0"+seconds;
	
	//Get Alarms time
	var alarmId = 0; 
	
	var checkboxes = document.getElementsByName("checkAlarm"); 
	var hourAlarm = document.getElementsByName("hoursAlarm"); 
	var minuteAlarm= document.getElementsByName("minutesAlarm"); 
	
	var play;
	

	console.log(hours+ " : " + minutes + " " + seconds);
	
	var audio; 
	
	for (var i = 0 ; i < checkboxes.length; i ++ ) 
	{	
		//Check if the alarm is toogled 
		console.log(hourAlarm[i].value +  "  "  + minuteAlarm[i].value ) ;
			//Check if the time matches 
			if(hourAlarm[i].value == hours && minuteAlarm[i].value == minutes)
			{
				play = document.getElementsByName("soundAlarm");
				console.log("Ring ring, it's time !") ; 
				audio = new Audio("assets/sounds/"+play[i].value); 
				audio.play(); 
			}
	}
	
	//Get the element we want to fill 
	var elem = document.getElementById('clock'); 
	//Fill the element 
	elem.innerHTML = "Wake up there, it's already " + hours + ':' + minutes + ':' + seconds + "!" ; 
	//Restart
	var t = setTimeout(updateClock, 1000);
}


function createAlarm(){
	num_id++;
	/*****************************************************************************************/

    var checkbox_alarm = document.createElement('input');
	checkbox_alarm.type = "checkbox";
	checkbox_alarm.name = "checkAlarm";
	checkbox_alarm.value = "alarmOk";
	checkbox_alarm.id = "checkAlarm"+num_id;

	var number_hours = document.createElement('input');
	number_hours.type = "number";
	number_hours.name = "hoursAlarm";
	number_hours.value = "0";
	number_hours.min = "0";
	number_hours.max = "23";
	number_hours.id = "hoursAlarm"+num_id;

	var number_minutes = document.createElement('input');
	number_minutes.type = "number";
	number_minutes.name = "minutesAlarm";
	number_minutes.value = "0";
	number_minutes.min = "0";
	number_minutes.max = "59";
	number_minutes.id = "minutesAlarm"+num_id;

	var text_name = document.createElement('input');
	text_name.type = "text";
	text_name.name = "nameAlarm";
	text_name.value = "WAKE UP... please";
	text_name.id = "nameAlarm"+num_id;

	var button_remove = document.createElement('input');
	button_remove.type = "button";
	button_remove.name = "removeAlarm";
	button_remove.value = "-";
	button_remove.id = num_id;

	/*****************************************************************************************/
	//Create array of options to be added
	var array = ["drunkWorld.wav","Mallets.wav","megaAlert.wav","supersaw.wav"];

	//Create and append select list
	var select_sound = document.createElement('select');
	select_sound.type = "select";
	select_sound.name = "soundAlarm";
	select_sound.id = "soundAlarm"+num_id;

	//Create and append the options
	for (var i = 0; i < array.length; i++) {
	    var option = document.createElement("option");
	    option.value = array[i];
	    option.text = array[i];
	    select_sound.appendChild(option);
	}

	/*****************************************************************************************/
	
	
    var fieldset_alarm = document.createElement("fieldset");
	fieldset_alarm.id = "fieldset"+num_id;
	
    var legend_alarm = document.createElement ("legend");
    legend_alarm.innerHTML = "Alarm";
    legend_alarm.id = "fieldset"+num_id;
    
    fieldset_alarm.appendChild(legend_alarm);
	fieldset_alarm.appendChild(checkbox_alarm);
	fieldset_alarm.appendChild(number_hours);
	fieldset_alarm.appendChild(number_minutes);	
	fieldset_alarm.appendChild(text_name);
	fieldset_alarm.appendChild(select_sound);
	fieldset_alarm.appendChild(button_remove);

	document.form.appendChild(fieldset_alarm);


	/******************************************EventListener**************************************/
	button_remove.addEventListener('click', function(evt){
		try{
			var alarm_number = evt.target.id;
			console.log("alarm_number : "+alarm_number);
/*
			var form = document.getElementById("alarmForm");
			console.log("form : "+form);
			form.removeChild(form.childNodes[alarm_number]);

			if(alarm_number<num_id){
				var i=alarm_number+1;
				var element;
				while(i<num_id){
					element = getElementById(i);
					console.log("elmt id : "+element.id);
					element.id--;
					i++;
				}
				num_id--;
			}
			*/
			var legend_alarm_delete = document.getElementById("fieldset"+alarm_number).outerHTML = "";
			delete legend_alarm_delete;
		}catch(err){
			console.log("Error : there is a problem to delete the alarm, but don't worry : we work on it !");
		}
	});
    
}