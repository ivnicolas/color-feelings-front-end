class API {

   

    //need a create fetch and an update fetch and possibly a delete fetch 
     //static fucntion that is a fetch request to the backend index to load color stories 



     static showForm(){
        const formContainer = document.querySelector("#form-container");
        const createColorBtn = document.querySelector("#new-color");
    
      
        function show() {


            //TEST
            // const colorHolder = document.getElementById("form-container")
            // const form = document.createElement("div")
            
            
            // form.innerHTML = ""
            // form.innerHTML = '<p> test </p>'
            // colorHolder.appendChild(form)

            formContainer.style.visibility = "visible";
        }
    
        function hide() {
            formContainer.style.visibility = "hidden";
        }
    
        function toggle() {
            if (formContainer.style.visibility === "hidden") {
                show();
            } else {
                hide();
            }
        }
    
        hide();
    
        createColorBtn.addEventListener("click", toggle, false);


        //OLD TOGGLE CODE 

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
     }

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

    static populateDropdown(){
        console.log("testing")
        const select = document.getElementById("feeling"); 
        const options =  ["Joyful","Angry","Nostalgic","Hopeful","Sad","Blissful","Frustrated","Confused"]
        // const options = Feeling.feelingList();

        // debugger

        for(let i=0 ; i< options.length; i++){
                    let feeling = options[i]
        
                    let opt = document.createElement("option")
                    // debugger
                    opt.text = feeling 
                    opt.value = feeling 
        
                    select.add(opt)
                }

       
    }

    static filterButtons(){
        const allFeelings = document.querySelector("#filter-buttons")

        allFeelings.addEventListener("click", function(e){
            console.log(e.target.id)

        })
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

    static addFilterButtons(feelings){
        
        let select = document.getElementById("filter-buttons")
        let button = document.createElement("button")

        button.innerHTML= `${feelings.name}`
        select.append(button)
    }

    // static allFeelings(){
    //     fetch("http://localhost:3000/feelings")
    //     .then(res=> res.json())
    //     .then(totalFeelings => {
    //         totalFeelings.forEach(function(feeling){
    //         API.addFilterButtons(feeling);
    //                                     })
    //                             })
    // }
}
 




// const url = 'https://www.scorebat.com/video-api/v1/'
// const content = document.querySelector('.content')
// const filterBtns = document.querySelectorAll('.btn')

// const fetchData = async () => {
//   try {
//     const response = await fetch(url)
//     const data = await response.json();
    
//     // This will hold the results. Remember filter doesn't
//     // modify the original array.
//     let data_results = [];
    
//     if (response.status === 200) {
//       filterBtns.forEach((btn) => {
//         btn.addEventListener('click', (e) => {
//           // Make sure to uppercase since that is what is in names
//           let id = e.target.dataset.id.toUpperCase()
//           data_results = data.filter((league) => {
//             let res = league.competition
            
//             // We want to compare the name
//             if (res.name.includes(id)) {
//               return res
//             }
//           })
          
//           // For each click, feed the new results to output
//           output = filterResults(data_results);
//           content.innerHTML = output;
//         })
//       })
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

// fetchData()

// {
//   /* <h3>${result.videos[0].embed}</h3> */
// }

// // Take results, map them to our cards and return them.
// function filterResults(data_results) {
//   let output = data_results.map((result) => {
//         return `<article class="card">
//         <div class="info">
//         <h1 class="league-name"> ${result.competition.name}</h1>
//         <h2><i class="fas fa-spinner fa-pulse"></i> Match: ${result.title}</h2>
//         <div class="details">
//         <p>Date: ${result.date.substring(0, 10)}</p>
//         <p>Kickoff: ${result.date.substring(11, 16)}GMT</p>
//         </div>
//         </div>
//         <div class="video">
//         </div>
//         </article>
//         `
//       });
//   output = output.join(' ')
//   return output;
// }
