var readlineSync = require("readline-sync")

var number1 = readlineSync.question("Choose first number... ")
var number2 = readlineSync.question("Choose second number...")

var signs = ["add", "subtract", "divide", "multiply"]
//key in select

var key = readlineSync.keyInSelect(signs, "Choose a sign... ")

function multiplyNumbers(number1, number2){
    console.log(Number(number1) * Number(number2))
}


function divideNumbers(number1, number2){
    console.log(Number(number1) / Number(number2))
}


function subtractNumbers(num1, num2){
    console.log(Number(number1) - Number(number2))
}

function sumNumbers(num1, num2){
    console.log(Number(number1) + Number(number2))
}
//if statement 
//if 
if (key === 0){
    sumNumbers(number1, number2)
} else if (key === 1){
    subtractNumbers(number1, number2)
} else if (key === 2){
    divideNumbers(number1, number2)
} else multiplyNumbers(number1, number2)

