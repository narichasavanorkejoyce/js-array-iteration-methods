// Plain old functions
function addFunction (number) {
  return number + 1
}

function subtractFunction (number) {
  return number - 1
}

function multiplyFunction (number) {
  return number * 2
}

// A call back is a function that is passed into another function!
function callBackExample (aFunction, bFunction, cFunction, dFunction) {
  return (aFunction(4))
}

callBackExample(addFunction, subtractFunction, multiplyFunction)

// CALLBACKS WITH ANONYMOUS FUNCTIONS

const addFunction = function (number) {
  console.log('We are in addFunction')
  return number + 1
}

// The arguments in this function are a value (number) and a function
const callBackExample = function (value, aFunction) {
  console.log('We are in callBackExample')
  return (aFunction(value))
}

callBackExample(addFunction)

// THIS IS EQUIVALENT//

// We can define a function within another function
callBackExample(4, function (number) { return number + 1 })

// ARRAY ITERATION WITH A NAMED FUNCTION//

const numberArray = [1, 2, 3, 4, 5]

const addFunction = function (number) {
  console.log(number + 1)
}

// forEach will add 1 to each number in the array
console.log(numberArray.forEach(addFunction))

// ARRAY ITERATION WITH A NAMED FUNCTION PT.2//

const numberArray = [1, 2, 3, 4, 5]

const addFunction = function (number) {
  return number + 1
}

// Map will add 1 to each element in the array
// Map will store those values in a new array
let mappedArray = numberArray.map(addFunction)

console.log('Mapped Array: ', mappedArray, 'Original Array: ', numberArray)

// ANONYMOUS EQUIVALENT TO ABOVE//

const mappedArray = numberArray.map(
  function (number) {
    return number + 1
  }
)

// We're being meta...map a mapped array
let doubleMappedArray = mappedArray.map(
  function (number) {
    return number + 1
  }
)

console.log('Double Mapped Array: ', doubleMappedArray, 'Mapped Array: ', mappedArray, 'Original Array: ', numberArray)

// ARROW FUNCTIONS//

// REGULAR OLD BORING FUNCTION//
const addFunction = function (number, secondNumber) {
  return number + 1
}

// ARROW FUNCTION W/O THE WORD 'FUNCTION'
// => === function
const addArrowFunction = (number, secondNumber) => {
  return number + 1
}

// ARROW FUNCTION W/O PARENS
// *only one parameter!!!!!!!!!!!!!!!!
const addArrowFunctionNoParens = number => {
  return number + 1
}

// ARROW FUNCTION W/O CURLIES AND W/O RETURN KEYWORD//
// *only one expression!!!!!!!!!!!!!!
const addArrowFunctionNoParensNoCurlies = number => number + 1

// FAT ARROW FUNCTIONS//

let arr = [1, 2, 3, 4, 5]

arr.map((item, index, array) => item + 1)

arr.map(function (item, index, array) {
  return item + 1
})
