window.addEventListener("load", function() {

	//Action on checkbox 
	console.log(document.getElementById("new")); 
	document.getElementById("new").addEventListener("click", createAlarm);	
	 
});

num_id=0;

function createAlarm(){
	num_id++;
	console.log("i : "+num_id);
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
	button_remove.id = "removeAlarm"+num_id;

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


	/******************************************EventListener**************************************/
	button_remove.addEventListener('click', function(evt){

		var alarmDelete = evt.target.value;
		try{

		}catch(err){
			console.log("Error : there is a problem to delete the alarm, but don't worry : we work on !");
		}
	});
    
}