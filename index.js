var userInput = document.querySelector('.input-question');
var answerBtn = document.querySelector('.btn-answer');
var eightBallImg = document.querySelector('.eight-ball');
var returnQuestion = document.querySelector('.question-return');
var returnAnswer = document.querySelector('.answer-return');
var askQuestionSection = document.querySelector('.ask-question');
var clearBtn = document.querySelector('.btn-clear');
var favoriteBtn = document.querySelector('.btn-favorite');
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

window.onload = function() {
  enableDisableQuestionBtn();
  enabledDisableClearFunctionBtns();
}
askQuestionSection.addEventListener('click', clickHandler);
askQuestionSection.addEventListener('keyup', keyupHandler);

function clickHandler(event) {
  if (event.target.classList.contains('btn-answer')) {
    displayAnswer();
  }

  if (event.target.classList.contains('btn-clear')) {
    clearDisplayedAnswer();
  }

  if (event.target.classList.contains('btn-favorite')) {
    displayFavorite();
  }
}

function keyupHandler(event) {
  if (event.target.classList.contains('input-question')) {
    enableDisableQuestionBtn();
  }
}

function displayAnswer() {
  var question = userInput.value;
  userInput.value = '';
  eightBallImg.classList.add('hidden');
  returnQuestion.innerText = `"${question}?"`;
  returnAnswer.innerText = answers[getRandomIndex(answers)];
  enableDisableQuestionBtn();
  enabledDisableClearFunctionBtns();
}

function clearDisplayedAnswer() {
  eightBallImg.classList.remove('hidden');
  returnQuestion.innerText = '';
  returnAnswer.innerText = '';
  enabledDisableClearFunctionBtns();
}

function enableDisableQuestionBtn() {
  if (userInput.value !== '') {
    answerBtn.disabled = false;
  } else {
    answerBtn.disabled = true;
  }
}

function enabledDisableClearFunctionBtns() {
  if (eightBallImg.classList.contains('hidden')) {
    favoriteBtn.disabled = false;
    clearBtn.disabled = false;
  } else {
    favoriteBtn.disabled = true;
    clearBtn.disabled = true;
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
