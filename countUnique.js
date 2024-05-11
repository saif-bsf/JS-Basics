const countUnique = (arr) => {
  const map = {};
  for (let val of arr) {
    map[val] = map[val] ? map[val] + 1 : 1;
  }

  return Object.keys(map).length;
};

const pointer = (arr) => {
  if (arr.length === 0) return 0;
  let start = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[start] !== arr[i]) {
      start++;
    }
  }

  return start + 1;
};

console.log(pointer([1, 1, 1, 2]));
console.log(pointer([1, 2, 3, 4, 4, 4, 7, 12, 13]));
