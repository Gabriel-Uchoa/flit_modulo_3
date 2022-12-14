document.body.onload = loadDataApi;
var teste = "teste de titulo"

function loadDataApi() {
    fetch('https://apigenerator.dronahq.com/api/5tS3QJn-/movies')
        .then(function (response) {
            let body = response.json()
            return body
        })
        .then(function (data) {
            addElements(data)
        })
}

function addElements(data) {

    for (let i = 0; i < data.length; i++) {
        let parentElement = document.getElementById('grid_cards')
        let theFirstChild = parentElement.firstChild
        let newElement = document.createElement("div")
        newElement.className = 'card';
        newElement.appendChild(document.createElement('p')).innerText = `Título: ${data[i].title}`
        newElement.appendChild(document.createElement('p')).innerText = `Gênero: ${data[i].genre}`
        newElement.appendChild(document.createElement('p')).innerText = `Nota: ${data[i].vote_average}`
        newElement.appendChild(document.createElement('p')).innerText = `Sinopse: ${data[i].overview}`
        parentElement.insertBefore(newElement, theFirstChild)
    }
}