class Color{

    constructor({id,name, hex_code, likes,feeling_id}){
        this.id = id 
        this.name = name
        this.hex_code = hex_code
        this.likes = likes 
        this.feeling_id = feeling_id
        
        // render to page 
        // this.renderColor()
       
       
    }
    testThis(){
        return "hello"
    }
    //render method that creates div, append it to page, 
    renderColor(){
        const colorHolder = document.getElementById("all-colors")
        const colorContainer = document.createElement("div")


        //explain this tidbit right here pls 
        colorContainer.dataset.id = this.id 
        colorContainer.id = this.id 
        colorContainer.classList.add= "color-card"
        colorContainer.innerHTML += this.showHTML()
        colorHolder.appendChild(colorContainer)

        colorContainer.addEventListener("click", this.likeMe)
        // debugger


      
      
    }

    showHTML(){
        return `

        <div class="card" style="background-color: ${this.hex_code}">
        <i class="large material-icons heart-icon">favorite</i><p class= "like-count">${this.likes}</p>
            <di class="card-footer">
                <div>
                    <h2 class="card-title" >${this.name.toUpperCase()}</h2>
                </div>
             </di>
        </div>
         <br><br>      
                
                
                `
    }

    // WHAT I WANTED TO DO 
    likeMe(e){
        const url = "http://127.0.0.1:3000/colors"
        let likes = parseInt(e.target.parentElement.querySelector(".like-count").innerText)
        const postID = e.target.parentElement.parentElement.id


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

   
