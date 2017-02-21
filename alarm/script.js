window.addEventListener("load", function() {

	//Action on checkbox 
	console.log(document.getElementById("new")); 
	document.getElementById("new").addEventListener("click", createAlarm);	
	 
});


function createAlarm(){

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



	document.form.appendChild(checkbox_alarm);
	document.form.appendChild(number_hours);


    /*
    <form name="form" action="http://champin.net/enseignement/intro-web/_static/formproc/debug" method="GET">
		<h1>Formulaire</h1>
		<fieldset><legend>Alarm 2</legend>	
			<input id = "checkAlarm2" type="checkbox" value="alarm2" name="checkAlarm2">	
			<input id = "hoursAlarm2" type="number" min="0" max="23" name="hoursAlarm2" value="0">	
			<input id = "minutesAlarm2" type="number"  min="0" max="59" name="minutesAlarm2" value="00">
			<input id = "nameAlarm2" type="text" name="nameAlarm2" value="WAKE UP... please">
			<select id="soundAlarm2" name="soundAlarm2">
				<option value="Sound1Alarm2">Sound 1</option>
				<option value="Sound2Alarm2">Sound 2</option>
			</select>
			<input id = "removeAlarm2" type="button" value="-" name="removeAlarm2">
		</fieldset>	
		<input id = "new" type="button" value="+" name="new">	
	</form>*/
    
}