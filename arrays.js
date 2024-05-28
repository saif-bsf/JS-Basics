const arrayFromRange = (min, max) => {
  const arr = [];
  for (let i = min; i <= max; i++) arr.push(i);

  return arr;
};

const includes = (arr, searchEle) => {
  for (let item of arr) {
    if (item === searchEle) return true;
  }
  return false;
};

const except = (arr, excluded) => {
  for (let i = 0; i < arr.length; i++) {
    if (excluded.includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

const countOccurences = (array, searchElement) => {
  return array.reduce((acc, cur) => {
    if (searchElement === cur) acc++;
    return acc;
  }, 0);
};

console.log(countOccurences([1, 3, 10, 2, 9, 10], 0));
