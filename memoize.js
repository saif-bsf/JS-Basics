const map = {};

function memoize(fn) {
  let args = arguments;
  if (map[args]) {
    console.log("from cache");
    return map[args];
  }
  const result = fn(...args);
  map[args] = result;
  return result;
}
const add = (a, b) => a + b;
console.log(memoize(() => add(1, 2)));
console.log(memoize(() => add(1, 2)));
