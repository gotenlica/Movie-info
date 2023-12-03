const key = "6cf62eaa"


const movieNameRef = document.getElementById("movie-name");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");



//function to fetch data from the api.


async function getMovie(){
    const movieName = movieNameRef.value;
    const url = `https://www.omdbapi.com/?t=${movieName}?&apikey=${key}`;

    if(movieName.length <= 0){
        result.innerHTML = 
        document.querySelector(".msg").style.display = "block";
        document.getElementById("result").style.display = "none";
    }else{
        fetch(url).then((resp) => resp.json()).then((data) => {
            if(data.Response == "True"){
                result.innerHTML = 

               
                

                `
                   <div class="info>
               <div class="poster">
               <img src=${data.Poster}
                </div>


             

                <div class"details">
                <h2>${data.Title}</h2>
                 </div>
               
                <div class="genre">
                ${data.Genre}
                </div>
               
               

                <div class="plot">

                <h3>Plot:<h3>
                <p>${data.Plot}</p>
                </div>
               
                </div>
                `
                
            }
              document.querySelector(".msg").style.display = "none";
             document.getElementById("result").style.display = "block";
        })
    }

};

searchBtn.addEventListener("click", getMovie)




