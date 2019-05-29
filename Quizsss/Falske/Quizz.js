
  window.onload = function() {
    
    /////////////////////////////////////////////////
    // CREATE SAMPLE QUIZ ARRAY TO USE IN EXAMPLE //
    /////////////////////////////////////////////////
    
    // Quiz constructor
    function quizConstructor(question, answer, enabled, asked) {
        this.question = question;
        this.answer = answer;
        this.enabled = enabled;
        this.asked = asked;
    }
    
    // Create quiz array
    var quiz = new Array();
            
    // All quiz questions and answers
    quiz[0] = new quizConstructor("-4*2", "8", false, 0);
    quiz[1] = new quizConstructor("Dks største noob", "Dig", true, 0);
    quiz[2] = new quizConstructor("Århus mindste å", "åen", true, 0);


    /////////////////////////////////////////////////
    // END: CREATE SAMPLE QUIZ ARRAY TO USE IN EXAMPLE //
    /////////////////////////////////////////////////
    
    
    // Find the number of questions that the user has enabled
    var numEnabled = 0;
    
    for (var i = 0; i < quiz.length; i++) {
        if (quiz[i].enabled == true) {
            numEnabled++;
        }
    }


    // Ask all enabled questions in random order
    for (var i = 0; i < numEnabled; i++) {
    
        // Find random question that hasn't been asked yet
        do {
            
            var randomNum = Math.floor(Math.random() * quiz.length);
        
        } while (quiz[randomNum].enabled == false || quiz[randomNum].asked == 1);
        
        // Ask question
        var question = quiz[randomNum].question + "Hvad er: ";
        document.getElementById("divSolution").innerHTML += "<p>" + question + "</p>";
        
        // Mark question as asked
        quiz[randomNum].asked++;
    }
}