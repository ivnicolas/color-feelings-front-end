//Listen for when the DOM is loaded 
let colorForm = true;

let test = undefined 
const url = "http://127.0.0.1:3000/colors"


document.addEventListener("DOMContentLoaded",function(){ 
    //WHAT NEEDS TO HAPPEN WHEN THE DOM LOADS
    // load in the color stories that already exist 
    //builds form
    API.showForm()
    //populates the dropdown list for form
    // API.populateDropdown()
    //fetches all the feelings and turns them into buttons 
    Feeling.allFeelings()
    // fetches all the colors from the backend and displays them on the pages
    API.addAllColors()
    //adds an event listener on the submit button for the form and does POST fecth (should i put this inside API.showForm?)
    API.addNewColors()
    API.resetButton()
    Feeling.feelingList()


    // Feeling.feelingList()

    
    // Feeling.feelingList()
    
    
  


})