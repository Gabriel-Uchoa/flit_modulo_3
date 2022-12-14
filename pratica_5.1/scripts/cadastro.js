const inputs = document.getElementsByClassName("styleInput")
const submit = document.getElementById("submit")

const movie = new Object();

function handleChange(e) {
    movie[e.target.id] = e.target.value
}

function handleSubmit(e) {
    e.preventDefault()
    fetch("https://apigenerator.dronahq.com/api/5tS3QJn-/movies", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
    }).then(() => {
        alert("Filme cadastrado com sucesso!")
    });
}

for (let i = 0; i < inputs.length; i++) {
    const element = document.getElementById(inputs[i].id)
    element.addEventListener('change', handleChange)
}

submit.addEventListener('click', handleSubmit)