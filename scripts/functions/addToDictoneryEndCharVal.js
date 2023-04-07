const dictonery=require('../../dictonery')

const UNIQUE_HEBREW_LARGE={
    "ך":{char:'ך', index: 22,value: 500 },
    "ם":{char:'ם', index: 23, value: 600 },
    "ן":{char:'ן', index: 24,value: 700 },
    "ף":{char:'ף', index: 25,value: 800 },
    "ץ":{char:'ץ', index: 26, value: 900 }
}
const UNIQUE_HEBREW_SMALL={
    "ך":{char:'ך', index: 22, value:20},
    "ם":{char:'ם', index: 23, value:40},
    "ן":{char:'ן', index: 24, value:50},
    "ף":{char:'ף', index: 25, value:80 },
    "ץ":{char:'ץ', index: 26, value:90}
}



     

module.exports=function addToDictoneryEndCharVal(endCharBigVal) {

    if (endCharBigVal) {
        return {...dictonery, ...UNIQUE_HEBREW_LARGE}
        }
        

       else return {...dictonery, ...UNIQUE_HEBREW_SMALL}
   
}