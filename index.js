//index.js

const basicSum = require('./scripts/basic-sum')
const sidory = require('./scripts/sidory')
const smallNumber = require('./scripts/small-number')

function main(type, string) {

    const OPERATIONS = {
        "basic-sum": basicSum,
        "sidory": sidory,
        "small-number": smallNumber
    }

    const func = OPERATIONS[type]
    if (typeof func !== "function") {
        throw new Error("unrecognized operation type, specify arguments as documented")
    }

    return func(string)
}

module.exports = main