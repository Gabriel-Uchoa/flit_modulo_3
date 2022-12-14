document.body.onload = addElement;
var teste = "teste de titulo"
function addElement() {
    let parentElement = document.getElementById('grid_cards')
    let theFirstChild = parentElement.firstChild

    // Create a new element
    let newElement = document.createElement("div")
    newElement.className = 'card';
    newElement.appendChild(document.createElement('p')).innerText = `Título: ${teste}`
    newElement.appendChild(document.createElement('p')).innerText = "Gênero: "
    newElement.appendChild(document.createElement('p')).innerText = "Nota: "
    newElement.appendChild(document.createElement('p')).innerText = "Sinopse: "

    // Insert the new element before the first child
    parentElement.insertBefore(newElement, theFirstChild)
}