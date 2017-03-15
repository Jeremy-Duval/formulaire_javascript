
var url;
window.addEventListener("load", function() {
	url = "json/chapitre1.json";
	getPage();
	 
});


window.addEventListener("hashchange", function()
{
	url = "json/chapitre"+location.hash.substring(1,location.hash.length)+".json"; 
	console.log(url);
	getPage(); 
	
	
}); 
function getPage(){
	
	//AJAX call
	var req = new XMLHttpRequest();
	
	req.open("GET", url, true);
	req.onerror = function() {
	    console.log("Échec de chargement "+url);
	};
	
req.onload = function() {

	if (req.status === 200)
		{
		    var page = JSON.parse(req.responseText);
			//get link id
			console.log(page.links[0].txt);
			
			//get link txt 
			document.getElementById("demo").innerHTML = page.txt;
			link(page); 

	      	// do what you have to do with 'data'
	    } else {
	      	console.log("Erreur " + req.status);
	    }
	};

	req.send();

	
}

var numId = 0; 
var parentLink = 0;

//gets a parsed objects, and makes a link from it
function link(page)
{
	var i;
	var listOldLink;
	numId ++;
	
	console.log(page.links.length);
	
	i=0;
	while(i<parentLink){
		oldLink = document.getElementById(i);
		oldLink.remove();
		i++;
	}
	
	var length = page.links.length;
	parentLink = length;	
	i = 0;
	while(i < length){
		var linky = document.createElement('a');
		var theLink = page.links[i].link;
		url = theLink; 
		linky.href = theLink; 
		linky.innerHTML = page.links[i].txt; 
		linky.id = i;
		document.body.appendChild(linky); 
		i++;
	}

}