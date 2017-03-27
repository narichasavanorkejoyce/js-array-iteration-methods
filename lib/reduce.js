'use strict'

const reduce = function (originalArray, callback, initialValue) {
  // make a shallow copy of the entire originalArray (point to the same things)
  // elements in both arrays will point to the same thing
  // a deep copy would make new things that look like the old things
  const workingArray = originalArray.slice()
  // save initialValue (parameter) as previous
  let previous = initialValue
  // initialValue not passed as an argument
  if (arguments.length < 3) {
    // shift() removes the first element from an array and returns that element
    // shift() changes the length of the array (gets shorter by 1 element)
    // make the first element take its place
    previous = workingArray.shift()
  }
  // for every element
  workingArray.forEach(function (element, index, workingArray) {
    // call the callback, setting previous to its return value
    previous = callback(previous, element, index, originalArray)
  })

  return previous
}

module.exports = reduce
