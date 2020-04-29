'use strict';
//console.log('Hello World!');

// Welcoming the user
var userName = prompt('Please enter your name:');
document.getElementById('welcome-message').innerHTML = ('Welcome, ' + userName + ' I would like to share with you a little about myself.');

// Activated by the guessingGame Button
function guessGame(){
  // 1st y/n question
  var questionOne = prompt('Do I want to retire by 60?').toLowerCase();
  if(questionOne === 'no' || questionOne === 'n'){
    // console.log('correct');
    alert('You are correct!');
  } else {
    // console.log('incorrect');
    alert('Sorry, you are incorrect.');
  }

  // 2nd y/n question
  var questionTwo = prompt('Am I a captain at an airline?').toLowerCase();
  if(questionTwo === 'yes' || questionTwo === 'y'){
    // console.log('correct');
    alert('You are correct!');
  } else {
    // console.log('incorrect');
    alert('Sorry, you are incorrect.');
  }

  // 3rd y/n question
  var questionThree = prompt('Do I want to race sailboats?').toLowerCase();
  if(questionThree === 'yes' || questionThree === 'y'){
    // console.log('correct');
    alert('You are correct!');
  } else {
    // console.log('incorrect');
    alert('Sorry, you are incorrect.');
  }

  // 4th y/n question
  var questionFour = prompt('Was I a flight instructor?').toLowerCase();
  if(questionFour === 'yes' || questionFour === 'y'){
    // console.log('correct');
    alert('You are correct!');
  } else {
    // console.log('incorrect');
    alert('Sorry, you are incorrect.');
  }

  // 5th y/n question
  var questionFive = prompt('Do I have a gap in my work experience?').toLowerCase
  ();
  if(questionFive === 'no' || questionFive === 'n'){
    // console.log('correct');
    alert('You are correct!');
  } else {
    // console.log('incorrect');
    alert('Sorry, you are incorrect.');
  }

  // Variables to set up the number guessing game
  var number = 5;
  var userGuess = 0;
  var correctGuess = false;
  //TODO make number random

  for(var i = 4; i >= 1; i--){
    userGuess = Number(prompt('I will give you ' + i + ' tries to guess a number between 1 and 10.'));

    if(userGuess === number){
      //console.log('correct');
      alert('That\'s it! I was thinking of ' + number + '.');
      correctGuess = true;
      break;
    }
  }

  // Make this alert if the user didn't get the answer correct
  if(correctGuess === false){
    //console.log('incorrect');
    alert('The number was ' + number + '.');
  }

  var answerArray = ['cessna', 'beachcraft', 'bombardier', 'embraer', 'piper'];


}
