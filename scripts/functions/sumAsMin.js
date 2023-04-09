module.exports=function sumAsMin(arr) {

    let index=1
    let number=0

 
    arr.map(num => {
        number+=num/index
        index*=10
    });
    

    return number

}
