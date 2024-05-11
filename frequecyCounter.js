// First Approach

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
};

// Second Approach

const frequencyCounter = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const first = {};
  const second = {};

  for (let val of arr1) {
    first[val] = first[val] ? first[val] + 1 : 1;
  }

  for (let val of arr2) {
    second[val] = second[val] ? second[val] + 1 : 1;
  }

  for (let key in first) {
    if (!(key ** 2 in second)) {
      return false;
    }
    if (second[key ** 2] !== first[key]) {
      return false;
    }
  }
  return true;
};

console.log(frequencyCounter([1, 2, 3], [4, 1, 9]));

console.log(frequencyCounter([1, 2, 3], [1, 9]));

console.log(frequencyCounter([1, 2, 1], [4, 4, 1]));
