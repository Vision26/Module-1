const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()

    const theList = document.getElementById("list")
    const grabItems = form.title.value
    const addItems = document.createElement("li")
    theList.appendChild(addItems)

    //editButton.style.margin = "10px"

    const editButton = document.createElement("button")
    editButton.textContent = "edit"
    addItems.append(editButton)
 
    const div = document.createElement('div')
    div.textContent=grabItems
    addItems.append(div)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    addItems.append(deleteButton)   

    deleteButton.addEventListener("click", function(){
      addItems.textContent = ""
    })

   
        editButton.addEventListener("click", function(event){
            event.preventDefault()
            editButton.textContent = "Save"
            const anotherInput = document.createElement("input")
            anotherInput.value = div.textContent
            div.append(anotherInput)
            
            editButton.addEventListener("click", function(){
                anotherInput.textContent = ""
            })

            anotherInput.addEventListener("change", function(){
                editButton.textContent = "edit"
                div.textContent = anotherInput.value
                anotherInput.remove()
            })
        })     
})