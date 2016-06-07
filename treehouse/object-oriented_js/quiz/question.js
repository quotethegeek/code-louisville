// Questions
function Question(inquiry, choices, answer) {
  this.inquiry = inquiry;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
};
