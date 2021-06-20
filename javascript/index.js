//Listen for when the DOM is loaded 
let colorForm = true;

let test = undefined 
const url = "http://127.0.0.1:3000/colors"


document.addEventListener("DOMContentLoaded",function(){
    //what is the first thing that needs to happen 
    // load in the color stories that already exist 
    API.addAllColors()
    API.addNewColors()
    // Feeling.feelingList()

    // debugger
    API.populateDropdown()
    // Feeling.feelingList()
    Feeling.allFeelings()

//    API.filterButtons()

    API.showForm()
    //**FORM TOGGLE
    // create toggle to display/hide form 
    // let colorForm = false;
    // const formContainer = document.querySelector("#form-container");
    // const createColorBtn = document.querySelector("#new-color");

    // function show() {
    //     formContainer.style.visibility = "visible";
    // }

    // function hide() {
    //     formContainer.style.visibility = "hidden";
    // }

    // function toggle() {
    //     if (formContainer.style.visibility === "hidden") {
    //         show();
    //     } else {
    //         hide();
    //     }
    // }

    // hide();

    // createColorBtn.addEventListener("click", toggle, false);


    // createColorBtn.addEventListener("click", () => {

    //   //toggle
    //   colorForm = !colorForm;

    //   // Initially colorForm === false
    //   if (colorForm) {
    //     formContainer.style.display = "block";
    //   } else {
    //     formContainer.style.display = "none";
    //   }

    // });

// END FORM 


    // POSTING A NEW COLOR STORY 

    // const newColor = document.querySelector(".add-color")

    // newColor.addEventListener("submit", event =>{ event.preventDefault();
        
    //     // debugger
    //     const feeling = event.target.feeling.value
    //     const hex_code = event.target.hex_code.value
    //     const name = event.target.name.value 
      
        
    //      // Can/Should I refactor this to the API)  
    //     fetch(url,{
    //         method: "POST",
    //         headers: { "Content-Type": "application/json"}, //syntax
    //         body: JSON.stringify({ 
    //             "feeling": feeling,
    //             "hex_code": hex_code, 
    //             "name": name,
    //             "likes": 0
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(newColor => {
            
    //         debugger 
    //         const colorHolder = document.getElementById("all-colors")
        
    //         colorHolder.innerHTML="<h4> You Just Created the Color...</h4> "
    //         let color = new Color(newColor)
    //         color.renderColor()
           
           
            
    //     })
    //     event.target.reset()
    // })

    //END OF NEW POSTING


    //FILTER BUTTONS

    //END OF FILTER BUTTONS 


})