const dictonery=require('../dictonery')

const Sentence=require('./class/Sentence')
const sumAsMin=require('./functions/sumAsMin')


module.exports=function sidory(string) {
    const sentence=new Sentence(string)


    /////get arr for each word
    // let listsValueOfWords=sentence.list.map((word)=>{
    //     return getArrFromInt(word.basicSum)
    // })


     ////have to make change to the calculation of end char
     let smallNumber=0
     sentence.listsValueOfWords.map((wordValues)=>{
        smallNumber+=sumAsMin(wordValues)

     })

 




    return smallNumber
    
}