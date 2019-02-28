//loop multiple data from API
var r = "https://swapi.co/api/species";

callAPI();

function callAPI() {

    fetch(r, {
        method: "get"
    }).then(function (response) {
        console.log(response);
        return response.json();
    }).then(function (jsonresponse) {
        console.log(jsonresponse);
        printData(jsonresponse);
    }).catch(function (error) {
        console.log("err" + error);
    });

}


function printData(jsondata) {
    var info = "";
    info = "<ul>";
    for (var x in jsondata.results) {
        info = info + "<li>" + jsondata.results[x].name + "</li>";
    }
    info = info + "</ul>";
    document.getElementById("result").innerHTML =  info ;
}

// function printDataNy(jsondata){
// info = `P.name: ${jsondata.name} Terrain: ${jsondata.terrain}`;
// document.getElementById("result").innerHTML = info;
// }


