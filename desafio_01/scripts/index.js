const img_carousel = document.getElementById('img_carousel')
const arrow_right = document.getElementById('arrowRight')
const describes = document.querySelectorAll('span')
let contador = 0
fetch("./carros.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => nextCard(jsondata, contador));
function addContador() {
    contador = contador + 1;
    console.log(contador)
}
function subContador() {
    contador = contador - 1;
    console.log(contador)
}
function verificarContador(num) {
    if (num > 4) {
        contador = 0;
    }
    if (num === -1) {
        contador = 5;
    }
}
function nextCard(data, position) {

    for (let i = 0; i < describes.length; i++) {
        let element = document.getElementById(describes[i].id)
        element.textContent = data[position][describes[i].id]
    }
    img_carousel.src = data[position]["imagem"]
}
function anterCard(data, position) {
    for (let i = 0; i < describes.length; i++) {
        let element = document.getElementById(describes[i].id)
        element.textContent = data[position][describes[i].id]
    }
    img_carousel.src = data[position]["imagem"]

}


function prox() {
    verificarContador(contador)
    addContador()
    fetch("./carros.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => nextCard(jsondata, contador));
}
function ante() {
    verificarContador(contador)
    subContador()
    fetch("./carros.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => anterCard(jsondata, contador));
}
