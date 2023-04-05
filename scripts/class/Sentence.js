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
}

module.exports=Sentence