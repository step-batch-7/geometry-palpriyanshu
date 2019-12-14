const assert = require("chai").assert;
const Point = require("../src/point.js");

describe("Point", function() {
  describe("toString", function() {
    it("should give the String representation of a point", function() {
      const point = new Point(2, 3);
      assert.strictEqual(point.toString(), "[Point @(2,3)]");
    });
  });

  describe("visit", function() {
    it("should visit to the add function when add function reference is given", function() {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x + y);
      assert.strictEqual(actual, 5);
    });

    it("should visit to the mul function when mul function reference is given", function() {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x * y);
      assert.strictEqual(actual, 6);
    });
  });

  describe("isEqualTo", function() {
    it("should validate when two points are equal", function() {
      const point1 = new Point(2, 3);
      const point2 = new Point(2, 3);
      assert.ok(point1.isEqualTo(point2));
    });

    it("should invalidate when two points have different ordinates and abscissa ", function() {
      const point1 = new Point(2, 3);
      const point2 = new Point(3, 4);
      assert.notOk(point1.isEqualTo(point2));
    });

    it("should invalidate when two objects are not instance of Point", function() {
      const point1 = new Point(2, 3);
      const point2 = { x: 3, y: 3 };
      assert.notOk(point1.isEqualTo(point2));
    });

    it("should invalidate when two objects are not same", function() {
      const point1 = new Point(2, 3);
      const point2 = ``;
      assert.notOk(point1.isEqualTo(point2));
    });
  });

  describe("clone", function() {
    it("should give copy of the given point", function() {
      const point = new Point(2, 3);
      assert.deepStrictEqual(point.clone(), { x: 2, y: 3 });
    });
  });
});
