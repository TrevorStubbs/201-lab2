'use strict';
//console.log('Hello World!');

// Welcoming the user
var userName = prompt('Please enter your name:');
document.getElementById('welcome-message').innerHTML = ('Welcome, ' + userName + ' I would like to share with you a little about myself.');

// Activated by the guessingGame Button
function guessGame(){
  var userScore = 0;

  // 1st y/n question  
  var questionOne = prompt('Do I want to retire by 60?').toLowerCase();
  if(questionOne === 'no' || questionOne === 'n'){
    // console.log('correct');
    alert('You are correct!');
    userScore++;
  } else {
    // console.log('incorrect');
    alert('Sorry, you are incorrect.');
  }

  // 2nd y/n question
  var questionTwo = prompt('Am I a captain at an airline?').toLowerCase();
  if(questionTwo === 'yes' || questionTwo === 'y'){
    // console.log('correct');
    alert('You are correct!');
    userScore++;
  } else {
    // console.log('incorrect');
    alert('Sorry, you are incorrect.');
  }

  // 3rd y/n question
  var questionThree = prompt('Do I want to race sailboats?').toLowerCase();
  if(questionThree === 'yes' || questionThree === 'y'){
    // console.log('correct');
    alert('You are correct!');
    userScore++;
  } else {
    // console.log('incorrect');
    alert('Sorry, you are incorrect.');
  }

  // 4th y/n question
  var questionFour = prompt('Was I a flight instructor?').toLowerCase();
  if(questionFour === 'yes' || questionFour === 'y'){
    // console.log('correct');
    alert('You are correct!');
    userScore++;
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
    userScore++;
  } else {
    // console.log('incorrect');
    alert('Sorry, you are incorrect.');
  }

  // Variables to set up the number guessing game
  var number = Math.floor(Math.random() * 10) + 1;
  var userGuess = 0;
  var correctGuess = false;

  alert('I will give you 4 tries to guess a number between 1 and 10.');

  for(var i = 4; i >= 1; i--){
    userGuess = Number(prompt('You have ' + i + ' tries left. Please make a guess: '));

    if(userGuess === number){
      //console.log('correct');
      alert('That\'s it! I was thinking of ' + number + '.');
      userScore++;
      correctGuess = true;
      break;
    } else {
      if(userGuess > number){
        alert('Your guess was too big.');
      } else {
        alert('Your guess was too small.');
      }
    }
  }

  // Make this alert if the user didn't get the answer correct
  if(correctGuess === false){
    //console.log('incorrect');
    alert('The number was ' + number + '.');
  }

  //Setup variables for the fill in the blank question
  var answerArray = ['cessna', 'beachcraft', 'bombardier', 'embraer', 'piper'];
  correctGuess = false;
  alert('I will give you 6 attempts to guess a make of airplane that I have flown');

  //outer for loop to limit the number of guess by the user
  for(var j = 6; j >= 1; j--){
    var arrayGuess = prompt('You have ' + j + ' more attempts. What have I flown?').toLowerCase();

    //inner for loop to iterate through the array to check to see if the guess matches an answer
    for(var n = 0; n < answerArray.length; n++){
      if(arrayGuess === answerArray[n]){
        alert('Awesome job, you are correct, I have flown the ' + arrayGuess + ' brand of airplane! All of the correct answers are : ' + answerArray[0] + ', ' + answerArray[1] + ', ' + answerArray[2] + ', ' + answerArray[3] + ', ' + 'and ' + answerArray[4] + '.');
        userScore++;
        correctGuess = true;
        break;
      }
    }

    //break out of the outer loop if a guess was correct.
    if(correctGuess === true){
      break;
    }

  }

  // If the guess was not correct then give the user the answers.
  if(correctGuess === false){
    alert('I am sorry you did not guess any correctly. The possible answers were: ' + answerArray[0] + ', ' + answerArray[1] + ', ' + answerArray[2] + ', ' + answerArray[3] + ', ' + 'and ' + answerArray[4] + '.');
  }

  //tell the user their score.
  alert('You answered ' + userScore + ' questions correctly. Thank you for playing!');
}
