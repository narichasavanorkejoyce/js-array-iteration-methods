'use strict'

const find = function (array, callback) {
  const index = array.findIndex(callback)
  return array[index]
}

// const workingArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result = find(workingArray, (e, i, a) => e === 13)
// const result = find(workingArray, (e, i, a) => e > 5 && e < 10)

module.exports = find
