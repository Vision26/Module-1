var enter = document.getElementById("enter")
var red = 
enter.addEventListener("enter", dblclick)
function dblclick(){
    console.log("enter")
}
document.getElementById("enter").addEventListener("dblclick", function(){
    console.log("enter")
})
