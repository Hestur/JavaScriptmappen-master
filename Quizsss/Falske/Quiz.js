var start = function() {
  var correct = 0;
  var incorrect = 0;
  var question = "idiot";
  var input = "none";
  var answer = "nejnej";

question ="what is an idiot?";
console.log(question);
answer="you!";
lazy();





};

var ask = function() {
  input = prompt(question);
};

var score = function() {
  if (input == answer) {
    correct = correct + 1;
    alert("correct");
  } else {
    incorrect = incorrect + 1;
    alert("incorrect noob answer");
  }
};

var lazy = function() {
  ask();
  score();
  console.log(question)
};
