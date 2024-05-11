const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

const reverse = (str) => {
  let revStr = "";
  str = str.split("");
  const rev = (str1) => {
    if (str1.length === 0) return;
    revStr += str1[str1.length - 1];
    str1.pop();
    rev(str1);
  };
  rev(str);
  return revStr;
};

const isPalindrome = (str) => {
  if (str.length === 1) return true;
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};

const flatten = (arr) => {
  let flatArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatArr = flatArr.concat(flatten(item));
    } else {
      flatArr.push(item);
    }
  });

  return flatArr;
};

const capitalise = (arr) => {
  if (arr.lenght === 0) return [];

  const firstString = arr[0];
  const capitalisedString =
    firstString.chartAt(0).toUpperCase() + firstString.slice(1);
  return [capitalisedString].concat(capitalise(arr.slice(1)));
};

console.log([1, [2, [3, 5, 6, [1, 2]]]].flat(Infinity));
