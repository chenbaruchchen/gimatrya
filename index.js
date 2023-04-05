//index.js

function helloNpm() {
    return "hello NPM"
  }

function main(type,string) {
    if (type==="basic-sum") {
        const basicSum=require('./scripts/basic-sum')

        return basicSum(string)
    }
}

module.exports = helloNpm