'use strict';
//
// intro
var numOfCorrectAnswers = 0;
var questions = ['Does Brian own a home?','Does Brian have any pets?','Does Brian like the color blue?','Does Brian like brussel sprouts?','Does Brian have any children?','','Where have I been?'];
// var questionPlaces = ('Where have I been?');

function isInputValid(input) {
  input = input.toLowerCase;
  if (input === 'y' | input === 'yes' | input === 'n' | input === 'no') {
    return true;
  } else {
    input = prompt('Unrecognized input. Please use the correct format ("y/yes/n/no")');
    checkInput(input);
  }
}

function greeting() {
  alert('I want to play a game.');
  console.log('This statement should be read with the voice of Jigsaw.');
  var name = prompt('What is your name');
  alert('Welcome ' + name + '. All of your answers must be given in "yes/no" or "y/n" form.');

  var readyToPlay = prompt('Are you ready to play?').toLowerCase();
  if (readyToPlay === 'yes' | readyToPlay === 'y') {
    alert('Excellent.  Let us begin.');
  } else {
    alert('You can\'t get away that easy.');
  }
  return name;
}

//***************************************************************************
function firstQuestion(question){
  var answer1 = prompt(question);
  if (answer1.toLowerCase() === 'n' | answer1.toLowerCase() === 'no') {
    alert('Incorrect. Actually, he is proudly a home owner.');
    console.log('Almost. Maybe next time.');
  } else if (answer1.toLowerCase() === 'y' | answer1.toLowerCase() === 'yes'){
    alert('Correct! He bought his home in 2012.');
    console.log('Correct! Great guess.');
    numOfCorrectAnswers += 1;
  } else {
    alert('I\'m sorry, your answer must be either "yes" or "no".');
    document.getElementById('answerField1').innerHTML = 'Answer must be yes or no';
  }
  document.getElementById('questionHome').innerHTML = question;
  document.getElementById('answerField1').innerHTML = answer1;
}
//***************************************************************************
function secondQuestion(question){
  var answer2 = prompt(question);
  if (answer2.toLowerCase() === 'n' | answer2.toLowerCase() === 'no') {
    alert('Incorrect. He has more pets than he needs.');
    console.log('Almost. Maybe next time.');
  } else if (answer2.toLowerCase() === 'y' | answer2.toLowerCase() === 'yes'){
    alert('Yep, plenty of them.');
    console.log('Correct! Great guess.');
    numOfCorrectAnswers += 1;
  } else {
    alert('I\'m sorry, your answer must be either "yes" or "no".');
    document.getElementById('answerField2').innerHTML = 'Answer must be yes or no';
  }
  document.getElementById('questionPets').innerHTML = question;
  document.getElementById('answerField2').innerHTML = answer2;
}
//***************************************************************************
function thirdQuestion(question){
  var answer3 = prompt(question);
  if (answer3.toLowerCase() === 'n' | answer3.toLowerCase() === 'no') {
    alert('Incorrect. It\'s his favorite, actually.');
    console.log('Almost. Maybe next time.');
  } else if (answer3.toLowerCase() === 'y' | answer3.toLowerCase() === 'yes'){
    alert('You betcha! Is it your favorite color too?!');
    console.log('Correct! Great guess.');
    numOfCorrectAnswers += 1;
  } else {
    alert('I\'m sorry, your answer must be either "yes" or "no".');
    document.getElementById('answerField3').innerHTML = 'Answer must be yes or no';
  }
  document.getElementById('questionColor').innerHTML = question;
  document.getElementById('answerField3').innerHTML = answer3;
}
//***************************************************************************
function fourthQuestion(question){
  var answer4 = prompt(question);
  if (answer4.toLowerCase() === 'n' | answer4.toLowerCase() === 'no') {
    alert('That\'s right! Brussel sprouts are the worst!');
    console.log('Correct! Great guess.');
    numOfCorrectAnswers += 1;
  } else if (answer4.toLowerCase() === 'y' | answer4.toLowerCase() === 'yes'){
    alert('WRONG! Those are horrible!');
    console.log('Almost. Maybe next time.');
  } else {
    alert('I\'m sorry, your answer must be either "yes" or "no".');
    document.getElementById('answerField4').innerHTML = 'Answer must be yes or no';
  }
  document.getElementById('questionSprouts').innerHTML = question;
  document.getElementById('answerField4').innerHTML = answer4;
}
//***************************************************************************
function fifthQuestion(question){
  var answer5 = prompt(question);
  if (answer5.toLowerCase() === 'n' | answer5.toLowerCase() === 'no') {
    alert('He is a stepfather to two children.');
    console.log('Almost. Maybe next time.');
  } else if (answer5.toLowerCase() === 'y' | answer5.toLowerCase() === 'yes'){
    alert('Yessir, a 13yr old and an 11yr old.');
    console.log('Correct! Great guess.');
    numOfCorrectAnswers += 1;
  } else {
    alert('I\'m sorry, your answer must be either "yes" or "no".');
    document.getElementById('answerField5').innerHTML = 'Answer must be yes or no';
  }
  document.getElementById('questionKids').innerHTML = question;
  document.getElementById('answerField5').innerHTML = answer5;
}
//***************************************************************************
// Add a 6th question to game that takes a numeric value.
// Tell user if it's too high or too low.
// Give only four attempts to guess correctly.
function sixthQuestion(){
  var myNumber = 43;
  var guessArray = [];
  var guess;
  var answer6;
  alert('I chose a number between 1 and 100. You have four attempts to guess my number.');
  for (var i = 0; i < 4; i++) {
    if (i === 0) {
      guess = parseInt(prompt('Enter your guess, 1-100 (attempt ' + (i + 1) + ')'));
    }
    console.log(answer6);
    console.log(guess);
    guessArray[i] = guess;
    if (guess === myNumber) {
      alert('Correct!  Great guess, ' + userName + '. You got it after ' + (i + 1) + ' attempts.');
      numOfCorrectAnswers += 1;
      break;
    }
    if (guess < myNumber && i !== 3) {
      guess = parseInt(prompt('Too low. Guess a higher number (attempt ' + (i + 1) + ')'));
      // alert('Too low. Guess a higher number');
    }
    if (guess > myNumber && i !== 3) {
      guess = parseInt(prompt('Too high. Guess a lower number (attempt ' + (i + 1) + ')'));
      // alert('Too high. Try a lower number');
    }
    if (i === 3) {
      alert('Incorrect. Sorry ' + userName + ', that was too many guesses.');
    }
  }
  for (i = 0; i < guessArray.length; i++) {
    if (i !== 0) {
      answer6 += ', ' + guessArray[i];
    } else {
      answer6 = guessArray[i];
    }
  }
  document.getElementById('questionNumber').innerHTML = questionNumber;
  document.getElementById('answerField6').innerHTML = answer6;
}
//***************************************************************************
// Add 7th question to game with several answers that are stored in an array.
// Compare the users answer to all of the possible options in the array.
// Give only six attempts to get at least one answer correct.
function seventhQuestion(){
  var maxAttempts = 6;

  var countriesArray = ['United States','Dubai','Australia','Canada','Mexico','Honduras'];
  alert('Let\'s play another game, ' + userName + '. See if you can name a country I have visited. You have six attempts to get a guess correct.');

  var choice;
  for (var j = 0; j < maxAttempts; j++) {
    if (j === 0) {
      choice = prompt('Enter your guess of country.');
    }

    if (j > 0) {
      choice = prompt('I\'ve never been to "' + choice + '". Try again. (' + (maxAttempts - j) + ' attempts left)');
    }

    for (var k = 0; k < countriesArray.length; k++) {
      if (choice.toLowerCase() === countriesArray[k].toLowerCase()) {
        alert('Yes! I have visited ' + choice + '! That only took you ' + (j + 1) + ' guess(es).');
        var answer7 = choice;
        j = maxAttempts;
        numOfCorrectAnswers += 1;
        break;
      }
    }
  }
  document.getElementById('questionPlaces').innerHTML = questionPlaces;
  document.getElementById('answerField7').innerHTML = answer7;

  alert(userName + ', you got ' + numOfCorrectAnswers + ' correct out of 7.');
  document.getElementById('resultsTitle').innerHTML = ('Results for ' + userName);
  document.getElementById('resultsField').innerHTML = (numOfCorrectAnswers + ' out of 7');

  if (numOfCorrectAnswers === 7) {
    document.getElementById('commentsField').innerHTML = ('Great job. 100%');
  }
  if (numOfCorrectAnswers < 7 && numOfCorrectAnswers >= 3) {
    document.getElementById('commentsField').innerHTML = ('You got a few answers correct. You should get to know Brian better');
  }
  if (numOfCorrectAnswers < 3) {
    document.getElementById('commentsField').innerHTML = ('You don\'t seem to know Brian at all :(');
  }
}

function showCorrectAnswers() {
  var correctAnswers = ['Yes','Yes','Yes','No','Yes'];
  for (var i = 0; i < correctAnswers.length; i++) {
    document.getElementById('correctAnswer' + (i + 1)).innerHTML = (correctAnswers[i]);
  }
}

var userName = greeting();
firstQuestion(questions[0]);
secondQuestion(questions[1]);
thirdQuestion(questions[2]);
fourthQuestion(questions[3]);
fifthQuestion(questions[4]);
// sixthQuestion();
// seventhQuestion(questions[6]);
showCorrectAnswers();
// Keep a tally of the number of correct answers provided by user.
// Address the user by name to show his/her results.
