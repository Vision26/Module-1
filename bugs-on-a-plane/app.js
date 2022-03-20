var form = document["form"]

form.addEventListener("submit", event => {
    event.preventDefault()
    var first = form.firstName.value;
    var last = form.lastName.value;
    var num = form.age.value;
    var gen = form.gender.value;
    var loca = form.travellocation.value;
    var box = [];
 for(let i = 0; i < form.diet.length; i++){
     if(form.diet[i].checked){
        box.push(form.diet[i].value)
     }
 }
    
console.log(box)
    alert(`First Name: " + ${first} + "\nLast Name: " + ${last} + "\nAge: " + ${num} + "\nGender: " + ${gen} + "\nTravel Location: " + ${loca} + "\nDiet: " + ${box} + "\nAwesome, now if you die, it won't be an accident..`)
       
})