const baseUrl = ("https://rickandmortyapi.com/api/character/")




//get data from api
const fetchData = async () => {
    return await fetch(baseUrl)
        .then((response) => response.json())
        .then((json) => json)
        .catch(() => {
            window.location = "/javascript-1-ca-master/error.html"
        })
}

//loop through results
const iterateCharacters = (json) => {
    const results = json.results


    //render html
    const container = document.querySelector(".results")
    let markup = "";

    //set unknown type as default
    let type = " Unknown"




    results.forEach((result) => {
        const {
            image,
            name,
            episode,
            type,
            id
        } = result
        markup += `
        <div class="col-sm-6 col-md-4 col-lg-3">                
            <div class="card">    
                <img class="image" src="${image}" alt="${name}">
                <div class="details">
                    <h4 class="name">${name}</h4>
                    <p>Type: ${ type ? type : " Unknown"}</p>    
                    <p>Episode count: ${episode.length}</p>                                  
                    <a class="btn btn-primary" href="details.html?id=${id}">Details</a>
                </div>
            </div>
        </div>
        `
    })

    container.innerHTML = markup;
}

fetchData().then((json) => iterateCharacters(json));