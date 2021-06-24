class Feeling{

    static allFeelings(){
        fetch("http://localhost:3000/feelings")
        .then(res=> res.json())
        .then(totalFeelings => {
            totalFeelings.map(function(feeling){
            API.addFilterButtons(feeling);
            API.populateDropdown(feeling.name)
                                        })
           
                                })

                              


    }
    

}
