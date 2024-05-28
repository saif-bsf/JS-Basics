const resultObj = {};

function destructure(obj, parent) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      destructure(obj[key], parent + "_" + key);
    } else {
      resultObj[parent + "_" + key] = obj[key];
    }
  }
}

const obj = {
  name: "Saif",
  education: {
    school: "IISJ",
    college: "BIET",
  },
  address: {
    country: "India",
    apartment: {
      flat: "605",
      floor: "6",
    },
    street: "Al Asayel",
  },
};

destructure(obj, "obj");

console.log(resultObj);
