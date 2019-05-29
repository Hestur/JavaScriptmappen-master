class Snail {
    constructor(id,navn,foto,x,y){
        this.id = id;
        this.navn = navn;
        this.foto = foto;
        this.x = x;
        this.y = y;
    }
}
var snailOne = new Snail('a','snailOne', '/img/snegl1.png', -160,-40);
var snailTwo = new Snail('b','snailTwo', '/img/snegl2.png', -160,40);
var snailThree = new Snail('c','snailThree', '/img/snegl3.png', -160,-125);
var snailFour = new Snail('d','snailFour', '/img/snegl4.png', -160,125);


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
    s1.id = snailOne.id;
    s1.className = "snegle-container";
    s1.style.backgroundImage = "url( ' " + snailOne.foto + " ' )";
    s1.style.top = snailOne.y + "px";
    s1.style.left = snailOne.x + "px";
    racetrack.appendChild(s1);
    // Opretter ny div i raceway-div'en med snailTwo's properties.
    var s2 = document.createElement("div");
    s2.id = snailTwo.id;
    s2.className = "snegle-container";
    s2.style.backgroundImage = "url( ' " + snailTwo.foto + " ' )";
    s2.style.top = snailTwo.y + "px";
    s2.style.left = snailTwo.x + "px";
    racetrack.appendChild(s2);
    // Opretter ny div i raceway-div'en med snailThree's properties.
    var s3 = document.createElement("div");
    s3.id = snailThree.id;
    s3.className = "snegle-container";
    s3.style.backgroundImage = "url( ' " + snailThree.foto + " ' )";
    s3.style.top = snailThree.y + "px";
    s3.style.left = snailThree.x + "px";
    racetrack.appendChild(s3);
    // Opretter ny div i raceway-div'en med snailFour's properties.
    var s4 = document.createElement("div");
    s4.id = snailFour.id;
    s4.className = "snegle-container";
    s4.style.backgroundImage = "url( ' " + snailFour.foto + " ' )";
    s4.style.top = snailFour.y + "px";
    s4.style.left = snailFour.x + "px";
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
    snailOne.x += spring();
    snailTwo.x += spring();
    snailThree.x += spring();
    snailFour.x += spring();
    //Sneglene flyttes til den nye x-pos
    document.getElementById(snailOne.id).style.left = snailOne.x + "px";
    document.getElementById(snailTwo.id).style.left = snailTwo.x + "px";
    document.getElementById(snailThree.id).style.left = snailThree.x + "px";
    document.getElementById(snailFour.id).style.left = snailFour.x + "px";

    // Spillet slutter når en eller begge snegle når målstregen (finishline).
    if (snailOne.x >= finishline || snailTwo.x >= finishline || snailThree.x >= finishline || snailFour.x >= finishline) {

        // Finder vinderen ved at sammenligne x-pos.
        if (snailOne.x > snailTwo.x && snailOne.x > snailThree.x && snailOne.x > snailFour.x) {
            setTimeout("winner('" + snailOne.navn + "');", 1000); // vinder = snailOne
        }
        else if (snailTwo.x > snailOne.x && snailTwo.x > snailThree.x && snailTwo.x > snailFour.x) {
            setTimeout("winner('" + snailTwo.navn + "'):", 1000); // vinder = snailTwo
        }
        else if (snailThree.x > snailOne.x && snailThree.x > snailTwo.x && snailThree.x > snailFour.x) {
            setTimeout("winner('" + snailThree.navn + "'):", 1000); // vinder = snailThree
        }
        else if (snailFour.x > snailOne.x && snailFour.x > snailThree.x && snailFour.x > snailTwo.x) {
            setTimeout("winner('" + snailFour.navn + "'):", 1000); // vinder = snailFour
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