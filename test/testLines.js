const Line = require("../src/line.js");
assert = require("assert");

describe("Lines", function() {
  it("should gives string representation of the object", function() {
    const a = new Line(2, 3);
    const actual = a.toString();
    assert.deepStrictEqual(actual, `Line { x: 2, y: 3 }`);
  });
});

describe("isEqualTo", function() {
  it("should give true when two Strings are equal", function() {
    const a = new Line(2, 3);
    const b = new Line(2, 3);
    assert.ok(a.isEqualTo(b));
  });

  it("should give false when two Strings are not equal", function() {
    const a = new Line(2, 3);
    const b = new Line(3, 4);
    assert.ok(!a.isEqualTo(b));
  });
});
