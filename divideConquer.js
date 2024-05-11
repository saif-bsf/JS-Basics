const binarySearch = (arr, num) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) return mid;
    if (num > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null;
};

console.log(binarySearch([1, 2, 3, 5, 7, 10, 12], 10));
