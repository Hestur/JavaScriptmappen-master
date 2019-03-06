//<option value="8000 Århus"></option>


var wsurl = ""; 

window.onload = function () {

    document.getElementById("inpPostnr").addEventListener("keyup", function(){
        wsurl = "https://dawa.aws.dk/postnumre/autocomplete?q=" + "70";
        kaldWebservice();
    });

    

};



function kaldWebservice() {


    fetch(wsurl, {

        method: 'get' // get/hent data

    }).then(function (response) {

        return response.json(); // hvis det gik godt - så lav til json

    }).then(function (jsonsvar) {

        console.log("jsonsvar: " + jsonsvar); // Console.log først data og tjek, hvad du får retur fra webapi'et - så du ved, hvad du kan hapse ... fx "name", "hair_color" osv.
        udskrivData(jsonsvar); // Når styr på data - så send det videre til udskriv-funktionen

    }).catch(function (error) {

        // Det der skal ske, hvis der opstår en fejl
        console.log("Der er sket en fejl" + error);

        alert(error);
    });
}




// Håndterer data og udskriver i html - eller hvad der nu skal ske
function udskrivData(jsondata) {

    var opt = "";

    for(var x in jsondata){
        console.log(jsondata[x].tekst);

        opt = '<option value="8000 århus"></option>'
    }
    document.getElementById("PostNrList").innerHTML = opt;
}