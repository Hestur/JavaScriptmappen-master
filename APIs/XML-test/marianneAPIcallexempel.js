// Husk en <div id="resultat"></div> el.lign. på en html-side som linjer til js-filen her.

// Vi øver med https://swapi.co/documentation ... tjek selv dokumentationen
var wsurl = "https://swapi.co/api/people/1/"; // Test også gerne med planets, starships eller andet - se dokumentationen

kaldWebservice();

function kaldWebservice() {


    fetch(wsurl, {

        method: 'get' // get/hent data

    }).then(function (svar) {

        console.log("svar:" + svar);
        return svar.json(); // hvis det gik godt - så lav til json

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

    // 1. "Gammel" måde at arbejde med tekst+data/kode - vælg denne eller den nye herunder - de gør nøjagtigt det samme
    var infotekst = "Personens navn: " + jsondata.name + " med hårfarven: " + jsondata.hair_color;

    // 2. Ny måde at arbejde med tekst+data/kode ... template string/literals
    //var infotekst = `Personens navn er: ${jsondata.name} med hårfarven: ${jsondata.hair_color}`;

    // Udskriv data fra webservicen
    document.getElementById("resultat").innerHTML = infotekst;
}