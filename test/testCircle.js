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

    it("should inValidate when centre of two circles is not equal", function() {
      const circle1 = new Circle({ x: 0, y: 1 }, 5);
      const circle2 = new Circle({ x: 0, y: 0 }, 5);
      assert.notOk(circle1.isEqual(circle2));
    });

    it("should inValidate when radius of two circles is not equal", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 3);
      const circle2 = new Circle({ x: 0, y: 0 }, 5);
      assert.notOk(circle1.isEqual(circle2));
    });

    it("should inValidate when object is not instance of Circle", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 3);
      const circle2 = { centre: { x: 0, y: 0 }, radius: 5 };
      assert.notOk(circle1.isEqual(circle2));
    });
  });

  describe("area", function() {
    it("should give area of circle when finite radius is given", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      assert.approximately(circle.area, 154, 1);
    });

    it("should give area 0 when radius 0 is given", function() {
      const circle = new Circle({ x: 0, y: 0 }, 0);
      assert.strictEqual(circle.area, 0);
    });
  });

  describe("perimeter", function() {
    it("should give perimeter of circle when finite radius is given", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      assert.approximately(circle.perimeter, 44, 1);
    });

    it("should give area 0 when radius 0 is given", function() {
      const circle = new Circle({ x: 0, y: 0 }, 0);
      assert.strictEqual(circle.perimeter, 0);
    });
  });
});
