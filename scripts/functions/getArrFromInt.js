module.exports=function getArrFromInt(num) {

    let index=10
    let arr=[]
    while (num*10>index) {

        let remainder=num%index
 
        arr.push(remainder)

        num=num-remainder
        index=index*10
    }

    return arr

}
