var wsurl = "https://newsapi.org/v2/top-headlines?sources=reddit-r-all&apiKey=32ddb36add8b4e3cab2767635c6460e1";



window.onload = function () {

    wsurl = "https://newsapi.org/v2/top-headlines?sources=reddit-r-all&apiKey=32ddb36add8b4e3cab2767635c6460e1"; 
    kaldWebservice();
    
}


function kaldWebservice() {


    fetch(wsurl, {

        method: 'get' // get/hent data

    }).then(function (response) {

        return response.json(); // hvis det gik godt - så lav til json

    }).then(function (jsonsvar) {

        // console.log("jsonsvar: " + jsonsvar); // Console.log først data og tjek, hvad du får retur fra webapi'et - så du ved, hvad du kan hapse ... fx "name", "hair_color" osv.
        udskrivData(jsonsvar); // Når styr på data - så send det videre til udskriv-funktionen

    }).catch(function (error) {

        // Det der skal ske, hvis der opstår en fejl
        console.log("Der er sket en fejl" + error);

        alert(error);
    });
}

// Håndterer data og udskriver i html - eller hvad der nu skal ske
function udskrivData(jsondata) {

    var nyheder = "";

    for (var x in jsondata.articles) {
        var AD = jsondata.articles[x];

        var nyhedsklasse = "box";

        if (x==0) {
            nyhedsklasse = "boxmaster";
        }

        nyheder += `<div class="${nyhedsklasse}">
        <h2>${AD.title}</h2>
        <p class="dato">${AD.publishedAt}</p>
        <p class="desc">${AD.description}</p>
        <img src="${AD.urlToImage}" alt="picture">
        <p class="content">${AD.content}</p>
        <p><a href="${AD.url}"> Læs mere...</a></p></div>`

        // info += "Title of Article: " + AD.title + "<br>" + "Author/Publisher of article: " + AD.source.name + "<br>" + "Article description: " + AD.description + "<br>" + "Published at: " + AD.publishedAt + "<br>" + "<br>" + "</br>";
    }
 
    document.getElementById("resultat").innerHTML = nyheder;
}


