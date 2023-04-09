//index.js

const basicSum = require('./scripts/basic-sum')
const sidory = require('./scripts/sidory')
const smallNumber = require('./scripts/small-number')

const addToDictoneryEndCharVal=require('./scripts/functions/addToDictoneryEndCharVal')

 
function main(type, string,params) {
    

    ////init db 
    ///defaults behavior endCharBigVal as False
    const dictonery=addToDictoneryEndCharVal(params?.endCharBigVal)
    
 
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