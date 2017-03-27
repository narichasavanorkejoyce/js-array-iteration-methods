'use strict'

// loop through each element of the array
// forEach is pretty much a for loop
// Here, we're writing our own forEach function
const forEach = function (array, callback) {
  let element
  for (let = 0; i < array.length; i++) {
    // this is how we get element!!!
    element = array[i]
    callback(element, i, array)
  }
}

// forEach is a method on the Array prototype
// this method was built by Javascript (kind of like a library)
workingArray.forEach((e, i, a) => console.log(e, i))



module.exports = forEach
