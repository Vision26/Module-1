const colors = ["red", "blue", "green"]

const box = document.getElementById("add")

const select = document.createElement("select")
box.appendChild(select)

function dropDown(){
for(let i = 0; i < colors.length; i++){
    select.innerHTML += "<option>" + colors[i] + "</option>"
    
}
}
dropDown()



