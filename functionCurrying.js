const multiply = function(x, y) {
    console.log(x * y)
}

const multiplyClose = function(x) {
    return function (y) {
        console.log(x * y);
    }
}

const multiplyByTwo = multiply.bind(this, 2)
const multiplyByThree = multiply.bind(this, 3)
const multiplyByFour = multiplyClose(4)

multiplyByTwo(4)
multiplyByThree(4)
multiplyByFour(5)