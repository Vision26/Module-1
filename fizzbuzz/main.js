for(let i = 1; i <= 100; i++){
    console.log(i)
    if(i % Math.floor(3) === 0){
        console.log("Fizz")
    } else if(i % Math.floor(5) === 0){
        console.log("Buzz")
    }
    if(i % Math.floor(3 * 5) === 0){
        console.log("FizzBuzz")
    }
}