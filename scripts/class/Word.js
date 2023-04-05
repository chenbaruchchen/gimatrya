const basicSum=require('../basic-sum')
class Word{
    constructor(string){
        this.list=[]

        for (const key of string) {
            this.list.push(key)
        }

        this.basicSum = basicSum(string)
    }
}

module.exports=Word