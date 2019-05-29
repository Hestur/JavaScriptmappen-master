// Fundet her: https://codepen.io/jasonchan/pen/wMaEwN

// ***** Quiz som rummer spørgsmål-array (alle spm alle svarmuligheder) **
// ***********************************************************************

class Quiz {

    constructor(spm) {
        this.spm = spm;
        this.point = 0;
        this.aktueltSpmIndex = 0;
    }

    // Har selve svaret med - som der måles på
    besvarelse(svar) {
        // Læg 1 til point HVIS korrekt svar - om svaret er korrekt bliver målt i en Spm-metode
        if (this.getAktueltSpm().korrektBesvaret(svar)) {
            this.point++;
        }
        this.aktueltSpmIndex++; // læg 1 til så næste spm bliver vist
    }

    // Get aktuelt spørgsmål
    getAktueltSpm() {
        return this.spm[this.aktueltSpmIndex];
    }

    // Er quizzen slut? True eller false
    quizSlut() {
        return this.aktueltSpmIndex >= this.spm.length;
    }

}

// ***** CLASS - spørgsmål - hvert spørgsmål er en instans af class Spm **
// ***********************************************************************

// består af (constructor!) et spørgsmål, nogle svarmuligheder, det korrekte svar
class Spm {
    // Aktuelt spørgsmål
    constructor(text, svarmuligheder, svar) {
        this.text = text; // spørgsmålet
        this.svarmuligheder = svarmuligheder; // svarmuligheder - array/liste
        this.svar = svar; // det korrekte svar
    }

    // Er det valgte svar det korrekte svar? Sverets tekst bliver sammenlignet med korrekt-svars-tekst
    korrektBesvaret(valgtsvar) {
        return this.svar === valgtsvar; // returnerer true, hvis svar og korrekt-svar er ens ... false hvis ikke
    }
}

// ***** AFVIKLING AF QUIZZEN ********************************************
// ***********************************************************************
// Dette er IKKE en class men en "object literal" læs her: https://www.dyn-web.com/tutorials/object-literal/

var QuizAfvikling = {

    // Vis næste spm eller hvis slut vis score
    visNaeste: function () {
        if (quiz.quizSlut()) {
            this.visPoint();

        } else {
            this.visSpm();
            this.visValgmuligheder();
            this.visFremskridt();
        }
    },

    visSpm: function () {
        this.visStatusHtml("spm", quiz.getAktueltSpm().text)
    },

    visValgmuligheder: function () {
        var svarmuligheder = quiz.getAktueltSpm().svarmuligheder;
        //console.log(svarmuligheder.length);

        for (var i = 0; i < svarmuligheder.length; i++) {
            this.visStatusHtml("svar" + i, svarmuligheder[i]) // laver svartekst
            this.svarHandler("valg" + i, svarmuligheder[i]); // laver svar-button
        }
    },

    visPoint: function () {
        var slutHtmlText = "<h1>Slut med QUIZ</h1>" + "<h2>Din score blev: " + quiz.point + "</h2>";
        this.visStatusHtml("quiz", slutHtmlText);
    },
    visStatusHtml: function (id, text) {
        //console.log(id);
        var element = document.getElementById(id);
        element.innerHTML = text;

    },
    svarHandler: function (id, svar) {
        var btn = document.getElementById(id);
        btn.onclick = function () {
            quiz.besvarelse(svar); // tjek om svar er korrekt - sender svartekst med
            QuizAfvikling.visNaeste();
        }
    },
    visFremskridt: function () {
        var aktueltSpmNr = quiz.aktueltSpmIndex + 1;
        var statusText = "Spørgsmål " + aktueltSpmNr + " af " + quiz.spm.length;
        this.visStatusHtml("status", statusText);
    }
};

