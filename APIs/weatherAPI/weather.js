// Globale variabler
var wsurl; // overordnet webservice-url - som kan tilpasses undervejs (next, previous, alle, søg) = global
var postnr = "9000";

// Det der skal ske når siden loader
window.onload = function () {

    // Lyt efter klik på søge-button
    document.getElementById("btnPostnr").addEventListener("click", lavPostnrUrl);

    lavPostnrUrl();

};

function lavPostnrUrl() {

    // HVIS der er en value fra inputfelt - gem i variabel
    if (document.getElementById("inpPostnr").value != "") {
        postnr = document.getElementById("inpPostnr").value;
    }

    // Put det søgte postnr ind i webservice-url'en
    wsurl = "http://api.openweathermap.org/data/2.5/weather?zip=" + postnr + ",dk&appid=3202c7144289f86f4c63a2c857e071e8&lang=da&units=metric";

    kaldWebservice();

}


// Funktion til at kalde webservicen
function kaldWebservice() {

    fetch(wsurl, {

        method: 'get' // get/hent data

    }).then(function (response) {

        return response.json();

    }).then(function (jsonsvar) {

        console.log(jsonsvar.name);

        udskrivData(jsonsvar);

    }).catch(function (error) {
        console.log("Der er sket en fejl");
        alert("FEJL");
    });

}


// Funktion til at udskrive data/resultatet i html
function udskrivData(jsondata) {

    //https://findvej.dk/55.676,12.569?zoom=13&maptype=1


    document.getElementById("overskriftby").innerHTML = jsondata.name;

    // Udskriv bynavn for målingen/"målestation"
    document.getElementById("bynavn").innerHTML = "Vejret er målt i: " + jsondata.name;

    // Udskriv overordnet beskrivelse af vejret
    document.getElementById("beskrivelse").innerHTML = jsondata.weather[0].description;

    // Udskriv temperaturen - &#176 er koden for et grads-tegn
    document.getElementById("temp").innerHTML = "Temperaturen er: " + Math.round(jsondata.main.temp) + "&#176 C";

    // Vis vejrikon i image-tag
    document.getElementById("vejrimg").src = "https://openweathermap.org/img/w/" + jsondata.weather[0].icon + ".png";

    // Vis link til kort
    document.getElementById("kortlink").setAttribute("href", "https://findvej.dk/" + postnr);

    document.getElementById("ifrMap").src = "https://findvej.dk/" + postnr;

}