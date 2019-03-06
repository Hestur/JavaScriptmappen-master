//Global var
var wsurl;

//skal ske når siden looper
window.onload = function () {
    wsurl = "https://api.dfi.dk/v1/film/74245";

    kaldWebservice();
};

//Funktion til kald af webservice
function kaldWebservice() {
    fetch(wsurl, {
        method: 'get',
        headers: new Headers({
            Authorization: "Basic " + btoa('F005936:JRbTlfWVMH0bm3n')
        })
    }).then(function (response) {
        return response.json();
    }).then(function (jsonsvar) {
        console.log(jsonsvar);
        udskrivData(jsonsvar);
    }).catch(function (err) {
        console.log(err);
    })

};

//udskrive data
function udskrivData(jsondata) {

    document.getElementById("titel").innerHTML = jsondata.ForeignTitles[0].Title + " (" + jsondata.DanishTitle + ")" + jsondata.Title;

    document.getElementById("beskrivelse").innerHTML = jsondata.Description;

    document.getElementById("premiere").innerHTML = "Premiere: " + jsondata.Premiere[0].PremiereDate;
};