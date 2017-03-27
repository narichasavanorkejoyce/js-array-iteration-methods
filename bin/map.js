#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const map = require('../lib/map.js')

const workingArray = examples.numbers.whole

const transform = function (e, i, a) {
  return e * 2
}

// const result = map(workingArray, (e, i, a) => e + 1)
const result = workingArray.map(transform)

console.log('map result', result)
