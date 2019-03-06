// Globale variabler
var wsurl;  // overordnet webservice-url - som kan tilpasses undervejs = global
var nurl, purl; // url til at bladre til next og previous

// Det der skal ske når siden loader
window.onload = function(){

    document.getElementById("frem").addEventListener("click", function(){
        wsurl = nurl;
        kaldWebservice();
    });
    document.getElementById("tilbage").addEventListener("click", function(){
        wsurl = purl;
        kaldWebservice();
    });

    document.getElementById("inpSoeg").addEventListener("keyup", soegWebservice), setTimeout(1000);

    wsurl = "https://swapi.co/api/people/"; // Søger i alt - og ikke en bestemt person
    kaldWebservice();
};

function navN() {
    wsurl = nurl;
    kaldWebservice();
};

function navP() {
    wsurl = purl;
    kaldWebservice();
};

// Funktion til at håndtere søgning
function soegWebservice(){

    var sogeord = document.getElementById("inpSoeg").value;

    wsurl = "https://swapi.co/api/people/?search=" + sogeord;
    kaldWebservice();

}

// Funktion til at kalde webservicen
function kaldWebservice(){

    fetch(wsurl, {

        method: 'get' // get/hent data

    }).then(function (response) {

        return response.json();

    }).then(function (jsonsvar) {

        console.log(jsonsvar);
        udskrivData(jsonsvar);

    }).catch(function (error) {
        console.log("err" + error);
    });

}

// Funktion til at udskrive data/resultatet i html
function udskrivData(jd){ // jd = jsondata(jsonsvar)
    var restxt = "";

    if(jd.next != null){
        nurl = jd.next;
    }
    if(jd.previous != null){
        purl = jd.previous;
    }

    for (var x in jd.results){
        restxt += "<div class='box'>" + jd.results[x].name + "</div>";

        document.getElementById("resultat").innerHTML = restxt;
    }

}