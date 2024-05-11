// const a = 10;

// function func() {
//   console.log(a);
//   let a = 20;
// }

// func();

const obj = {
  name: "Foo",

  printName: function () {
    self = this;

    console.log(`SELF`, self.name); // foo
    console.log(`THIS`, this.name); // foo

    (function () {
      console.log(`SELF`, self.name); // foo
      console.log(`THIS`, this.name); // undefined
    })();
  },
};

const flatten = (arr) => {
  let flatArr = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      flatArr = flatArr.concat(flatten(item));
    } else {
      flatArr.push(item);
    }
  }

  return flatArr;
};

const longestSubString = (str) => {
  let seen = {};
  let start = 0;
  let longest = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
};

console.log(flatten([1, [4, 2, [3, 7, 8, [5, 9]], [12, 11]]]));

obj.printName();

function mergeIntervals(intervals) {
  // Sort intervals based on the start of each interval
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  for (let interval of intervals) {
    // If the merged array is empty or if the current interval does not overlap with the last interval in merged
    if (!merged.length || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval);
    } else {
      // There is an overlap, so we merge the current and previous intervals
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        interval[1]
      );
    }
  }

  return merged;
}

// Test the function with the provided example
const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

for (var i = 0; i < 5; i += 1) {
  setTimeout(() => {
    console.log(i);
  }, [i * 1000]);
}

function twoSum(nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in obj) {
      return [obj[complement], i];
    }

    obj[nums[i]] = i;
  }

  // Return an empty array if no solution is found
  return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
console.log(mergeIntervals(intervals));
