var ask = require('readline-sync');
var compChoice = Math.random();
if (compChoice <= 0.33){
	compChoice = 'rock';
} else if (0.34 <= compChoice <= 0.66){
	compChoice = 'paper';
} else {
	compChoice = 'scissors';
}
var choice = ask.question('Choose one: rock, paper, or scissors\n');
var userChoice = choice.toLowerCase;
switch(userChoice) {
	case 'rock':
		if(compChoice === 'rock'){
			console.log(compChoice + ': It\'s a tie!');
		} else if(compChoice === 'paper'){
			console.log(compChoice + ': paper covers rock; you lose');
		}else {
			console.log(compChoice + ': congratulations! rock breaks scissors');
		}
		break;
	 case 'paper':
	   	if(compChoice === 'paper'){
			console.log(compChoice + ': It\'s a tie!');
		} else if(compChoice === 'scissors'){
			console.log(compChoice + ': scissors cuts paper; you lose');
		}else {
			console.log(compChoice + ': congratulations! paper covers rock');
		}
		break;
	 case 'scissors':
	   	if(compChoice === 'scissors'){
			console.log(compChoice + ': It\'s a tie!');
		} else if(compChoice === 'rock'){
			console.log(compChoice + ': rock breaks scissors; you lose');
		}else {
			console.log(compChoice + ': congratulations! scissors cuts paper');
		}
		break;
	default:
		console.log('oops - please enter either "rock", "paper", or "scissors" to play');	
}