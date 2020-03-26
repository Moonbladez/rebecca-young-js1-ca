const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "/javascript-1-ca-master/";
}

const baseUrl = "https://rickandmortyapi.com/api/character/"
const characterURL = `${baseUrl}${id}`

const fetchData = async () => {
    return await fetch(characterURL)
        .then((response) => response.json())
        .then((json) => characterInfo(json))
        .catch(() => {
            window.location = "error.html"
        })

}


//render information
let markup = "";
const characterInfo = (details) => {
    const container = document.querySelector(".detail-container")

    //loader information
    const loader = document.querySelector(".loader")
    //hide loader
    loader.style.display = "none"
    const {
        name,
        status,
        species,
        origin,
        location,
        image
    } = details
    console.dir(details)
    markup += `
    <img class="details-image" src="${image}" alt="${name}" />
    <div class="detail-details">
        <h1>${name}</h1>
        <p>Status: <span class="value" id="status">${status}</span></p>
        <p>Species: <span class="value" id="species">${species}</span></p>
        <p>Origin: <span class="value" id="origin">${origin.name}</span></p>
        <p>Location: <span class="value" id="location">${location.name}</span></p>                   
    </div>
    `
    container.innerHTML = markup

    //setting page title to character
    document.title = details.name + " | " + document.title;
}



fetchData().then((json) => characterInfo(json));