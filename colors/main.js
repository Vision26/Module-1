console.log(form.select.value)
const form = document.form
const red = form.select.value
const blue = form.select.value
const green = form.select.value

form.addEventListener("change", function(){
    red.style.backgroundColor = "red"
})