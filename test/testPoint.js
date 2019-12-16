"use strict";

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
    it("should give sum when add function reference is given", function() {
      const point = new Point(2, 3);
      const add = (x, y) => x + y;
      assert.strictEqual(point.visit(add), 5);
    });

    it("should give product when when mul function reference is given", function() {
      const point = new Point(2, 3);
      const mul = (x, y) => x * y;
      assert.strictEqual(point.visit(mul), 6);
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
  });

  describe("clone", function() {
    it("should give copy of the given point", function() {
      const point = new Point(2, 3);
      assert.deepStrictEqual(point.clone(), { x: 2, y: 3 });
    });
  });

  describe("findDistanceTo", function() {
    it("should give distance between two distinct point", function() {
      const point1 = new Point(6, 4);
      const point2 = new Point(2, 1);
      assert.strictEqual(point1.findDistanceTo(point2), 5);
    });

    it("should give distance 0 between two same point", function() {
      const point1 = new Point(6, 4);
      const point2 = new Point(6, 4);
      assert.strictEqual(point1.findDistanceTo(point2), 0);
    });
  });
});
