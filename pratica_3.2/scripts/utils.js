const carros = [
    {
        marca: "fiat",
        modelo: "2020",
        nome: "A",
        cor: "vermelho"
    },
    {
        marca: "fiat",
        modelo: "2021",
        nome: "B",
        cor: "prata"
    },
    {
        marca: "fiat",
        modelo: "2022",
        nome: "C",
        cor: "azul"
    },
    {
        marca: "volvo",
        modelo: "2020",
        nome: "D",
        cor: "vermelho"
    },
    {
        marca: "volvo",
        modelo: "2021",
        nome: "E",
        cor: "prata"
    },
    {
        marca: "volvo",
        modelo: "2022",
        nome: "F",
        cor: "azul"
    },
    {
        marca: "troller",
        modelo: "2020",
        nome: "G",
        cor: "vermelho"
    },
    {
        marca: "troller",
        modelo: "2021",
        nome: "H",
        cor: "prata"
    },
    {
        marca: "troller",
        modelo: "2022",
        nome: "I",
        cor: "azul"
    },
]


function SearchCarsForMarca(arroObj, filter) {
    let carrosMarca = []
    carrosMarca = arroObj.filter(x => x.marca == filter)
    return carrosMarca
}

function SearchMarcasAvailable(arroObj) {
    return [...new Set(arroObj.map(x => x.marca))];
}

function SearchCarsAvailableForFilter(arrObj, filter) {
    let carros = []
    arrObj.forEach(function (carro) {
        obj = {}
        for (let i = 0; i < filter.length; i++) {
            obj[`${filter[i]}`] = carro[`${filter[i]}`]
        }
        carros.push(obj)
    })
    return carros
}

console.log(SearchCarsForMarca(carros, "troller"))
console.log(SearchMarcasAvailable(carros))
console.log(SearchCarsAvailableForFilter(carros, ["marca", "cor", "nome"]))