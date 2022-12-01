const marca = document.getElementById("marca").id
const modelo = document.getElementById("modelo").id
const ano = document.getElementById("ano").id
const placa = document.getElementById("placa").id
const cor = document.getElementById("cor").id
const imagem = document.getElementById("imagem").id
const submit = document.getElementById("submit")
const inputs = document.getElementsByClassName("inputs")

const objToSend = { marca, modelo, ano, placa, cor, imagem };

function changeValue(e) {
    var id = e.target.id
    var value = e.target.value
    objToSend[id] = value
}
function submitForms(e) {
    e.preventDefault()

    fetch("https://apigenerator.dronahq.com/api/u0ZzwNqP/carros", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(objToSend)
    }).then(res => {
        console.log("Request complete! response:", res);
    });
}

for (let i = 0; i < inputs.length; i++) {
    var element = document.getElementById(inputs[i].id)
    element.addEventListener('change', changeValue)
}

submit.addEventListener('click', submitForms)