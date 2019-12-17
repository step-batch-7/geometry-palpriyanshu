const assert = require("chai").assert;
const Rectangle = require("../src/rectangle.js");
const Point = require("../src/point.js");

describe("toString", function() {
  it("should give string representation of rectangle", function() {
    const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 5 });
    assert.deepStrictEqual(rectangle.toString(), "[Rectangle (0,0) to (5,5)]");
  });
});
