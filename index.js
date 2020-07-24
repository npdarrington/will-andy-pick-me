var userInput = document.querySelector('.input-question');
var answerBtn = document.querySelector('.btn-answer');
var eightBallImg = document.querySelector('.eight-ball');
var returnQuestion = document.querySelector('.question-return');
var returnAnswer = document.querySelector('.answer-return');
var askQuestionSection = document.querySelector('.ask-question');
var answers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes - definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
];

askQuestionSection.addEventListener('click', clickHandler);

function clickHandler(event) {
  if (event.target.classList.contains('btn-answer')) {
    displayAnswer();
  }
}

function displayAnswer() {
  var question = userInput.value;
  userInput.value = '';
  eightBallImg.classList.add('hidden');
  returnQuestion.innerText = `${question}?`;
  returnAnswer.innerText = answers[getRandomIndex(answers)];
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
