function convertMetroToKM(distance) {
    return distance / 1000
}

function converthHourToMinute(time) {
    return time * 60
}

function filterPeople(arr) {
    var numPassengers = arr.length
    var adultsPassengers = 0
    var childrenPassengers = 0
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            adultsPassengers = adultsPassengers + 1
        } else {
            childrenPassengers = childrenPassengers + 1
        }
    }
    return { "total": numPassengers, "adults": adultsPassengers, "children": childrenPassengers }

}


function fuelConsume(distance, fuelType) {
    var distanceInKm = convertMetroToKM(distance)
    if (fuelType === "gasolina") {
        return distanceInKm / 16
    }
    if (fuelType === "etanol") {
        return distanceInKm / 11
    }
}

function numberStops(arr, time) {
    var passengers = filterPeople(arr)
    var timeInMinute = converthHourToMinute(time)

    if (passengers.total == passengers.adults) {
        return timeInMinute / 90
    }
    if ((passengers.children >= (passengers.total - passengers.adults)) && (passengers.children <= passengers.adults)) {
        return timeInMinute / 60
    }
    if (passengers.children > passengers.adults) {
        return timeInMinute / 40
    }
}

function costPerStops(numberStops, arr) {
}

module.exports = { fuelConsume, numberStops }