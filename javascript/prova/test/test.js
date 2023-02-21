const assert = require("assert");

function converter(value, unit, targetUnit) {
  const validValues = ["g", "Kg"];

  if (typeof value != "number") {
    throw new Error("il convertitore accetta solo numeri");
  }

  if (!validValues.includes(unit) || !validValues.includes(targetUnit)) {
    throw new Error("il convertitore accetta solo g e Kg");
  }

  var x = 0;
  if (unit === validValues[0] && targetUnit === validValues[1]) {
    x = value / 1000;
  } else if (unit === validValues[1] && targetUnit === validValues[0]) {
    x = value * 1000;
  }
  return x;
}

/* ----------------------
TEST
----------------------*/

describe("converterTests", function () {
  it("convert 1000g in 1Kg", function () {
    const result = converter(1000, "g", "Kg");
    assert.equal(result, 1);
  });

  it("convert 100g in 0.1Kg", function () {
    const result = converter(100, "g", "Kg");
    assert.equal(result, 0.1);
  });

  it("convert 1g in 0.001Kg", function () {
    const result = converter(1, "g", "Kg");
    assert.equal(result, 0.001);
  });

  it("convert 0g in 0.0Kg", function () {
    const result = converter(0, "g", "Kg");
    assert.equal(result, 0);
  });
  it("convert -1000g in 0.0Kg", function () {
    const result = converter(-1000, "g", "Kg");
    assert.equal(result, -1);
  });
  it("convert not a number throws", function () {
    assert.throws(
      () => converter("not a number", "g", "Kg"),
      Error,
      "il convertitore accetta solo numeri"
    );
  });

  it("convert Kg to g", function () {
    const result = converter(1, "Kg", "g");
    assert.equal(result, 1000);
  });

  it("convert somethings to blablabla", function () {
    assert.throws(
      () => converter(1, "somethings", "blablabla"),
      Error,
      "il convertitore accetta solo g e Kg"
    );
  });
});
