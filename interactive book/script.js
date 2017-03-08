window.addEventListener("load", function() {
	getPage();
	 
});

function getPage(){
	var page = JSON.stringify("json/chapitre1.json");
	document.getElementById("demo").innerHTML = page.txt;
	console.log(page.txt);
}