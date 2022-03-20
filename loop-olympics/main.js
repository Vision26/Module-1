//Write a for loop that prints to the console the numbers 0 through 9.
for(var i = 0; i <= 9; i++){
    console.log(i)
}

//Write a for loop that prints to the console 9 through 0.
for(var i = 9; i > 0; i--){
    console.log(i)
}

//Write a for loop that prints these fruits to the console.
var fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

//Write a for loop that will push the numbers 0 through 9 to an array.
var array = []
for(var i = 0; i <= 8; i++){
   console.log(array.push(i))
}

//Write a for loop that prints to the console only even numbers 0 through 100.
for(var i = 0; i <= 100; i+=2){
    console.log(i)
}

//or

for(var i = 0; i <= 100; i++){
    if(i % 2 === 0)
    console.log(i)
}

//Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var myBasket = []
for(var i = 0; i < fruit.length; i++){
    if(i % 2 !== 0){
    console.log(fruit[i])
    } else if(fruit[i]){
        console.log(myBasket.push(fruit[i]))
    } else console.log(myBasket[i])
}

//Write a loop that will print out all the names of the people of the people array
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  for(var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
}

//Write a loop that pushes the names into a names array, and the occupations into an occupations array.\
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  var names = []
  var occupations = []
  
  for(var i = 0; i < peopleArray.length; i++){
      console.log(peopleArray[i].name)
      if(peopleArray[i].name){
          console.log(names.push(peopleArray[i].name))
      }
  }
  for(var i = 0; i < names.length; i++){
      console.log(names[i])
  }
  
  for(var i = 0; i < peopleArray.length; i++){
      console.log(peopleArray[i].occupation)
          if(peopleArray[i].occupation){
              console.log(occupations.push(peopleArray[i].occupation))
          }
      }
  for(var i = 0; i < occupations.length; i++){
      console.log(occupations[i])
  }

  //Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".
  var oddNames = []
var evenOccupations = []

for(var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i])
    if(i % 2 === 0){
        console.log(oddNames.push(peopleArray[i].name))
    }
}
for(var i = 0; i < oddNames.length; i++){
    console.log(oddNames[i])
}

for(var i = 0; i < peopleArray.length; i++){
    if(i % 2 !== 0){
        console.log(evenOccupations.push(peopleArray[i].occupation))
    }
}

for(var i = 0; i < evenOccupations.length; i++){
    console.log(evenOccupations[i])
}

// 