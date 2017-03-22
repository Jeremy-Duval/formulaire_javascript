
window.addEventListener("load", function() {
    getXML();
});


function getXML(){
    
    var url = "http://pandamixshow.com/podcast/dubstep/mix/podcast.xml/";

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

                // do what you have to do with 'data'
            } else {
                console.log("Erreur " + req.status);
            }
        };

        req.send();
};
    
