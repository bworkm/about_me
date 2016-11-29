'use strict';

// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
var question1 = 'Does Brian own a home?';
var question2 = 'Does Brian have any pets?';
var question3 = 'Does Brian like the color blue?';
var question4 = 'Does Brian like brussel sprouts?';
var question5 = 'Does Brian have any children?';

document.getElementById('question1').innerHTML = question1;
document.getElementById('question2').innerHTML = question2;
document.getElementById('question3').innerHTML = question3;
document.getElementById('question4').innerHTML = question4;
document.getElementById('question5').innerHTML = question5;

var answer1 = prompt('');
if (answer1.toLowerCase() != 'n' & answer1.toLowerCase() != 'no' & answer1.toLowerCase() != 'y' & answer1.toLowerCase() != 'yes') {
  document.getElementById('answerField1').innerHTML = 'Answer must be yes or no';
} else {
  document.getElementById('answerField1').innerHTML = 'Valid Answer!';
}

var answer2 = prompt('');
if (answer2.toLowerCase() != 'n' & answer2.toLowerCase() != 'no' & answer2.toLowerCase() != 'y' & answer2.toLowerCase() != 'yes') {
  document.getElementById('answerField2').innerHTML = 'Answer must be yes or no';
} else {
  document.getElementById('answerField2').innerHTML = 'Valid Answer!';
}

var answer3 = prompt('');
if (answer3.toLowerCase() != 'n' & answer3.toLowerCase() != 'no' & answer3.toLowerCase() != 'y' & answer3.toLowerCase() != 'yes') {
  document.getElementById('answerField3').innerHTML = 'Answer must be yes or no';
} else {
  document.getElementById('answerField3').innerHTML = 'Valid Answer!';
}

var answer4 = prompt('');
if (answer4.toLowerCase() != 'n' & answer4.toLowerCase() != 'no' & answer4.toLowerCase() != 'y' & answer4.toLowerCase() != 'yes') {
  document.getElementById('answerField4').innerHTML = 'Answer must be yes or no';
} else {
  document.getElementById('answerField4').innerHTML = 'Valid Answer!';
}

var answer5 = prompt('');
if (answer5.toLowerCase() != 'n' & answer5.toLowerCase() != 'no' & answer5.toLowerCase() != 'y' & answer5.toLowerCase() != 'yes') {
  document.getElementById('answerField5').innerHTML = 'Answer must be yes or no';
} else {
  document.getElementById('answerField5').innerHTML = 'Valid Answer!';
}
