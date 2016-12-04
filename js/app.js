'use strict';
//
// intro
var numOfCorrectAnswers = 0;
var numOfQuestions = 5;
var minRange = 1;
var maxRange = 20;
var randomNumber = Math.floor(Math.random() * (maxRange - minRange)) + minRange;

var questionsAndAnswers = [
  ['Does Brian own a home?','Yes','y'],
  ['Does Brian have any pets?','Yes','y'],
  ['Does Brian like the color blue?','Yes','y'],
  ['Does Brian like brussel sprouts?','No','n'],
  ['Does Brian have any children?','Yes','y'],
  ['What is my number?',randomNumber],
  ['Where has Brian been?',]
];

var userInputs = [];
var responses = [
  ['Correct! He bought his home in 2012.','Incorrect. Actually, he is proudly a home owner.'],
  ['Yep, plenty of them.','Incorrect. He has more pets than he needs.'],
  ['You betcha! Is it your favorite color too?!','Incorrect. It\'s his favorite, actually.'],
  ['That\'s right! Brussel sprouts are the worst!','WRONG! Those are horrible!'],
  ['Yessir, a 13yr old and an 11yr old.','He is a stepfather to two children.']
];
//***************************************************************************

function isInputValid(input, position) {
  // console.log('Entered isInputValid function.');
  // console.log('input :' + input);  // Verifying input
  // console.log('position :' + position);  // Verifying position
  input = input.toLowerCase();
  // console.log('input (tolower) :' + input);  // Verifying input after toLowerCase()
  while (input !== 'y' && input !== 'yes' && input !== 'n' && input !== 'no') {
    input = prompt('Unrecognized input. Please use the correct format ("y/yes" or "n/no")').toLowerCase();
  }
  // console.log('position: ' + position);
  if (position !== undefined) {
    // console.log('Two valid arguments in isInputValid. Updating userInputs array.');
    userInputs[position] = input;
    // console.log('Assigned to userInputs [' + position + '] : ' + userInputs[position]);
  }
  // console.log('Exiting isInputValid function.');
  return true;
}
//***************************************************************************

function greeting() {
  alert('I want to play a game.');
  console.log('This statement should be read with the voice of Jigsaw.');
  var name = prompt('What is your name');
  alert('Welcome ' + name + '. I\'m going to ask you a few questions. Please answer either "yes" or "y" for Yes and "no" or "n" for No.');

  var readyToPlay = prompt('Are you ready to play?');
  // console.log('readyToPlay :' + readyToPlay);
  isInputValid(readyToPlay);
  // This needs to update the 'readyToPlay' variable so the if statement below works.
  if (readyToPlay.toLowerCase() === 'n' | readyToPlay.toLowerCase() === 'no') {
    alert('You\'re not getting away that easy.');
  }

  alert('Here we go!');
  return name;
}
//***************************************************************************

function askQuestion(questionsAndAnswers, position) {
  var isCorrect = false;
  // console.log('Question is: ' + questionsAndAnswers[position][0]);  //Testing for value of array
  // console.log('Position is: ' + position);
  var guess = prompt(questionsAndAnswers[position][0]);  //asks question from array
  isInputValid(guess, position);   // needs to store the users guess into the 'userInputs' array.

  checkAnswer(questionsAndAnswers, userInputs, position);

  return isCorrect;
}
//***************************************************************************
function checkAnswer(questionsAndAnswers, userInputs, position) {
  var option1 = questionsAndAnswers[position][1];
  var option2 = questionsAndAnswers[position][2];
  if ((userInputs[position] === option1.toLowerCase()) | (userInputs[position] === option2.toLowerCase())) {
    alert(responses[position][0]);
    numOfCorrectAnswers += 1;
  } else {
    alert(responses[position][1]);
  }
}
//***************************************************************************
// Add a 6th question to game that takes a numeric value.
// Tell user if it's too high or too low.
// Give only four attempts to guess correctly.
function sixthQuestion(){
  var guessArray = [];
  var guess;
  var answer6;
  alert('I chose a number between 1 and 100. You have four attempts to guess my number.');
  for (var i = 0; i < 4; i++) {
    if (i === 0) {
      guess = parseInt(prompt('Enter your guess, 1-100 (attempt ' + (i + 1) + ')'));
      // This should verify input is actually a number between min and max.
    }
    console.log(answer6);
    console.log(guess);
    guessArray[i] = guess;
    if (guess === randomNumber) {
      alert('Correct!  Great guess, ' + userName + '. You got it after ' + (i + 1) + ' attempts.');
      numOfCorrectAnswers += 1;
      break;
    }
    if (guess < randomNumber && i !== 3) {
      guess = parseInt(prompt('Too low. Guess a higher number (attempt ' + (i + 1) + ')'));
      // alert('Too low. Guess a higher number');
    }
    if (guess > randomNumber && i !== 3) {
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
}
//***************************************************************************
function showResults() {
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
//***************************************************************************

function fillQATable (qAndA, answers) {
  for (var i = 0; i < answers.length; i++) {
    // console.log('Element id: correctAnswer' + (i + 1));
    // console.log('Answer[0]: ' + answers[i]);
    // console.log('Answer to question ' + (i + 1) + ': ' + document.getElementById('correctAnswer' + (i + 1)).innerHTML);
    // console.log(document.getElementById('correctAnswer1').innerHTML);
    document.getElementById('answerField' + (i + 1)).innerHTML = answers[i];
    // console.log('Answer to question ' + (i + 1) + ': ' + document.getElementById('correctAnswer' + (i + 1)).innerHTML);
  }
  for (var j = 0; j < qAndA.length; j++) {
    // console.log('question' + (j + 1));
    // console.log(document.getElementById('question1').innerHTML);
    // console.log(document.getElementById('question' + (j + 1)).innerHTML);
    document.getElementById('question' + (j + 1)).innerHTML = qAndA[j][0];
    document.getElementById('correctAnswer' + (j + 1)).innerHTML = qAndA[j][1];
    // console.log('Question: ' + (j + 1) + ': ' + document.getElementById('question' + (j + 1)).innerHTML);
    // console.log('Correct Answer: ' + (j + 1) + ': ' + document.getElementById('correctAnswer' + (j + 1)).innerHTML);
  }
}
//***************************************************************************
function callQuestions() {
  for (var a = 0; a < numOfQuestions; a++) {
    askQuestion(questionsAndAnswers, a);
  }
}
//***************************************************************************
// Main function calls
var userName = greeting();
// callQuestions();
// firstQuestion(questions[0]);
// secondQuestion(questions[1]);
// thirdQuestion(questions[2]);
// fourthQuestion(questions[3]);
// fifthQuestion(questions[4]);
sixthQuestion();
// seventhQuestion(questions[6]);
fillQATable(questionsAndAnswers, userInputs);
// Keep a tally of the number of correct answers provided by user.
// Address the user by name to show his/her results.
