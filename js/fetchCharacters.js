const characters = document.getElementById("characters");
const char_btn = document.getElementById("char_btn");

char_btn.addEventListener("click", getCharacters);
char_btn.addEventListener("click", getCharacters);

function getCharacters () {
    fetch("https://swapi.dev/api/people")
    .then(res => res.json())
    .then(data => {
        
        console.log(data.results)
        
        let count = 0;

        let characters_list = "";
        for (let i=0; i < data.results.length; i++) {
            
            count++

            characters_list += 
            
                `<div class="space">
                <span class="bold" >Name: </span>
                <a href="https://swapi.dev/api/people/ ${count}" target="_blank">
                    ${data.results[i].name}
                </a>
                <p>
                    <span class="bold"> Height: </span> ${data.results[i].height}
                </p>
                <p>
                    <span class="bold"> Mass: </span> ${data.results[i].mass}
                </p>
                <p>
                    <span class="bold"> Hair Color: </span> ${data.results[i].hair_color}
                </p>
                <p>
                    <span class="bold"> Skin Color: </span> ${data.results[i].skin_color}
                </p>
                <p>
                    <span class="bold"> Eye Color: </span> ${data.results[i].eye_color}
                </p>
                <p>
                    <span class="bold"> Birth Year: </span> ${data.results[i].birth_year}
                </p>
                <p>
                    <span class="bold"> Gender: </span> ${data.results[i].gender}
                </p>
            </div>`;

            characters.innerHTML = characters_list;

        }

    })
    .catch((err) => {
        console.log("Request for Characters Rejected ---", err);
    })
}