// Handles all updates the the UI

// getElementById (innerhtml)
// onclick for buttons

var QuizUi = {
  displayNext: function () {
    if (quiz.hasEnded()) {
      this.displayScore();
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },

  displayQuestion: function() {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().inquiry);
  },

  displayChoices: function() {
    var choices = quiz.getCurrentQuestion().choices;

    for(var i=0; i < choices.length; i++) {
      this.populateIdWithHTML("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    }
  },

  displayScore: function() {
    var gameOverHTML = "<h1>Game Over</h1>";
    gameOverHTML += "<h2> Your Score is: " + quiz.score + "</h2>";
    this.populateIdWithHTML("quiz", gameOverHTML);
  },

  populateIdWithHTML: function(id, inquiry) {
    var element = document.getElementById(id);
    element.innerHTML = inquiry;
  },

  guessHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      QuizUi.displayNext();
    }
  },

  displayProgress: function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
  }
}
