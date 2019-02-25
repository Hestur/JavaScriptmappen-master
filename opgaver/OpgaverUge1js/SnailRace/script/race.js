var snegl1 = {
    id: "a",
    navn: "Snegl 1",
    foto: "img/snegl1.png",
    x: -160,
    y: -40
};
var snegl2 = {
    id: "b",
    navn: "Snegl 2",
    foto: "img/snegl2.png",
    x: -160,
    y: 40

};
var snegl3 = {
    id: "c",
    navn: "Snegl 3",
    foto: "img/snegl3.png",
    x: -160,
    y: -125
};
var snegl4 = {
    id: "d",
    navn: "Snegl 4",
    foto: "img/snegl0.png",
    x: -160,
    y: 125
};


var sek = 0;// En tæller der skal tælle hvor lang tid ræset har varet. Starter selvf0lgelig på 0.
var minSpring = 3; // Min . antal pixels sneglene skal flytte sig pr. gang
var maxSpring = 15; // Max. antal pixels( +minSpring), som sneglene må flytte sig pr. gang 
var tidsinterval = 100; // En variabel med hvor ofte sneglene skal flytte sig (100 = 100 milisekunders pause) 
var finishline = 730;// Det er sneglenes ' bagdel ' der males på.

// Hvis du ændrer i stylesheetet , skal du med stor sandsynlighed også ændre
// i de forskellige variabler herover for at det hele matcher.

window.onload = function () {

    //Finder frem til div'en 'raceway' i HTML -dokumentet , for heri skal sneglene indsættes.
    var racetrack = document.getElementById("raceway");
    //Opretter ny div i raceway-div'en med snegl's properties. Sneglenes properties er defineret i variablerne øverst. 
    var s1 = document.createElement("div");
    s1.id = snegl1.id;
    s1.className = "snegle-container";
    s1.style.backgroundImage = "url( ' " + snegl1.foto + " ' )";
    s1.style.top = snegl1.y + "px";
    s1.style.left = snegl1.x + "px";
    racetrack.appendChild(s1);
    // Opretter ny div i raceway-div'en med snegl2's properties.
    var s2 = document.createElement("div");
    s2.id = snegl2.id;
    s2.className = "snegle-container";
    s2.style.backgroundImage = "url( ' " + snegl2.foto + " ' )";
    s2.style.top = snegl2.y + "px";
    s2.style.left = snegl2.x + "px";
    racetrack.appendChild(s2);
    // Opretter ny div i raceway-div'en med snegl3's properties.
    var s3 = document.createElement("div");
    s3.id = snegl3.id;
    s3.className = "snegle-container";
    s3.style.backgroundImage = "url( ' " + snegl3.foto + " ' )";
    s3.style.top = snegl3.y + "px";
    s3.style.left = snegl3.x + "px";
    racetrack.appendChild(s3);
    // Opretter ny div i raceway-div'en med snegl4's properties.
    var s4 = document.createElement("div");
    s4.id = snegl4.id;
    s4.className = "snegle-container";
    s4.style.backgroundImage = "url( ' " + snegl4.foto + " ' )";
    s4.style.top = snegl4.y + "px";
    s4.style.left = snegl4.x + "px";
    racetrack.appendChild(s4);

}



// Funktionen der starter løbet. Aktiveres ved klik på knappen "startknap"
function start() {
    document.getElementById("startknap").style.display = "none"; // skjuler startknappen
    afsted(); // kalder funktionen der starter spillet.
};

// Funktion der får sngelene til at løbe (bevæge sig).
function afsted() {

    //Ny position betemmes
    // Sneglenes nuværende x-pos øges med random tal som laves af funtionen Spring();
    snegl1.x += spring();
    snegl2.x += spring();
    snegl3.x += spring();
    snegl4.x += spring();
    //Sneglene flyttes til den nye x-pos
    document.getElementById(snegl1.id).style.left = snegl1.x + "px";
    document.getElementById(snegl2.id).style.left = snegl2.x + "px";
    document.getElementById(snegl3.id).style.left = snegl3.x + "px";
    document.getElementById(snegl4.id).style.left = snegl4.x + "px";

    // Spillet slutter når en eller begge snegle når målstregen (finishline).
    if (snegl1.x >= finishline || snegl2.x >= finishline || snegl3.x >= finishline || snegl4.x >= finishline) {

        // Finder vinderen ved at sammenligne x-pos.
        if (snegl1.x > snegl2.x && snegl1.x > snegl3.x && snegl1.x > snegl4.x) {
            setTimeout("winner('" + snegl1.navn + "');", 1000); // vinder = snegl1
        }
        else if (snegl2.x > snegl1.x && snegl2.x > snegl3.x && snegl2.x > snegl4.x) {
            setTimeout("winner('" + snegl2.navn + "'):", 1000); // vinder = snegl2
        }
        else if (snegl3.x > snegl1.x && snegl3.x > snegl2.x && snegl3.x > snegl4.x) {
            setTimeout("winner('" + snegl3.navn + "'):", 1000); // vinder = snegl3
        }
        else if (snegl4.x > snegl1.x && snegl4.x > snegl3.x && snegl4.x > snegl2.x) {
            setTimeout("winner('" + snegl4.navn + "'):", 1000); // vinder = snegl4
        }
        else {
            setTimeout("winner('');", 1000); //alle kommer i mål samtidig så ingen vinder/ingen taber.
        }
    }
    else {
        setTimeout("afsted();", tidsinterval); // Ingen snegle er kommet i mål og funktionen starter forfra
        sek = sek + 1; // sekundtælleren tæller op.
    }
};

//Funktion der kårer en vinder
function winner(vinderen) {
    var tid = (sek * tidsinterval) / 1000; // Beregner hvor lang tid løbet tog. Intervallet mellem hvert spring regnes med  
    if (vinderen == "") {
        alert("Ræset er slut - det blev uafgjort! det tog " + tid + " sekunder.");
    }
    else {
        alert("Ræset blev vundet af " + vinderen + "! Det tog " + tid + " sekunder.")
    }
    window.location.reload(); //Genindlæser siden og derfor spillet.

};

// En funktion der returnere et random tal- Min- og max er angivet som var i starten js.flien.
function spring() {
    var randomStep = Math.round(Math.random() * maxSpring) + minSpring;
    return randomStep;
};