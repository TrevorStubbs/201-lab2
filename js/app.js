'use strict';
//console.log('Hello World!');

// Welcoming the user
// function welcomeName(){
//   var userName = prompt('Please enter your name:');
//   document.getElementById('welcome-message').innerHTML = ('Welcome, ' + userName + ' I would like to share with you a little about myself.')
// }

// Flow control for questions where the correct answer is 'yes'
// function yesIsCorrect(answer){
//   if(answer === 'yes' || answer === 'y'){
//     // console.log('correct');
//     correct();
//   } else {
//     // console.log('incorrect');
//     incorrect();
//   }
// }

// Flow control for questions where the correct answer is 'no'
// function noIsCorrect(answer){
//   if(answer === 'no' || answer === 'n'){
//     // console.log('correct');
//     correct();
//   } else {
//     // console.log('incorrect');
//     incorrect();
//   }
// }

//Alert function when the answer is correct
// function correct(){
//   return alert('You are correct!');
// }

//Alert function where the answer is incorrect
// function incorrect(){
//   return alert('Sorry, you are incorrect.');
// }

// The guessing game
// function guessGame(){
//   var run = true;
//   while (run){
//     var questionOne = prompt('Do I want to retire by 60?').toLowerCase();
//     noIsCorrect(questionOne);
//     var questionTwo = prompt('Am I a captain at an airline?').toLowerCase();
//     yesIsCorrect(questionTwo);
//     var questionThree = prompt('Do I want to race sailboats?').toLowerCase();
//     yesIsCorrect(questionThree);
//     var questionFour = prompt('Was I a flight instructor?').toLowerCase();
//     yesIsCorrect(questionFour);
//     var questionFive = prompt('Do I have a gap in my work experience?').toLowerCase
//     ();
//     noIsCorrect(questionFive);
//     run = false;
//   }
// }

// // Calling the welcomeName() function
// welcomeName();

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


}
