// input -> computeAmount().lacs(15).crore(5)
// .crore(2).lacs(20).thousand(45).crore(7).value()

function computeAmount() {
  let totalAmount = 0;

  return {
    lacs: function (amount) {
      totalAmount += amount * 100000;
      return this;
    },
    crore: function (amount) {
      totalAmount += amount * 10000000;
      return this;
    },
    thousand: function (amount) {
      totalAmount += amount * 1000;
      return this;
    },
    value: function () {
      console.log(totalAmount);
    },
  };
}

computeAmount()
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .value();
