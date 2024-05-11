const nSum = function(a) {
    return function(b) {
        return b ? nSum(a+b) : a
    }
}

const nSumShort = (a) => (b) => b ? nSumShort(a + b) : a

console.log(nSumShort(4)(5)(4)(1)())