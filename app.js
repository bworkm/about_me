'use strict';

// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var question1 = 'Does Brian own a home?';
var answer1 = prompt(question1);
if (answer1.toLowerCase() === 'n' | answer1.toLowerCase() === 'no') {
  alert('Actually, he is proudly a home owner.');
  console.log('Almost. Maybe next time.');
  document.getElementById('answerField1').innerHTML = answer1;
} else if (answer1.toLowerCase() === 'y' | answer1.toLowerCase() === 'yes'){
  alert('Correct! He bought his home in 2012.');
  console.log('Correct! Great guess.');
  document.getElementById('answerField1').innerHTML = answer1;
} else {
  alert('I\'m sorry, your answer must be either "yes" or "no".');
  document.getElementById('answerField1').innerHTML = 'Answer must be yes or no';
}
document.getElementById('question1').innerHTML = question1;

var question2 = 'Does Brian have any pets?';
var answer2 = prompt(question2);
if (answer2.toLowerCase() === 'n' | answer2.toLowerCase() === 'no') {
  alert('He has more pets than he needs.');
  console.log('Almost. Maybe next time.');
  document.getElementById('answerField2').innerHTML = answer2;
} else if (answer2.toLowerCase() === 'y' | answer2.toLowerCase() === 'yes'){
  alert('Yep, plenty of them.');
  console.log('Correct! Great guess.');
  document.getElementById('answerField2').innerHTML = answer2;
} else {
  alert('I\'m sorry, your answer must be either "yes" or "no".');
  document.getElementById('answerField2').innerHTML = 'Answer must be yes or no';
}
document.getElementById('question2').innerHTML = question2;

var question3 = 'Does Brian like the color blue?';
var answer3 = prompt(question3);
if (answer3.toLowerCase() === 'n' | answer3.toLowerCase() === 'no') {
  alert('It\'s his favorite, actually.');
  console.log('Almost. Maybe next time.');
  document.getElementById('answerField3').innerHTML = answer3;
} else if (answer3.toLowerCase() === 'y' | answer3.toLowerCase() === 'yes'){
  alert('Is it your favorite color too?!');
  console.log('Correct! Great guess.');
  document.getElementById('answerField3').innerHTML = answer3;
} else {
  alert('I\'m sorry, your answer must be either "yes" or "no".');
  document.getElementById('answerField3').innerHTML = 'Answer must be yes or no';
}
document.getElementById('question3').innerHTML = question3;

var question4 = 'Does Brian like brussel sprouts?';
var answer4 = prompt(question4);
if (answer4.toLowerCase() === 'n' | answer4.toLowerCase() === 'no') {
  alert('That\'s right! Brussel sprouts are the worst!');
  console.log('Correct! Great guess.');
  document.getElementById('answerField4').innerHTML = answer4;
} else if (answer4.toLowerCase() === 'y' | answer4.toLowerCase() === 'yes'){
  alert('WRONG! Those are horrible!');
  console.log('Almost. Maybe next time.');
  document.getElementById('answerField4').innerHTML = answer4;
} else {
  alert('I\'m sorry, your answer must be either "yes" or "no".');
  document.getElementById('answerField4').innerHTML = 'Answer must be yes or no';
}
document.getElementById('question4').innerHTML = question4;

var question5 = 'Does Brian have any children?';
var answer5 = prompt(question5);
if (answer5.toLowerCase() === 'n' | answer5.toLowerCase() === 'no') {
  alert('He is a stepfather to two children.');
  console.log('Almost. Maybe next time.');
  document.getElementById('answerField5').innerHTML = answer5;
} else if (answer5.toLowerCase() === 'y' | answer5.toLowerCase() === 'yes'){
  alert('Yessir, a 13yr old and an 11yr old.');
  console.log('Correct! Great guess.');
  document.getElementById('answerField5').innerHTML = answer5;
} else {
  alert('I\'m sorry, your answer must be either "yes" or "no".');
  document.getElementById('answerField5').innerHTML = 'Answer must be yes or no';
}
document.getElementById('question5').innerHTML = question5;
