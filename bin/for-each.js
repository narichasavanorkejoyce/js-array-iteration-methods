#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')
const forEach = require('../lib/for-each.js')

const workingArray = examples.numbers.whole

// this is a fat arrow function
// take three formal parameters
// then it does something
// this is what becomes 'callback'
forEach(workingArray, (e, i, a) => { console.log(e, i, a) === workingArray })
