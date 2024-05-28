let counter = 0;
const getData = () => {
  console.log("Fetching Data...");
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this);
    }, delay);
  };
};

const betterFunction = debounce(getData, 500);

betterFunction();
