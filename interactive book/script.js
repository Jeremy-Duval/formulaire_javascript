window.addEventListener("load", function() {
	getPage();
	 
});

function getPage(){
	var req = new XMLHttpRequest();
	var url = "json/chapitre1.json";
	req.open("GET", url, true);
	req.onerror = function() {
	    console.log("Échec de chargement "+url);
	};
	
	req.onload = function() {
		console.log("ok");
	    if (req.status === 200) {
		    var page = JSON.parse(req.responseText);
			console.log(data.txt);

			document.getElementById("demo").innerHTML = page.txt;
	      	// do what you have to do with 'data'
	    } else {
	      	console.log("Erreur " + req.status);
	    }
	};

	req.send();

	
}