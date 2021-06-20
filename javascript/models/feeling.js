class Feeling{

    // static feelingList(){

    //     const url = "http://127.0.0.1:3000/feelings"
    //     const feelingNames = []
    //     fetch(url)
    //     .then(resp => resp.json()) //this help to make out responce readable 
    //     // .then(feelings => console.log(typeof feelings))
    //     .then(feelings => { feelings.forEach( feeling => {
    //         feelingNames.push(feeling['name'])}
            
            
    //         ) })
       
    //     console.log(feelingNames)
    //     return feelingNames

    // }

    static allFeelings(){
        fetch("http://localhost:3000/feelings")
        .then(res=> res.json())
        .then(totalFeelings => {
            totalFeelings.forEach(function(feeling){
            API.addFilterButtons(feeling);
                                        })
                                })
    }
    

}
