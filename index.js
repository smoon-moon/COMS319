function movies() {
    fetch("./data.json")
    .then(response => response.json())
    .then(data => load(data,1))
    .catch(error => console.log("Error: " + error));
}

function plushies() {
    fetch("./data.json")
    .then(response => response.json())
    .then(data => load(data,2))
    .catch(error => console.log("Error: " + error));
}

function load(data, mORp) {
    var CardMovie = document.getElementById("col");

    if (mORp==1) {

        for (let movie of data.movies) {
            let AddCardMovie = document.createElement("div");
            AddCardMovie.classList.add("col");
            AddCardMovie.innerHTML = `
                <div class="card shadow-sm";>
                    <img src=${movie.url} alt=${movie.title}/>
                    <div class="card-body">
                        <h3 class="card-body" style="color: #5a23c8; font-weight:bold;">${movie.title}</h3>
                        <p class="card-body">Made in: ${movie.year}</p>
                        <p class="card-body">Directed by: ${movie.director}</p>
                        <p class="card-body">Genre: ${movie.genre}</p>
                        <p class="card-body">${movie.description}</p>
                    </div>
                </div>
            `;
            CardMovie.appendChild(AddCardMovie);
        }
    }
    else if (mORp==2) {
        for (let plush of data.plushies) {
            let AddCardMovie = document.createElement("div");
            AddCardMovie.classList.add("col");
            AddCardMovie.innerHTML = `
                <div class="card shadow-sm">
                    <img src=${plush.url} alt=${plush.name}/>
                    <div class="card-body">
                        <h3 class="card-body" style="color: #c616c0; font-weight:bold;">${plush.name}</h3>
                        <p class="card-body">Size: ${plush.size}</p>
                        <p class="card-body">${plush.description}</p>
                    </div>
                </div>
            `;
            CardMovie.appendChild(AddCardMovie);
        }
    }
}