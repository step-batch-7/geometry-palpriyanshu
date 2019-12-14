const Point = require("../src/point.js");
const assert = require("chai").assert;

describe("Point", function() {
  describe("toString", function() {
    it("should give the String representation of a point", function() {
      const point = new Point(2, 3);
      assert.strictEqual(point.toString(), "[Point @(2,3)]");
    });
  });
});
