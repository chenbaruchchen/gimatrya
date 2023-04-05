//index.js
 
function main(type,string) {
    if (type==="basic-sum") {
        const basicSum=require('./scripts/basic-sum')

        return basicSum(string)
    }

    else if(type==="sidory"){
        const sidory=require('./scripts/sidory')

        return sidory(string)

    }
    else if(type==="small-number"){
        const smallNumber=require('./scripts/small-number')

        return smallNumber(string)

    }

    else return "specify arguments as documented"
}

module.exports = main