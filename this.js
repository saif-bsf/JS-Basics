const printFullName = function (hometown) {
  console.log(this.firstname + " " + this.lastname + " " + hometown);
};

const nameOne = {
  firstname: "saif",
  lastname: "sheikh",
};

const nameTwo = {
  firstname: "Mosh",
  lastname: "Hamedani",
};

printFullName.apply(nameOne, ["bangalore"]);

printFullName.call(nameTwo, "Tehran");

const recallName = printFullName.bind(nameOne, "Dubai");
recallName();
