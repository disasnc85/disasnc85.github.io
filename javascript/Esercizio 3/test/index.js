const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

/*Calcolare se una data è all'interno di un intervallo*/

function isInRange(givenDate, minDate, maxDate) {
  //console.log(typeof minDate);
  if (
    givenDate instanceof Date &&
    minDate instanceof Date &&
    maxDate instanceof Date
  ) {
    if (givenDate < minDate || givenDate > maxDate) {
      return false;
    }
    return true;
  }

  throw Error("Dati invalidi");
}

/*-------------------------
            TEST
-------------------------*/
describe("Date is range", () => {
  it("Date is range", () => {
    const givenDate = new Date(); //today
    const minDate = new Date(new Date().setDate(new Date().getDate() - 1)); //yesterday
    const maxDate = new Date(new Date().setDate(new Date().getDate() + 1)); //tomorrow
    assert.equal(isInRange(givenDate, minDate, maxDate), true);
  });

  it("Date is not range", () => {
    const givenDate = new Date(new Date().setDate(new Date().getDate() - 1)); //yesterday
    const minDate = new Date(); //today
    const maxDate = new Date(new Date().setDate(new Date().getDate() + 1)); //tomorrow
    assert.equal(isInRange(givenDate, minDate, maxDate), false);
  });

  it("Date is not in range(over range)", () => {
    const minDate = new Date(new Date().setDate(new Date().getDate() - 1)); //yesterday
    const maxDate = new Date(); //today
    const givenDate = new Date(new Date().setDate(new Date().getDate() + 1)); //tomorrow
    assert.equal(isInRange(givenDate, minDate, maxDate), false);
  });

  it("Date not valid values", () => {
    assert.throw(() => isInRange("", 0, 10), "Dati invalidi");
  });
});
