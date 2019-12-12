const Line = require("../src/line.js");
assert = require("assert");

describe("toString", function() {
  it("should gives string representation of the object", function() {
    const a = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
    const actual = a.toString();
    assert.deepStrictEqual(actual, `Line (1,2)--------(3,4)`);
  });
});

describe("isEqualTo", function() {
  it("should give true when two instances are equal", function() {
    const a = new Line(2, 3);
    const b = new Line(2, 3);
    assert.ok(a.isEqualTo(b));
  });

  it("should give false when two instances are not equal", function() {
    const a = new Line({ x: 2, y: 4 }, { x: 3, y: 5 });
    const b = new Line({ x: 7, y: 9 }, { x: 3, y: 1 });
    assert.ok(!a.isEqualTo(b));
  });
});
