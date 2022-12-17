document.body.onload = loadElements();

async function loadDataGenreAPI() {
    let result = await fetch('https://apigenerator.dronahq.com/api/Dd1Qk1iN/genre')
    result = await result.json()
    return result
}

async function loadDataApi() {
    let result = await fetch('https://apigenerator.dronahq.com/api/5tS3QJn-/movies')
    result = await result.json()
    return result
}

async function addElements(data) {
    var listGenres = await loadDataGenreAPI()
    for (let i = 0; i < data.length; i++) {
        var genres = []
        data[i].genre.forEach(genre => listGenres.forEach(element => element.id == genre ? genres.push(element.name) : false))
        let parentElement = document.getElementById('grid_cards')
        let theFirstChild = parentElement.firstChild
        let newElement = document.createElement("div")
        newElement.className = 'card';
        newElement.appendChild(document.createElement('p')).innerText = `Título: ${data[i].title}`
        newElement.appendChild(document.createElement('p')).innerText = `Gênero: ${genres.join(', ')}`
        newElement.appendChild(document.createElement('p')).innerText = `Nota: ${data[i].vote_average}`
        newElement.appendChild(document.createElement('p')).innerText = `Sinopse: ${data[i].overview}`
        parentElement.insertBefore(newElement, theFirstChild)
    }
}

function loadElements() {
    loadDataApi().then((data) => addElements(data))
}
