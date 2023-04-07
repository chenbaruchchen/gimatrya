// test/script.js

const main = require('gimatrya')

// let res=main("small-number",'בראשית ברא אלהים את השמים ואת הארץ ,')

let s=" אלהים ברא בראשית"
let r="ם"
let res=main("basic-sum",r, {endCharBigVal:true})
console.log(res)