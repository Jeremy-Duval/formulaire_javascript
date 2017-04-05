
window.addEventListener("load", function() {
    getXML();
});


function getXML(){
    
    var url = "https://crossorigin.me/https://itunes.apple.com/fr/podcast/00-your-name-et-la-garde-royale/id1192681583?i=1000379721885&mt=2";

    //AJAX call
    var req = new XMLHttpRequest();
    
    req.open("GET", url, true);
    req.onerror = function() {
        console.log("Échec de chargement "+url);
    };
    
    req.onload = function() {

        if (req.status === 200)
            {
                console.log("OK ! Good Job !");

                parser = new DOMParser();
                var xml_flux = parser.parseFromString(req.responseText,"text/xml");

                console.log("------------------------");
                console.log("title      : " + xml_flux);

            } else {
                console.log("Erreur " + req.status);
            }
        };

        req.send();
};
    
