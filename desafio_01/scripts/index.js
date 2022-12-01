const img_carousel = document.getElementById('img_carousel')
const arrow_right = document.getElementById('arrowRight')
const arrow_left = document.getElementById('arrowLeft')
const describes = document.querySelectorAll('span')
let contador = 0

function changeDataCards() {
    fetch('./carros.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            verifyContador(data.length)
            for (let i = 0; i < describes.length; i++) {
                let element = document.getElementById(describes[i].id)
                element.textContent = data[contador][describes[i].id]
                
            }
            img_carousel.src = data[contador]["imagem"]
        });
}
function nextCard() {
    changeDataCards()
    contador = contador + 1
}
function previosCard() {
    changeDataCards()
    contador = contador - 1
}
function verifyContador(numMax) {
    if (contador < 0) {
        contador = (numMax - 1)
    }
    if (contador > (numMax - 1)) {
        contador = 0
    }
}
if (contador === 0) {
    changeDataCards()
}
arrow_right.addEventListener('click', nextCard)
arrow_left.addEventListener('click', previosCard)
