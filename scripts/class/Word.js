const basicSum=require('../basic-sum')
class Word{
    constructor(string,dictonery){
        this.list=[]

        for (const key of string) {
            this.list.push(key)
        }

        this.basicSum = basicSum(string,dictonery)
    }
}

module.exports=Word