const assert = require("chai").assert;
const Circle = require("../src/circle.js");

describe("Circle", function() {
  describe("toString", function() {
    it("should give string representation of Circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.strictEqual(circle.toString(), `[Circle @(0,0) radius 5]`);
    });
  });

  describe("isEquals", function() {
    it("should validate when two circles are equal", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      const circle2 = new Circle({ x: 0, y: 0 }, 5);
      assert.ok(circle1.isEqual(circle2));
    });
  });
});
