let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");

ourForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    createList(ourField.value);
})

function createList(x){
    let ourPut =`<li> ${x} <button onclick="deleteItem(this)"> Delete </button></li>`
    ourList.insertAdjacentHTML("beforeend", ourPut);
    ourField.value ="";
    ourField.focus()
 
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
  }