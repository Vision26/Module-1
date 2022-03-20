//Write a function that takes an array of numbers and returns the largest (without using Math.max())

const arrAy = [3, 5, 2, 8, 1]
function largest(){
    console.log(Math.max(...arrAy))
}
largest(arrAy)


//Write a function that takes an array of words and a character and returns each word that has that character present.

const letters = ["#3", "$$$", "C%4!", "Hey!"]
function lettersWithString(){
      var newArr = letters.splice(2, 4)
      console.log(newArr)
}
lettersWithString(letters)

//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function isDivisibleA(num1, num2){
        if(num1 / num2){
            console.log(true)
        }
}
isDivisibleA(4, 2)

function isDivisibleB(num1, num2){
    if(num1 / num2){
        console.log(true)
    }
}
isDivisibleB(9, 3)

function isDivisibleC(num1, num2){
        if(num1 / num2){
        console.log(false)
    }
}
isDivisibleC(15, 4)
