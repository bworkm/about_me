'use strict';
//
// intro
var numOfCorrectAnswers = 0;
var numOfQuestions = 5;
var minRange = 1;
var maxRange = 20;
var randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
                  //  Math.floor(Math.random() * (max - min + 1)) + min
// console.log(randomNumber);
var questionsAndAnswers = [
  ['Does Brian own a home?','Yes','y'],
  ['Does Brian have any pets?','Yes','y'],
  ['Does Brian like the color blue?','Yes','y'],
  ['Does Brian like brussel sprouts?','No','n'],
  ['Does Brian have any children?','Yes','y'],
  ['What is my number?',randomNumber],
  ['Where has Brian been?','United States, Dubai, Australia, Canada, Mexico, Honduras']
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

  prompt('Are you ready to play?');  // Doesn't matter what is typed

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
  var maxTries = 4;
  var min = 1;
  var max = 50;

  alert('I chose a number between ' + min + ' and ' + max + '. You have four attempts to guess my number.');

  for (var i = 0; i < maxTries; i++) {
    if (i === 0) {
      guess = parseInt(prompt('Enter your guess. (' + min + '-' + max + ') (attempt ' + (i + 1) + ')'));
      // This should verify input is actually a number between min and max.
    } else if (guess < randomNumber && i !== maxTries) {
      min = guess;
      guess = parseInt(prompt('Too low. Guess a higher number. (' + min + '-' + max + ') (attempt ' + (i + 1) + ')'));
      // alert('Too low. Guess a higher number');
    } else if (guess > randomNumber && i !== maxTries) {
      max = guess;
      guess = parseInt(prompt('Too high. Guess a lower number. (' + min + '-' + max + ') (attempt ' + (i + 1) + ')'));
      // alert('Too high. Try a lower number');
    }
    // console.log(answer6);
    // console.log(guess);
    guessArray[i] = guess;
    if (guess === randomNumber) {
      alert('Correct!  Great guess, ' + userName + '. You got it after ' + (i + 1) + ' attempts.');
      numOfCorrectAnswers += 1;
      break;
    }
    if (i === maxTries - 1) {
      alert('Sorry ' + userName + ', the correct answer was ' + randomNumber);
    }
  }  // end of for loop
  console.log('guessArray: ' + guessArray);

  document.getElementById('question6').innerHTML = question6;
  document.getElementById('answerField6').innerHTML = guessArray;
}
//***************************************************************************
// Add 7th question to game with several answers that are stored in an array.
// Compare the users answer to all of the possible options in the array.
// Give only six attempts to get at least one answer correct.
function seventhQuestion(){
  var maxAttempts = 6;
  var answer7 = 'No correct answer'
  var countriesArray = ['United States','Dubai','Australia','Canada','Mexico','Honduras'];

  alert('Let\'s play another game, ' + userName + '. See if you can name a country I have visited. You have six attempts to get a guess correct.');

  var choice;
  for (var j = 0; j < maxAttempts; j++) {
    if (j === 0) {
      choice = prompt('Enter a country Brian has visited.');
    }

    if (j > 0) {
      choice = prompt('I\'ve never been to "' + choice + '". Try again. (' + (maxAttempts - j) + ' attempts left)');
    }

    for (var k = 0; k < countriesArray.length; k++) {
      if (choice.toLowerCase() === countriesArray[k].toLowerCase()) {
        alert('Yes! I have visited ' + choice + '! That only took you ' + (j + 1) + ' guess(es).');
        answer7 = choice;
        j = maxAttempts;
        numOfCorrectAnswers += 1;
        break;
      }
    }
  }
  document.getElementById('question7').innerHTML = question7;
  document.getElementById('answerField7').innerHTML = answer7;

  for (var l = 0; l < countriesArray.length; l++) {
    // temp += (temp + ', '
  }
  // document.getElementById('correctAnswer7').innerHTML = ;
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
callQuestions();
sixthQuestion();
seventhQuestion();
fillQATable(questionsAndAnswers, userInputs);
showResults();
// Keep a tally of the number of correct answers provided by user.
// Address the user by name to show his/her results.
