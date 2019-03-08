var wsurl = ""; 

window.onload = function () {

    document.getElementById("inpPostnr").addEventListener("keyup", function(){
        var val = document.getElementById("inpPostnr").value;
        wsurl = "https://dawa.aws.dk/postnumre/autocomplete?q=" + val;
        kaldWebservice();
    });
    // change = chrome og select = FF
    document.getElementById("inpPostnr").addEventListener("change", function(){
       alert("jaja " + document.getElementById("inpPostnr").value);
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

        opt += '<option value="' + jsondata[x].tekst + '"></option>'
    }
    document.getElementById("PostNrList").innerHTML = opt;
}