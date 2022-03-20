var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]

var alphabet = "abcdefghijklmnopqrstuvwxyz"

var newAlpha = alphabet.split("")

function forception(people, newAlpha){
    for(var i = 0; i < people.length; i++){
    for(var j = 0; j < newAlpha[j].length; j++){
        var arr = people[i] + ": " + newAlpha
        return arr
    }
}
}
forception(people, newAlpha)
