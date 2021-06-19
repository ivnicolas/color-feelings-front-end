//Listen for when the DOM is loaded 
let colorForm = false;

let test = undefined 
const url = "http://127.0.0.1:3000/colors"


document.addEventListener("DOMContentLoaded",function(){
    //what is the first thing that needs to happen 
    // load in the color stories that already exist 
    API.addColor()



    //**FORM TOGGLE
    // create toggle to display/hide form 
    const formContainer = document.querySelector(".container");
    const createColorBtn = document.querySelector("#new-color");

    createColorBtn.addEventListener("click", () => {

      //toggle
      colorForm = !colorForm;

      // Initially colorForm === false
      if (colorForm) {
        formContainer.style.display = "block";
      } else {
        formContainer.style.display = "none";
      }

    });

// END FORM 


    // POSTING A NEW COLOR STORY 

    const newColor = document.querySelector(".add-color")

    newColor.addEventListener("submit", event =>{ event.preventDefault();
    
        const feeling = event.target.feeiling.value 
        const hex_code = event.target.hex_code.value
        const name = event.target.name.value 
      

         // Can/Should I refactor this to the API)  
        fetch(url,{
            method: "POST",
            headers: { "Content-Type": "application/json"}, //syntax
            body: JSON.stringify({ 
                "feeling": feeling,
                "hex_code": hex_code, 
                "name": name,
                "likes": 0
            })
        })
        .then(response => response.json())
        .then(newColor => {
            let color = new Color(
                newColor.id, 
                newColor.feeling_id, 
                newColor.name, 
                newColor.hex_code, 
                newColor.likes , 
            )
            
        })
        event.target.reset()
    })

    //END OF NEW POSTING


})