class Color{

    constructor({id,name, hex_code, likes,feeling_id}){
        this.id = id 
        this.name = name
        this.hex_code = hex_code
        this.likes = likes 
        this.feeling_id = feeling_id
        
       
       
    }
   
    renderColor(){
        const colorHolder = document.getElementById("all-colors")
        const colorContainer = document.createElement("div")

        //explain this tidbit right here pls 
        //do i need both id's?
        colorContainer.dataset.id = this.id 
        colorContainer.dataset.feeling_id = this.feeling_id
        colorContainer.id = this.id 
        colorContainer.classList.add= "color-card"
        colorContainer.innerHTML += this.showHTML()
        colorHolder.appendChild(colorContainer)

        colorContainer.addEventListener("click", this.likeMe)  
      
    }

    showHTML(){
        return `
        <div class="card" style="background-color: ${this.hex_code}">
        
            <di class="card-footer">
                <div id="bottom-card">
                    <h2 class="card-title" >${this.name.toUpperCase()}</h2><br>
                 
                    <i class="large material-icons heart-icon">favorite</i><span id="${this.id}" class= "like-count"> ${this.likes}</span>   
                   
                    </div>
             </di>
        </div>
       
         <br><br>            
                `
    }

    likeMe(e){
        const url = "http://127.0.0.1:3000/colors"
        let likes = parseInt(e.target.nextElementSibling.innerText)

        const postID = e.target.nextElementSibling.id


        if(e.target.className == "large material-icons heart-icon"){
           
            let new_likes = likes +1
             e.target.parentElement.querySelector(".like-count").innerText = new_likes

             const postObj = {
                likes: new_likes
              }
    
            const link = `${url}/${postID}`
            
           
            fetch (link, {
                method: "PATCH",
                headers: {
                  "Accept": 'application/json',
                  "Content-Type": 'application/json'
                },
                body: JSON.stringify ({
                  likes: new_likes
                })
              })
        }

      
    }
}

   
