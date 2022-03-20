var hello = "hello"

var ello = "Hello World"

//Write a function that takes a string as a parameter and 
// returns the same string in all capital letters followed by all lowercase letters.
function capitalizeAndLowerCase(hello){
    var helloA = hello.toUpperCase()
    
    var helloB = helloA.toLowerCase()
  
    var helloC = helloA.concat(helloB)
    return helloC, helloB, helloA
}
capitalizeAndLowerCase(hello)

//Write a function that takes a string as a parameter
//  and returns a number that is half the string's length, rounded down.
function findMiddleIndex(hello){
    var index = hello.indexOf("o")
    console.log(index)
    
}

//Write a function that uses slice() and the other 
// functions you've written to return the first half of the given string.
function findMiddleIndex(hello){
        var cut = hello.slice(0, Math.floor(hello.length / 2))
        console.log(cut.length)
        return cut
        
}
findMiddleIndex(hello)

//Write a function that takes a string as a parameter and returns that 
// string where the first half is capitalized, and the second half is lowercase.
function findMiddleIndex(ello){
    var anotherCut = ello.slice(0, Math.floor(ello.length / 2))
    console.log(anotherCut.length)
    return anotherCut
}
findMiddleIndex(ello)
function returnFirstHalf(hello, ello){
    var cut = hello.slice(0, 2)
    console.log(cut)

    var cutA = ello.slice(0, 6)
    console.log(cutA)
}
returnFirstHalf(hello, ello)

function capitalizeAndLowercase(hello){
        var oneMore = hello.slice(0, Math.floor(hello.length / 2))
        var twoMore = hello.slice(2, 5)
        var capital = oneMore.toUpperCase()
        var finish = capital.concat(twoMore)
        console.log(finish)
}
capitalizeAndLowercase(hello)

function capitalizeAndLowerCase(ello){
    var tri = ello.slice(0, Math.floor(ello.length / 2))
    var quad = ello.slice(6, 11)
    var capo = tri.toUpperCase()
    var finishA = capo.concat(quad)
    console.log(finishA)
}
capitalizeAndLowerCase(ello)

var friends = "hey friends! practice practice practice!"
var animal = "tiger"
function donCap(friends){
    var brokeUp = friends.split("hey friends!", "practice", "practice", "practice!")
    var newArr = brokeUp.push()
    console.log(newArr)
}
donCap(friends)
