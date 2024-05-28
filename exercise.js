const maxOfTwo = (first, second) => (first > second ? first : second);

const isLandScape = (width, height) =>
  width > height ? "landscape" : "portrait";

const fizzBuzz = (input) => {
  if (input % 3 && input % 5) return "FizzBuzzz";
  else if (input % 3) return "Fizz";
  else if (input % 5) return "Buzz";
  return input;
};

const speedLimit = 70;

const checkspeed = (speed) => {
  if (speed < speedLimit + 5) return "OK";
  const points = Math.floor((speed - speedLimit) / 5);
  if (points > 11) return "License Suspended";
  return points;
};

const showNumbers = (limit) => {
  for (let i = 0; i <= limit; i++) {
    console.log(i, i % 2 === 0 ? "EVEN" : "ODD");
  }
};

const countTruthy = (array) => {
  let truthyCount = 0;
  for (let item of array) {
    if (item) truthyCount++;
  }
  return truthyCount;
};

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "Shahrukh Khan",
};

const showProperties = (obj) => {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
};

const sum = (limit) => {
  const threesAndFives = [];
  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0) threesAndFives.push(i);

  return threesAndFives.reduce((acc, curr) => acc + curr, 0);
};

const calculateGrade = (marks) => {
  const avgMarks = marks.reduce((acc, curr) => acc + curr, 0) / marks.length;
  if (avgMarks < 60) return "F";
  else if (avgMarks < 70) return "D";
  else if (avgMarks < 80) return "C";
  else if (avgMarks < 90) return "B";
  return "A";
};

const showStars = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 0; j < i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
};

const showPrimes = (limit) => {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
};

console.log(showPrimes(20));
