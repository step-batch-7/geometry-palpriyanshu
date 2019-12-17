const assert = require("chai").assert;
const Circle = require("../src/circle.js");
const Point = require("../src/point.js");

describe("Circle", function() {
  describe("toString", function() {
    it("should give string representation of Circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.strictEqual(circle.toString(), `[Circle @(0,0) radius 5]`);
    });
  });

  describe("isEqualTo", function() {
    it("should validate when two circles are equal", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      const circle2 = new Circle({ x: 0, y: 0 }, 5);
      assert.ok(circle1.isEqualTo(circle2));
    });

    it("should inValidate when centre of two circles is not equal", function() {
      const circle1 = new Circle({ x: 0, y: 1 }, 5);
      const circle2 = new Circle({ x: 0, y: 0 }, 5);
      assert.notOk(circle1.isEqualTo(circle2));
    });

    it("should inValidate when radius of two circles is not equal", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 3);
      const circle2 = new Circle({ x: 0, y: 0 }, 5);
      assert.notOk(circle1.isEqualTo(circle2));
    });

    it("should inValidate when object is not instance of Circle", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 3);
      const circle2 = { centre: { x: 0, y: 0 }, radius: 5 };
      assert.notOk(circle1.isEqualTo(circle2));
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

  describe("hasPoint", function() {
    it("should validate when point is lie on circle's circumference", function() {
      const point = new Point(0, 5);
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.ok(circle.hasPoint(point));
    });

    it("should inValidate when point does not lie on circle's circumference", function() {
      const point = new Point(0, 6);
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.notOk(circle.hasPoint(point));
    });
  });

  describe("moveTo", function() {
    it("should move the circle to the given point", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.deepStrictEqual(
        circle.moveTo({ x: 1, y: 1 }),
        new Circle({ x: 1, y: 1 }, 5)
      );
    });
  });
});
