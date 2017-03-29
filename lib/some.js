'use strict'

// find the first thing that passes a test and return true
const some = function (array, callback) {
  const index = array.findIndex(callback)
  return index >= 0 // because if it's false, the findIndex method will return -1
}

module.exports = some
