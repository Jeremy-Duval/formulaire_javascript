window.addEventListener("load", function() {

	//Action on checkbox 
	console.log(document.getElementById("new"));
	
	//Generates one clock timer 
	updateClock();
	

	document.getElementById("new").addEventListener("click", createAlarm);	
	
	 
});

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
	
	
	//Get the element we want to fill 
	var elem = document.getElementById('clock'); 
	//Fill the element 
	elem.innerHTML = "Wake up there, it's already " + hours + ':' + minutes + ':' + seconds + "!" ; 
	//Restart
	var t = setTimeout(updateClock, 100);
}




function createAlarm(){

	/*****************************************************************************************/

    var checkbox_alarm = document.createElement('input');
	checkbox_alarm.type = "checkbox";
	checkbox_alarm.name = "checkAlarm";
	checkbox_alarm.value = "alarmOk";
	checkbox_alarm.id = "checkAlarm";

	var number_hours = document.createElement('input');
	number_hours.type = "number";
	number_hours.name = "hoursAlarm";
	number_hours.value = "0";
	number_hours.min = "0";
	number_hours.max = "23";
	number_hours.id = "hoursAlarm";

	var number_minutes = document.createElement('input');
	number_minutes.type = "number";
	number_minutes.name = "minutesAlarm";
	number_minutes.value = "0";
	number_minutes.min = "0";
	number_minutes.max = "59";
	number_minutes.id = "minutesAlarm";

	var text_name = document.createElement('input');
	text_name.type = "text";
	text_name.name = "nameAlarm";
	text_name.value = "WAKE UP... please";
	text_name.id = "nameAlarm";

	var button_remove = document.createElement('input');
	button_remove.type = "button";
	button_remove.name = "removeAlarm";
	button_remove.value = "-";
	button_remove.id = "removeAlarm";

	/*****************************************************************************************/
	//Create array of options to be added
	var array = ["drunkWorld.wav","Mallets.wav","megaAlert.wav","supersaw.wav"];

	//Create and append select list
	var select_sound = document.createElement('select');
	select_sound.type = "select";
	select_sound.name = "soundAlarm";
	select_sound.id = "soundAlarm";

	//Create and append the options
	for (var i = 0; i < array.length; i++) {
	    var option = document.createElement("option");
	    option.value = array[i];
	    option.text = array[i];
	    select_sound.appendChild(option);
	}

	/*****************************************************************************************/

    var fieldset_alarm = document.createElement('fieldset');

    var legend_alarm = document.createElement ("legend");
    legend_alarm.innerHTML = "Alarm";
    
    fieldset_alarm.appendChild(legend_alarm);
	fieldset_alarm.appendChild(checkbox_alarm);
	fieldset_alarm.appendChild(number_hours);
	fieldset_alarm.appendChild(number_minutes);	
	fieldset_alarm.appendChild(text_name);
	fieldset_alarm.appendChild(select_sound);
	fieldset_alarm.appendChild(button_remove);

	document.form.appendChild(fieldset_alarm);
    
}