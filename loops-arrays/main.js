
//Loop through the following array and count how many "computers" there are. Log the final count:
var office = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var count = 0
for (var i = 0; i < office.length; i++){
    if(office[i] === "computer"){
        count++
    }
    console.log(count)
}

//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for(var i = 0; i < people.length; i++ ){
    console.log(people[i])
    if(people[i].age > 18){
        console.log("old enough")
    } else console.log("not old enough")
}