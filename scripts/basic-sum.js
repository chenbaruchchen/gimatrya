

const dictonery = require('../dictonery')
module.exports = function basicSum(string,dictonery) {
    return string
        .split("")
        .reduce((accumulator, char) =>{
             return accumulator += dictonery[char] ? dictonery[char].value : 0
        } , 0)

}