'use strict'
// MAP IS A TRANSFORMATION METHOD
// you can transform numbers in an array
// map is an array which is a transformation of an existing array
const map = function (array, callback) {
  const result = new Array(array.length) // this array is the same size as the array being passed in
  array.forEach((e, i, a) => { result = callback(e, i, a) })
  // e = element, i = index, a = array
  return result
}

module.exports = map
