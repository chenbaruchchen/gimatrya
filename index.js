//index.js
 
function main(type,string) {
    if (type==="basic-sum") {
        const basicSum=require('./scripts/basic-sum')

        return basicSum(string)
    }

    else return "specify arguments as documented"
}

module.exports = main