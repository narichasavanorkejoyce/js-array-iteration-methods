'use strict'

// loop through each element of the array
// forEach is pretty much a for loop
// Here, we're writing our own forEach function
const forEach = function (array, callback) {
  let element
  for (let i = 0; i < array.length; i++) {
    // this is how we get element!!!
    element = array[i]
    callback(element, i, array)
  }
}

// Export the forEach function
module.exports = forEach
