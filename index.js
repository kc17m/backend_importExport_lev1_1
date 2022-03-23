const { arrayNumbers, arrayCars } = require("./data.js")
const { sortCars, sortNumbers } = require("./function.js")

const sortedCars = sortCars(arrayCars);
console.log(sortedCars);


const sortedNumbers = sortNumbers(arrayNumbers);
console.log(sortedNumbers)

