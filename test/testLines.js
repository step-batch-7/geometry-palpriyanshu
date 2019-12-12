const Line = require("../src/line.js");
assert = require("assert");

describe("Lines", function() {
  it("should gives string representation of the object", function() {
    const a = new Line(2, 3);
    const actual = a.toString();
    assert.deepStrictEqual(actual, `Line { x: 2, y: 3 }`);
  });
});
