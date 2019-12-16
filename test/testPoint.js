"use strict";

const assert = require("chai").assert;
const Point = require("../src/point.js");
const Line = require("../src/line.js");
const Circle = require("../src/circle.js");

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
      const action = (x, y) => x + y;
      assert.strictEqual(point.visit(action), 5);
    });

    it("should give product when when mul function reference is given", function() {
      const point = new Point(2, 3);
      const action = (x, y) => x * y;
      assert.strictEqual(point.visit(action), 6);
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

    it("should give NaN when the object is not a instance of Point", function() {
      const point1 = new Point(6, 4);
      const point2 = { x: 6, y: 4 };
      assert.isNaN(point1.findDistanceTo(point2));
    });
  });

  describe("isOn", function() {
    it("should validate when point lies on the line segment", function() {
      const point = new Point(2, 2);
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      assert.ok(point.isOn(line));
    });

    it("should inValidate when point does not lies on the line segment", function() {
      const point = new Point(2, 3);
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      assert.notOk(point.isOn(line));
    });

    it("should validate when point lies on the circle's circumference", function() {
      const point = new Point(0, 5);
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.ok(point.isOn(circle));
    });

    it("should inValidate when point does not lie on circle's circumference", function() {
      const point = new Point(0, 6);
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.notOk(point.isOn(circle));
    });
  });
});
