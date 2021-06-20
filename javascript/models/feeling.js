class Feeling{

    static feelingNames = []


     static feelingList(){

        const url = "http://127.0.0.1:3000/feelings"
        // const feelingNames = []
        fetch(url)
        .then(resp => resp.json()) //this help to make out responce readable 
        // .then(feelings => console.log(typeof feelings))
        .then(feelings => { feelings.forEach( feeling => {
            // debugger 
            this.feelingNames.push(feeling.name)
            return this.feelingNames
        }) 
       
    })
       
            // debugger 
        // console.log(feelingNames)
        // return feelingNames

    }

    static allFeelings(){
        fetch("http://localhost:3000/feelings")
        .then(res=> res.json())
        .then(totalFeelings => {
            debugger
            totalFeelings.forEach(function(feeling){
            API.addFilterButtons(feeling);
            API.populateDropdown(feeling.name)
                                        })
                                })
    }
    

}
