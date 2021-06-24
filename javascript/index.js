//Listen for when the DOM is loaded 
let colorForm = true;

let test = undefined 

document.addEventListener("DOMContentLoaded",function(){ 
    //WHAT NEEDS TO HAPPEN WHEN THE DOM LOADS
    // load in the color stories that already exist 
    //builds form
    API.showForm()
    //fetches all the feelings and turns them into buttons 
    Feeling.allFeelings()
    // fetches all the colors from the backend and displays them on the pages
    API.addAllColors()
    //adds an event listener on the submit button for the form and does POST fecth (should i put this inside API.showForm?)
    API.addNewColors()
    //Load the DOM with all color cards 
    API.resetButton()
    

})