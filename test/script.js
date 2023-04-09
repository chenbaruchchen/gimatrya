// test/script.js

const main = require('gimatrya')

// let res=main("small-number",'בראשית ברא אלהים את השמים ואת הארץ ,'

function cheackBasicSum() {
    const parms={
        endCharBigVal:true
    }
    const string="ם"
    return main("basic-sum",string)
}

console.log(cheackBasicSum(),'e')