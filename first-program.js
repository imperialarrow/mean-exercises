var ask = require('readline-sync');
console.log('Hello!\n');
var name = ask.question('What is your name?\n');
console.log('\tnice to meet you, ' + name + '!\n');
var hobby = ask.question('What is your favorite thing to do in your spare time?\n');
var yourHobby = hobby.toUpperCase();
console.log(yourHobby + '??! Hmm. I like to scan the radio for signs of extraterrestrial life.\n');
var music = ask.question('So ' + name + ', what music are you into these days?\n');
console.log('\tI will have to check out ' + music + '. In between listening for aliens.\n')
var bestFriend = ask.question(name + ', tell me about your best friend\n')
var bestFriendLength = bestFriend.length
console.log(bestFriend.substring(bestFriendLength/2,bestFriendLength) + ' -- I do not want to bore you. How about this?\n')
console.log('You gave me ' + bestFriendLength + ' characters about your best friend. I remember all of it.\n')
var start = ask.question('When do you want me to start? Pick a number, 1 through ' + bestFriendLength)
console.log(bestFriend.substring(start,bestFriendLength))