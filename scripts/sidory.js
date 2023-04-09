const dictonery=require('../dictonery')

const Sentence=require('./class/Sentence')



module.exports=function sidory(string,dictonery) {
  
    console.log(dictonery)
    
    return string
        .split("")
        .reduce((accumulator, char) =>{
            ///start at zero so ++ (add one)
             return accumulator += dictonery[char] ? dictonery[char].index+1 : 0
        } , 0)




    return null
    
}