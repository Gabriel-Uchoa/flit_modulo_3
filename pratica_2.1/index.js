const calc = require('./calcTravel')

console.log("Litros de Combustivel Consumidos: ", calc.fuelConsume(32000, "gasolina"))
console.log("Número de paradas: ", calc.numberStops([0, 1, 1, 1], 4))