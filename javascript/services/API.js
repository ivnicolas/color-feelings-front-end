class API {

   

    //need a create fetch and an update fetch and possibly a delete fetch 
     //static fucntion that is a fetch request to the backend index to load color stories 

     static addColor(){

        const url = "http://127.0.0.1:3000/colors"

        fetch(url)
        .then(resp => resp.json()) //this help to make out responce readable 
        .then(colors => {
      
                colors.forEach( color => {
                const{id, feeling_id, name, hex_code, likes} = color
                new Color (id, feeling_id, name, hex_code, likes) 
                    }
                )
            }
        )
    }

    static createColor(){

    }
}
 