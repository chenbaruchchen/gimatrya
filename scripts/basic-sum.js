

const dictonery = require('../dictonery')
module.exports = function basicSum(string,dictonery) {
    return string
        .split("")
        .reduce((accumulator, char) =>
            accumulator += dictonery[char] ? dictonery[char][0] : 0
            , 0)
}