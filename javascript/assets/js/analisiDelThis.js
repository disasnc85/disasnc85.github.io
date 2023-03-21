var assert = require("assert");

const foo = {
  a: 2,
  normalFunction: function () {
    return this.a;
  },
};

describe("fooTests", function () {
  it("must return 2", function () {
    assert.equals(foo.normalFunction(), 2);
  });
});
