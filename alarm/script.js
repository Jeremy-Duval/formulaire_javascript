window.addEventListener("load", function() {

	//Action on checkbox 
	console.log(document.getElementById("new")); 
	document.getElementById("new").addEventListener("click", createAlarm);	
	 
});


function createAlarm(){

	const option_number = 5;

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

	//Create and append select list
	var select_sound = document.createElement('select');
	select_sound.type = "select";
	select_sound.name = "soundAlarm";
	select_sound.id = "soundAlarm";

	//Create and append the options
	for (var i = 1; i <= option_number; i++) {
	    var option = document.createElement("option");
	    option.value = "sound"+i;
	    option.text = "sound"+i;
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