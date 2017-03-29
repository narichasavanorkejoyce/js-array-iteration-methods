'use strict'

const every = function (array, callback) {
  // const index = array.findIndex(callback)
  // return index < 0
  // return array.findIndex((e, i, a) => !callback(e, i, a)) < 0
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false
    } else {
      return true
    }
  }
}

module.exports = every
