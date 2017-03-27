#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const reduce = require('../lib/reduce.js')

// const workingArray = examples.numbers.whole

const loadCities = examples.cities.loadCities

loadCities( (cities) => {
  const city reduce(cities, (p, c) => {
    // need to convert the population string to a number (+)
    if (+p.population > +c.population) return p
    return c
  })
  console.log(city)
})

const result = reduce(workingArray, (p, c, i, a) => p + c)
const result = reduce(workingArray, (p, c, i, a) => p > c ? p : c) // give max #

console.log('reduce result', result)