// Spørgsmål instantieres og huskes/opbevares i array/liste
var spmaal = [
    new Spm("Hvad er en kannik?", ["En fornem gejstlig", "En skuespiller-elev", "En der ikke kan", "En der nikker ja til alt"], "En fornem gejstlig"),
    new Spm("Hvad betyder Aros", ["Giv os ar!", "Rosernes å", "Intet - bare et ord", "Åens munding"], "Åens munding"),
    new Spm("Hvilken by er IKKE venskabsby med Aarhus?", ["Sankt Petersborg", "Julianehåb", "Hamburg", "Gøteborg"], "Hamburg"),
    new Spm("Hvilken bygning er højest?", ["Aarhus City Tower", "EY-Huset", " 	Tårnet på Aarhus Rådhus", "Aarhus Domkirke"], "Aarhus Domkirke"),
    new Spm("Hvornår var første Aarhus Festuge?", ["1980", "1975", "1954", "1965"], "1965"),
    new Spm("Hvor stammer V for Sejr(håndtegnet) fra?", ["Rasmus Paludan", "Winston Churchhill", "Josef Stalin", "Adolf Hitler"], "Winston Churchhill"),
    new Spm("Hvilket land blev refereret til som Paradis?", ["Danmark", "Tyskland", "Rusland", "Nordkorea"], "Rusland"),
    new Spm("Hvem mødte Jesus i ørknen?", ["Moses", "Peter Pan", "Satan", "Gud"], "Satan"),
    new Spm("Hvad farve er en appelsin?", ["Blå", "Grøn", "Orange", "Lilla"], "Orange"),
    new Spm("Hvornår går brunbjørne i hi?", ["I oktober", "I januar", "I morgen", "I november"], "I november"),
    new Spm("Har vi fri d. 1 maj?", ["Ja", "Måske", "Nej", "Jeg ved det ikke..."], "Nej"),
    new Spm("Hvad er 2+2", ["22", "3", "5 plus moms", "4"], "22"),
    new Spm("Hvem dør først i endgame?", ["Thor", "Iron Man", "Captain America", "Thanos"], "Iron Man"),
    new Spm("Hvor længe var 100 års krigen?", ["105 År", "99 År", "100 År", "116 År"], "116 År"),
    new Spm("Hvilken af disse pokemoner er Ash's starter pokemon?", ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], "Pikachu"),
    new Spm("Hvilken af disse biler stammer fra USA?", ["Ford", "Honda", "Lamborghini", "Mercedes"], "Ford"),
    new Spm("Hvilken af disse character stammer fra Marvel?", ["Batman", "Iron Man", "Super-Man", "Wonder Woman"], "Iron Man"),
    new Spm("Hvad er -4*2?", ["8", "-8", "0", "4"], "8"),
    new Spm("Hvad får man hvis man drikker for meget Jacker Daniels og sniffer en hel pose laktose?", ["Guns&pistoler", "tyndskid", "et par på låget", "Nobels fredspris"], "tyndskid"),
    new Spm("Hvilken sodavand er bedst?", ["Pepsi", "Coke", "7up", "Shani"], "Shani"),
    new Spm("Hvad er nationaldyret i Skotland?", ["Kat", "Flamingo", "Enhjørning", "Får"], "Enhjørning"),
    new Spm("Hvad hedder hovedstaden i Australien?", ["Sydney", "Canberra", "Melbourne", "Victoria"], "Canberra"),
    new Spm("Hvad hedder vulkanen der begravede byen Pompeji ved udbrud?", ["Stromboli", "Etna", "Vesuv", "St. Helens"], "Vesuv")
];

// Skab/instantier quizzen - send alle spmål med
// shuffle er for at blande spørgsmålene - kan fjernes hvis spørgsmålene ikke skal blandes
// slice er for kun at få X antal spørgsmål - kan fjernes og så får man alle spørgsmål
var quiz = new Quiz(shuffle(spmaal).slice(0,7));

// Vis quizzen - synliggør den = sæt den igang
// vis-næste sætter hjulene - kalder html osv.
QuizAfvikling.visNaeste();

// Denne metode er KUN til at shuffle/blande spørgsmålene med:
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }