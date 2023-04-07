//index.js

const basicSum = require('./scripts/basic-sum')
const sidory = require('./scripts/sidory')
const smallNumber = require('./scripts/small-number')

const addToDictoneryEndCharVal=require('./scripts/functions/addToDictoneryEndCharVal')


let r="tdfdאאע עעא sם"
let res=main("basic-sum",r, {endCharBigVal:true})
console.log(res)

function main(type, string,{endCharBigVal}) {

    ////init db 

    const dictonery=addToDictoneryEndCharVal(endCharBigVal)
 

 
    const OPERATIONS = {
        "basic-sum": basicSum,
        "sidory": sidory,
        "small-number": smallNumber
    }

    const func = OPERATIONS[type]
    if (typeof func !== "function") {
        throw new Error("unrecognized operation type, specify arguments as documented")
    }

    return func(string,dictonery)
}

module.exports = main