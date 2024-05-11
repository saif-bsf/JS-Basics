const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const first = {};
  const second = {};

  for (let i = 0; i < str1.length; i++) {
    first[str1[i]] = first[str1[i]] ? first[str1[i]] + 1 : 1;
    second[str2[i]] = second[str2[i]] ? second[str2[i]] + 1 : 1;
  }

  for (let key in first) {
    if (first[key] !== second[key]) return false;
  }

  return true;
};

// another approach

const anagram2 = (first, second) => {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let char of first) {
    lookup[char] = lookup[char] ? lookup[char] + 1 : 1;
  }

  for (let char of second) {
    if (!lookup[char]) return false;
    lookup[char] = lookup[char] - 1;
  }
  return true;
};

console.log(anagram2("aaa", "aaaa"));
console.log(anagram2("aaa", "aaa"));
console.log(anagram2("abc", "cba"));
console.log(anagram2("aabbb", "bbaab"));
console.log(anagram2("xyz", "abc"));
