//Global var
var wsurl;

//skal ske når siden looper
window.onload = function () {
    wsurl = "https://api.dfi.dk/v1/film/?sortby=title&releasestart=2019";

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
      //  console.log(jsonsvar);
        udskrivData(jsonsvar);
    }).catch(function (err) {
        console.log(err);
    })

};

//udskrive data
function udskrivData(jsondata) {

    // variabel til filmres i loop
    var filmres = " ";

    //Loop
    for(var x in jsondata.FilmList){
        filmres += "<div>" + jsondata.FilmList[x].Title + " (" + jsondata.FilmList[x].ReleaseYear + ")  " + "</div>";
    };

    // udskriv i html
    document.getElementById("resultat").innerHTML = filmres;
    
};