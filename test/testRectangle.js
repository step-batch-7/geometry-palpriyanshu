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
    it("should give area of a rectangle when a diagonal is given", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 5 });
      assert.strictEqual(rectangle.area, 25);
    });

    it("should give 0 when diagonal is a horizontal line", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 1 });
      assert.deepStrictEqual(rectangle.area, 0);
    });

    it("should give 0 when diagonal is a vertical line", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 4 });
      assert.deepStrictEqual(rectangle.area, 0);
    });

    it("should give 0 when diagonal has same endPoints", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 1 });
      assert.deepStrictEqual(rectangle.area, 0);
    });
  });

  describe("perimeter", function() {
    it("should give perimeter of a rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 5 });
      assert.strictEqual(rectangle.perimeter, 20);
    });
  });

  describe("isEqualTo", function() {
    it("should validate when when diagonal is equal ", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 5 });
      const rectangle2 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 5 });
      assert.ok(rectangle1.isEqualTo(rectangle2));
    });

    it("should inValidate when when diagonal is not equal ", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 5 });
      const rectangle2 = new Rectangle({ x: 0, y: 0 }, { x: 4, y: 4 });
      assert.notOk(rectangle1.isEqualTo(rectangle2));
    });
  });

  describe("hasPoint", function() {
    it("should validate when rectangle has point", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 5 });
      const point = new Point(0, 2);
      assert.ok(rectangle.hasPoint(point));
    });
  });
});
