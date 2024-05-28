const multiply = function (x, y) {
  console.log(x * y);
};

const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(4);

// using function closures

const multiplyX = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
