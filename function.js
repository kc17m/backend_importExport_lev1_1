const { arrayNumbers, arrayCars } = require("./data.js")

//console.log(arrayNumbers, arrayCars)

function sortCars() {
    return arrayCars.sort()
}

//console.log(sortCars(arrayCars))

function sortNumbers() {
    return arrayNumbers.sort((a, b) => a - b)
}

//console.log(sortNumbers(arrayNumbers))


module.exports = { sortCars, sortNumbers }