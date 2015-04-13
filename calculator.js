var ask = require('readline-sync');
var mathProb = ask.question('Enter your math problem below:\n');
var num1 = parseInt(mathProb);
var oper = mathProb.replace(/\d/g, '');
var num2Start = mathProb.indexOf(oper) + 1;
var num2 = mathProb.slice(num2Start, mathProb.length);
var answer = num1 + oper + num2;
console.log(answer);