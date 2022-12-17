const inputs = document.getElementsByClassName("styleInput")
const submit = document.getElementById("submit")

const movie = new Object();

async function loadDataGenreAPI() {
    let result = await fetch('https://apigenerator.dronahq.com/api/Dd1Qk1iN/genre')
    result = await result.json()
    return result
}

function handleChange(e) {
    movie[e.target.id] = e.target.value
}

async function handleSubmit(e) {
    e.preventDefault()
    movie.genre = movie.genre.split(" ").join("").toLowerCase().split(",")
    var listGenres = await loadDataGenreAPI()
    var listIdGenres = []

    movie.genre.forEach(data => {
        listGenres.forEach(genre => {
            var genreName = genre.name.split(" ").join("").toLowerCase()
            if (genreName == data) {
                listIdGenres.push(genre.id)
            }
        })
    })

    movie.genre = listIdGenres

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