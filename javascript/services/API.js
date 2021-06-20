class API {

     static showForm(){

        const formContainer = document.querySelector("#form-container");
        const createColorBtn = document.querySelector("#new-color");
    
        function show() {formContainer.style.display = "block";}
    
        function hide() {formContainer.style.display = "none";}
    
        function toggle() {
            if (formContainer.style.display === "none") {
                show();
            } else {
                hide();
            }
        }
    
        hide();
    
        createColorBtn.addEventListener("click", toggle, false);

     }

     static addAllColors(){

        const url = "http://127.0.0.1:3000/colors"

        fetch(url)
        .then(resp => resp.json()) //this help to make out responce readable 
        .then(colors => {
                // console.log(colors.reverse())
                // console.log(colors.reverse())
                colors.reverse().forEach( color => {
                   const newColor = new Color(color)
               
                    newColor.renderColor()}
                )
            }
        )
    }

    static addNewColors(){
        const newColor = document.querySelector(".add-color")

         newColor.addEventListener("submit", event =>{ event.preventDefault();
      
        const feeling = event.target.feeling.value
        const hex_code = event.target.hex_code.value
        const name = event.target.name.value 
      
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
  
                const colorHolder = document.getElementById("all-colors")
            
                colorHolder.innerHTML="<h4> You Just Created the Color...</h4> "
                let color = new Color(newColor)
                color.renderColor()
            
            })

            event.target.reset()
        })

    }

    static populateDropdown(){

        console.log("testing")
        const select = document.getElementById("feeling"); 
        const options =  ["Joyful","Angry","Nostalgic","Hopeful","Sad","Blissful","Frustrated","Confused"]
      
        for(let i=0 ; i< options.length; i++){

                    let feeling = options[i]
                    let opt = document.createElement("option")
              
                    opt.text = feeling 
                    opt.value = feeling 
                    select.add(opt)
                }
    }

    // static populate_dropdown(){
    //     console.log("we in")
    //     const select = document.getElementById("selectFeeling"); 
    //     debugger
    //     const options = Feeling.feelings_list();
    //      debugger 
    //     for(let i=0 ; i< options.length; i++){
    //         let feeling = options[i]

    //         let opt = document.createElement("option")
    //         // debugger
    //         opt.text = feeling 
    //         opt.value = feeling 

    //         select.add(opt)
    //     }
    
    // }

    static addFilterButtons(feeling){

        let select = document.getElementById("filter-buttons")
        let button = document.createElement("button")

        button.dataset.id = feeling.id 
        button.id = feeling.id
        button.innerHTML= `${feeling.name}`
        select.append(button)

        let url = `http://localhost:3000/feelings/${button.dataset.id}/colors`
        
        console.log(feeling.name)
        
        button.addEventListener("click", function(e){
            API.getColorByFeeling(this.dataset.id,url)
            })
    }

    static getColorByFeeling(btnID,btnURL){
        
        console.log(btnID)
        console.log(btnURL)

        const colorHolder = document.getElementById("all-colors")
        
        colorHolder.innerHTML=" "

        fetch(btnURL)
        .then(resp => resp.json()) 
        .then(colors => {
                colors.forEach( color => {
                   const newColor = new Color(color)
                    newColor.renderColor()}
                )
            }
        )







   
        // //iterate through all of the cards on the page 
        // const allCards = Array.from(document.querySelectorAll(".card"))
        // // if their parent element has a feeling id that matches the the id of the buttonn that was clicked, set display to block
        // //else have display be none 
        // allCards.map(card => {
        //     if(card.parentElement.dataset.feeling_id == btnID){
        //         card.style.display = "block"
        //     }
        //     else{
        //         card.style.display = "none"
        //     }
        // })   
    }

    static resetButton(){
        let select = document.getElementById("filter-buttons")
        let resetButton = document.createElement("button")
    
        resetButton.innerHTML="All Colors"
        select.append(resetButton)
    
        resetButton.addEventListener("click", function(){
        document.getElementById("all-colors").innerHTML = " "
        
            API.addAllColors()})    

    }

}
 




