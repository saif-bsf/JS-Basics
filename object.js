const address = {
  street: "Al Asayel",
  city: "Dubai",
  zipCode: "00000",
};

const showAddress = (address) => {
  for (let key in address) {
    console.log(key, address[key]);
  }
};

showAddress(address);
