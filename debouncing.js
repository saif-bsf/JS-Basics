let counter = 0;

const getData = function () {
  console.log("Fetching....", counter++);
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    let self = this;
    let arg = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(self, arg);
    }, d);
  };
};

const betterFunction = debounce(getData, 500);
