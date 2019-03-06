//loop multiple data from API
var r = "https://swapi.co/api/planets";
var nurl, purl; // nexturl,previousurl for pageing

callAPI();

function callAPI() {

    fetch(r, {
        method: "get"
    }).then(function (response) {
       // console.log(response);
        return response.json();
    }).then(function (jsonresponse) {
       // console.log(jsonresponse);
        printData(jsonresponse);
    }).catch(function (error) {
        console.log("err" + error);
    });

}



function navN() {
    r = nurl;
    callAPI();
};

function navP() {
    r = purl;
    callAPI();
};


function printData(jsondata) {
    // håndter pageing - hvis der er flere pages i APIen
    if (jsondata.next != null) {
        nurl = jsondata.next;
        document.getElementById("np").style.display = "inline"; // vis kun hvis der er en next page
       

    }
    if (jsondata.previous != null) {
        purl = jsondata.previous;
        document.getElementById("prev").style.display = "inline"; // vis kun hvis der er en previous page
    }
    if (jsondata.next == null) {
        document.getElementById("np").style.display = "none";
    }
    if (jsondata.previous == null) {
        document.getElementById("prev").style.display = "none";
    }

    var info = "";

    for (var x in jsondata.results) {
        d = jsondata.results[x];

        info += '<div class="inf">' + "Name of the planet: " + d.name + "<br>" + "The planets gravity " + d.gravity + "<br>" + "Population " + d.population + '<button id="btnpop" onclick="hej">' + "<br>" + '</div>' + '</button>' ;
    }

    document.getElementById("result").innerHTML = info;
}

// function printDataNy(jsondata){
// info = `P.name: ${jsondata.name} Terrain: ${jsondata.terrain}`;
// document.getElementById("result").innerHTML = info;
// }


