const Point = require("../src/point.js");
const assert = require("chai").assert;

describe("Point", function() {
  describe("toString", function() {
    it("should give the String representation of a point", function() {
      const point = new Point(2, 3);
      assert.strictEqual(point.toString(), "[Point @(2,3)]");
    });
  });

  describe("visit", function() {
    it("should visit to the add function when add function is given", function() {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x + y);
      assert.strictEqual(actual, 5);
    });
  });
});
