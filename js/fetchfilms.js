const films = document.getElementById("films");
const films_btn = document.getElementById("films_btn");

films_btn.addEventListener("click", getFilms);

function getFilms () {
    fetch("https://swapi.dev/api/films")
    .then(res => res.json())
    .then(data => {
        
        console.log(data.results)
        
        let count = 0;

        let films_list = "";
        for (let i=0; i < data.results.length; i++) {
            
            
            count++

            films_list += 
                `<div class="space">
                    <span class="bold" >Title: </span>
                    <a href="https://swapi.dev/api/films/ ${count}" target="_blank">
                        ${data.results[i].title}
                    </a>
                    <p>
                        <span class="bold"> Release Date: </span> ${data.results[i].release_date}
                    </p>
                    <p>
                        <span class="bold"> Episode #: </span> ${data.results[i].episode_id}
                    </p>
                    <p>
                        <span class="bold"> Producer(s): </span> ${data.results[i].producer}
                    </p>
                </div>`;

            films.innerHTML = films_list;

        }

    })
    .catch((err) => {
        console.log("Request for Films Rejected ---", err);
    })
}