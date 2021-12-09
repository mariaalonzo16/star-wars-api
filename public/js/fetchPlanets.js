const planets = document.getElementById("planets");
const planets_btn = document.getElementById("planets_btn");

planets_btn.addEventListener("click", getPlanets);

function getPlanets () {
    fetch("https://swapi.dev/api/planets")
    .then(res => res.json())
    .then(data => {
        
        console.log(data.results)
        
        let count = 0;

        let planets_list = "";
        for (let i=0; i < data.results.length; i++) {
            
            
            count++

            planets_list += 
                `<div class="space">
                    <span class="bold" >Name: </span>
                    <a href="https://swapi.dev/api/planets/ ${count}" target="_blank">
                        ${data.results[i].name}
                    </a>
                    <p>
                        <span class="bold"> Climate: </span> ${data.results[i].climate}
                    </p>
                    <p>
                        <span class="bold"> Gravity: </span> ${data.results[i].gravity}
                    </p>
                    <p>
                        <span class="bold"> Population: </span> ${data.results[i].population}
                    </p>
                    <p>
                        <span class="bold"> Terrain: </span> ${data.results[i].terrain}
                    </p>
                </div>`;

            planets.innerHTML = planets_list;

        }

    })
    .catch((err) => {
        console.log("Request for Planets Rejected ---", err);
    })
}