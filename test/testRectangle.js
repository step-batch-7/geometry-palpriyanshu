const assert = require("chai").assert;
const Rectangle = require("../src/rectangle.js");
const Point = require("../src/point.js");

describe("Rectangle", function() {
  describe("toString", function() {
    it("should give string representation of rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 5 });
      assert.deepStrictEqual(
        rectangle.toString(),
        "[Rectangle (0,0) to (5,5)]"
      );
    });
  });

  describe("area", function() {
    it("should give area of a rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 5 });
      assert.strictEqual(rectangle.area, 25);
    });
  });

  describe("perimeter", function() {
    it("should give perimeter of a rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 5 });
      assert.strictEqual(rectangle.perimeter, 20);
    });
  });
});
