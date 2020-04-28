console.log('Hello World!');

function welcomeName(){
  var userName = prompt('Please enter your name:');
  document.getElementById('welcome-message').innerHTML = ('Welcome, ' + userName + ' I would like to share with you a little about myself.')
}

function guessGame(){
  console.log('do i work?');
}


welcomeName();
