import * as calc from "./calc.js"

const keys = document.getElementsByClassName("key")
const display = document.getElementById("display")

var number = []

var memoria = { num1: null, num2: null, result: null }

function click(e) {
    if (
        e.target.id == "D" ||
        e.target.id == "M" ||
        e.target.id == "S" ||
        e.target.id == "R" ||
        e.target.id == "A"
    ) {
        if (e.target.id == "A") {
            console.log("adição")
        }
        if (e.target.id == "M") {
            console.log("multiplicação")
        }
        if (e.target.id == "S") {
            console.log("subtração")
        }
        if (e.target.id == "D") {
            console.log("divisão")
        }
        if (e.target.id == "R") {
            console.log("resultado")
        }
        number = []
    } else {
        number.push(e.target.id)
        changeDisplay(number.join(''))
    }
}
function changeDisplay(num) {
    if (number.length > 10) {
        display.innerText = "Erro: max de 10 digitos"
    } else {
        display.innerText = num
    }
}

for (let i = 0; i < keys.length; i++) {
    var element = document.getElementById(keys[i].id)
    element.addEventListener('click', click)
}
function teste(e) {
    console.log(e.target.value)
}
