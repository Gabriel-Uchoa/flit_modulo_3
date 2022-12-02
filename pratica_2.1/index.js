const calc = require('./calcTravel')
const peopleArr = ["adulto", "crianca", "crianca", "crianca"]

try {
    const fuelConsume = calc.fuelConsume(32000, "etanol")
    const numberStops = calc.numberStops(peopleArr, 3)
    const costTotal = calc.costTotal(numberStops, peopleArr)

    console.log("Combustivel necessário em litros: ", fuelConsume)
    console.log("Número de paradas: ", numberStops)
    console.log("Gasto total com refeições:", costTotal)
} catch (error) {
    console.log(error.message)
}