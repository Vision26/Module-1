var spanA = document.createElement("span")
spanA.textContent = "wrote this Javascript"
document.body.prepend(spanA)
spanA.classList = "span1"
spanA.style.marginLeft = ".1%"

var span = document.createElement("span")
span.textContent = "Jose "
document.body.prepend(span)
span.style.color = "gold"
span.classList = "span2"
span.style.marginLeft = "41%"

var header = document.getElementById("header");
document.body.prepend(header)
header.textContent = "Javascript Made This!"
header.style.fontSize = "30px"
header.style.fontWeight = "bold"
header.style.textAlign = "center"

var heyA = document.getElementById("message-leftA")
var heyB = document.getElementById("message-leftB")
var heyC = document.getElementById("message-rightC")
var heyD = document.getElementById("message-rightD")


document.body.addEventListener("mouseover", function(){
    heyA.textContent = "I like cookies"
    
    heyB.textContent = "We all love cookies!"
    

    heyC.textContent = "Brownies are better"
    
    heyD.textContent = "I'll shove brownies down your throat!"
})

var goodbyeButton = document.getElementById("clear-button")

goodbyeButton.addEventListener("click", function(){
    heyA.textContent = ""

    heyB.textContent = ""

    heyC.textContent = ""

  heyD.textContent = ""
})

var themeOps = document.getElementById("theme-drop-down")


themeOps.addEventListener("change", function(){
heyA.style.backgroundColor = "red"
heyB.style.backgroundColor = "red"
heyC.style.backgroundColor = "black"
heyD.style.backgroundColor = "black"
})

var helloOps = document.getElementById("option1")

helloOps.addEventListener("change", function(){
heyA.style.backgroundColor = "green"
heyB.style.backgroundColor = "green"
heyC.style.backgroundColor = "blue"
heyD.style.backgroundColor = "blue"
})

const form = document.message
var anotherOne = document.getElementById("all-messages")

form.addEventListener("submit", function(e){
    e.preventDefault()
    var red = document.getElementById("message-leftE")
    var newInput = form.title.value
    red.textContent = newInput
})

const wutang = document.words
wutang.addEventListener("submit", function(e){
    e.preventDefault()
    var grey = document.getElementById("message-rightF")
    var moreTO = wutang.titleA.value
    grey.textContent = moreTO
})



