const dictonery=require('../dictonery')
module.exports=function basicSum(string) {

    let sum=0
     for (let key in string) {

        /// ?. בגלל שיש אפשרות לפסיק
 
        let char=string[key]

        //// cheack if char in dictonary
        if(char in dictonery){
            sum+=dictonery[char][0]
        }

        
    }

    return sum
}