function convertMetroToKM(distance) {
    if (distance < 0) {
        throw new Error("Erro: Informe uma distância positiva!");
    }
    return distance / 1000
}

function converthHourToMinute(time) {
    if (time < 0) {
        throw new Error("Erro: Informe uma tempo positivo!");
    }
    if (typeof time != "number") {
        throw new Error("Erro: Informe um número inteiro ou decimal");
    }
    return time * 60
}

function filterPeople(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != "adulto" && arr[i] != "crianca") {
            throw new Error("Erro: Informe apenas: adulto ou crianca");
        }
    }
    var numPassengers = arr.length
    var adultsPassengers = 0
    var childrenPassengers = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "adulto") {
            adultsPassengers = adultsPassengers + 1
        }
        if (arr[i] === "crianca") {
            childrenPassengers = childrenPassengers + 1

        }
    }
    return { "total": numPassengers, "adults": adultsPassengers, "children": childrenPassengers }
}

function fuelConsume(distance, fuelType) {
    var distanceInKm = convertMetroToKM(distance)
    if (fuelType != "gasolina" && fuelType != "etanol") {
        throw new Error("Erro: Informe um combustivel válido: gasolina ou etanol!");
    }
    if (fuelType === "gasolina") {
        return Math.ceil((distanceInKm / 16), 1)
    }
    if (fuelType === "etanol") {
        return Math.ceil((distanceInKm / 11), 1)
    }
}

function numberStops(arr, time) {
    var passengers = filterPeople(arr)
    var timeInMinute = converthHourToMinute(time)

    if (passengers.total == passengers.adults) {
        return parseInt(timeInMinute / 90)
    }
    if ((passengers.children >= (passengers.total - passengers.adults)) && (passengers.children <= passengers.adults)) {
        return parseInt(timeInMinute / 60)
    }
    if (passengers.children > passengers.adults) {
        return parseInt(timeInMinute / 40)
    }
}

function costTotal(numberStops, arr) {
    var passengers = filterPeople(arr)
    var completa = 0
    var intervalo = 0
    var leve = 0
    var total = 0
    for (let i = 1; i <= numberStops; i++) {
        if (intervalo == 0) {
            completa++
            intervalo++
            if (passengers.total) {
                total = total + ((passengers.adults * 50) + (passengers.children * 40))
            }
        }
        if (intervalo == 3) {
            intervalo = 0
        }
        if (intervalo > 0 && intervalo < 3 && i != numberStops) {
            leve++
            intervalo++
            if (passengers.total) {
                total = total + ((passengers.adults * 30) + (passengers.children * 20))
            }
        }
    }
    return parseFloat(total.toFixed(2))
}

module.exports = {
    fuelConsume,
    numberStops,
    costTotal,
    convertMetroToKM,
    converthHourToMinute,
    filterPeople
}