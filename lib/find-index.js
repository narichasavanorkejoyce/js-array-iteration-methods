'use strict'

const findIndex = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    // when this loop finds the first true value, it will terminate
    if (callback(array[i], i, array)) return i
  }
  return -1
}

module.exports = findIndex
