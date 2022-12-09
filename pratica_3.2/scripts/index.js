
const automatico = document.getElementById("automatico")
const buttonSubmit = document.getElementById("buttonSubmit")
const inputs = document.getElementsByClassName('inputsText')

var formObj = { automatico: false }

function changeInput(e) {
    console.log(e.target.value)
    formObj[`${e.target.id}`] = e.target.value
}

function submitForms(e) {
    e.preventDefault()
    localStorage.setItem('cars', JSON.stringify(formObj));
}

function load(element) {
    var cars = JSON.parse(localStorage.getItem('cars'));
    if (cars) {
        console.log(cars)
        for (let i = 0; i < element.length; i++) {
            const e = document.getElementById(inputs[i].id);
            if (e.id == "automatico") {
                if (cars[`${automatico.id}`] == "true") {
                    automatico.checked = true;
                }
            } else {
                e.value = cars[`${e.id}`]
            }
        }
    }
}

for (let i = 0; i < inputs.length; i++) {
    const element = document.getElementById(inputs[i].id);
    element.addEventListener('change', changeInput)
}

load(inputs)
buttonSubmit.addEventListener('click', submitForms)
