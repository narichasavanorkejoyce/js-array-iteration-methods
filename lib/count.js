'use strict'

// Method 1
// We define a separate count function because it is more semantic
const count = function (array, callback) {
  let result = 0
  array.forEach((e, i, a) => { if (callback(e, i, a)) result++ })
  return result
}

// Method 2
// const count = function (array, callback) {
//   return array.filter(callback).length
// }

module.exports = count
