var ask = require('readline-sync');

function monster(type, name, health, mood){
	this.type = type;
	this.name = name;
	this.health = health;
	this.mood = mood;
}

var mood = ['hungry', 'naughty', 'snuggly'];

var care = ['feed', 'scold', 'snuggle'];

var type = ['Moon Monster', 'Sea Monster', 'Rock Monster', 'Lava Monster', 'Dragon'];

var eggType = type[Math.floor(Math.random() * 5)];

var monsterMood = mood[Math.floor(Math.random() * 3)];

var newMonster = new monster(eggType, monster.name, 100, monsterMood);


var startGame = function(){
  console.log('A new egg has appeared! This egg is from the rare lineage of ' + eggType + '. The egg is hatching!');
  newMonster.name = ask.question('What will you call it?\n');
};

startGame();



function behavior(monsterMood){
	if(monsterMood === 'hungry'){
		console.log(newMonster.name + ' is hungry!');
	}else if(monsterMood === 'naughty'){
		console.log(newMonster.name + ' is being naughty!');
	}else{
		console.log(newMonster.name + 'is feeling snuggly!');
	}
}

var timeTillDeath = function(){
	behavior()
	console.log(newMonster.name + '\'s health is: ' + newMonster.health);
		newMonster.health -= 10;
	console.log('What do you want to do to take care of ' +newMonster.name + '?')
	ask.question('You can choose one of these: ' + mood.toString())
};

setInterval(timeTillDeath, 5000)

var appeaseMonster = function(care, mood){

};


function gameOver(){
	console.log('Your rare monster has died of neglect - way to go. Please don\'t reproduce!')
}



