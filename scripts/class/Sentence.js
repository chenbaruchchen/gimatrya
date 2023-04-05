const getArrFromInt=require('../functions/getArrFromInt')

const Word =require('./Word')
class Sentence{
    constructor(string){
        this.list=[]
        this.psik=null

        let index=0

        let words = string.split(" ")
 

        words.forEach(element => {
            let word =new Word(element)
            this.list.push(word)
        });

        this.psik=words.indexOf(',')

        

        
        
    }
   
    get listsValueOfWords(){
        return this.list.map((word)=>{
            return getArrFromInt(word.basicSum)
        })
  
    }



}

module.exports=Sentence