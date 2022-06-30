var sum = require('./Program6/sum')
var subs = require('./Program6/substraction')
var mult = require('./Program6/multiplication')
var div = require('./Program6/division')
var moment = require('moment');

var firstOperand = +process.argv[2]
var secondOperand = +process.argv[3]

console.log("Today is: " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
sum(firstOperand, secondOperand);
// subs(firstOperand, secondOperand);
mult(firstOperand, secondOperand);
// div(firstOperand, secondOperand);
subs(firstOperand, secondOperand);
div(firstOperand, secondOperand);
