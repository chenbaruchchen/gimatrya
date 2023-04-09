// test/script.js

const main = require('gimatrya')
 
function cheackBasicSum() {
    const parms={
        endCharBigVal:true
    }
    const string="ם"
    return main("basic-sum",string)
}

function cheackSmallNumber() {
    const parms={
        endCharBigVal:true
    }
    const string="ם"
     return main("small-number",string )
}

function cheackSidory() {
    /// endCharBigVal dosent metter here
    // const parms={
    //     endCharBigVal:true
    // }
    // const string="oים"
     return main("sidory",string )
}



console.log(cheackSidory(),'e')