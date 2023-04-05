const dictonery=require('../dictonery')

const Sentence=require('./class/Sentence')

const getArrFromInt=require('./functions/getArrFromInt')


module.exports=function sidory(string) {
    const sentence=new Sentence(string)
    console.log('sentence   ',sentence)

    

    console.log(getArrFromInt(7))





    return null
    
}