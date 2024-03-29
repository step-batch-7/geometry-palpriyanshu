"use strict";

const assert = require("chai").assert;
const Line = require("../src/line.js");
const Point = require("../src/point.js");

describe("Line", function() {
  describe("toString", function() {
    it("should gives string representation of the Line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.toString();
      assert.deepStrictEqual(actual, `[Line (1,2) to (3,4)]`);
    });
  });

  describe("isEqualTo", function() {
    it("should validate when two Lines have same end points", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(line1.isEqualTo(line2));
    });

    it("should invalidate when two Lines have different end points", function() {
      const line1 = new Line({ x: 2, y: 4 }, { x: 3, y: 5 });
      const line2 = new Line({ x: 7, y: 9 }, { x: 3, y: 1 });
      assert.notOk(line1.isEqualTo(line2));
    });

    it("should invalidate when two objects are not instance of Line", function() {
      const line1 = new Line({ x: 2, y: 4 }, { x: 3, y: 5 });
      const line2 = ``;
      assert.notOk(line1.isEqualTo(line2));
    });
  });

  describe("length", function() {
    it("should give the length of line when two distinct end points are given", function() {
      const line = new Line({ x: 6, y: 4 }, { x: 2, y: 1 });
      assert.strictEqual(line.length, 5);
    });

    it("should give the length of line '0' when both end points are same", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 1, y: 1 });
      assert.strictEqual(line.length, 0);
    });

    it("should give the length of line when both end points are floating points", function() {
      const line = new Line({ x: 6.0, y: 4.0 }, { x: 1.0, y: 1.0 });
      assert.approximately(line.length, 5.0, 1);
    });

    it("should give length for a line that has negative co-ordinates as any end point", function() {
      const line = new Line({ x: -1, y: -2 }, { x: 3, y: 1 });
      assert.deepStrictEqual(line.length, 5);
    });
  });

  describe("isParallelTo", function() {
    it("should validate when two horizontal lines are parallel", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 3, y: 1 });
      const line2 = new Line({ x: 1, y: 4 }, { x: 3, y: 4 });
      const actual = line1.isParallelTo(line2);
      assert.ok(actual);
    });

    it("should validate when two vertical lines are parallel", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 1, y: 5 });
      const line2 = new Line({ x: 3, y: 1 }, { x: 3, y: 5 });
      const actual = line1.isParallelTo(line2);
      assert.ok(actual);
    });

    it("should validate when two inclined lines are parallel", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 5, y: 5 });
      const line2 = new Line({ x: 2, y: 1 }, { x: 6, y: 5 });
      const actual = line1.isParallelTo(line2);
      assert.ok(actual);
    });

    it("should invalidate when two Horizontal lines are coincides", function() {
      const line1 = new Line({ x: 1, y: 5 }, { x: 8, y: 5 });
      const line2 = new Line({ x: 3, y: 5 }, { x: 6, y: 5 });
      const actual = line1.isParallelTo(line2);
      assert.notOk(actual);
    });

    it("should invalidate when two Vertical lines are coincides", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 1, y: 8 });
      const line2 = new Line({ x: 1, y: 3 }, { x: 1, y: 5 });
      const actual = line1.isParallelTo(line2);
      assert.notOk(actual);
    });

    it("should invalidate when two inclined lines are coincided ", function() {
      const line1 = new Line({ x: 8, y: 5 }, { x: 6, y: 3 });
      const line2 = new Line({ x: 8, y: 5 }, { x: 6, y: 3 });
      const actual = line1.isParallelTo(line2);
      assert.notOk(actual);
    });

    it("should invalidate for two collinear lines", function() {
      const line1 = new Line({ x: 8, y: 5 }, { x: 6, y: 5 });
      const line2 = new Line({ x: 12, y: 5 }, { x: 10, y: 5 });
      const actual = line1.isParallelTo(line2);
      assert.notOk(actual);
    });

    it("should invalidate if any of lines is not the instances of class Line", function() {
      const line1 = new Line({ x: 3, y: 4 }, { x: 5, y: 8 });
      const line2 = { endA: { x: 9, y: 1 }, endB: { x: 10, y: 5 } };
      assert.isFalse(line1.isParallelTo(line2));
    });

    it("should invalidate if two lines with of length 0 are compared", function() {
      const line1 = new Line({ x: 1, y: 6 }, { x: 1, y: 6 });
      const line2 = new Line({ x: -2, y: 10 }, { x: -2, y: 10 });
      assert.notOk(line1.isParallelTo(line2));
    });
  });

  describe("slope", function() {
    it("should calculate positive slope of a line", function() {
      const line = new Line({ x: 8, y: 5 }, { x: 6, y: 3 });
      assert.strictEqual(line.slope, 1);
    });

    it("should calculate negative slope of a line", function() {
      const line = new Line({ x: 8, y: 3 }, { x: 6, y: 5 });
      assert.strictEqual(line.slope, -1);
    });

    it("should give the slope of given line if points are floating points numbers", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 1.5, y: 2.5 });
      assert.strictEqual(line.slope, 1.0);
    });

    it("should give 0 for a line parallel to X-axis and in leftWard direction", function() {
      const line = new Line({ x: 8, y: 5 }, { x: 6, y: 5 });
      assert.strictEqual(line.slope, 0);
    });

    it("should give 0 for a line parallel to X-axis and in rightWard direction", function() {
      const line = new Line({ x: 6, y: 5 }, { x: 8, y: 5 });
      assert.strictEqual(line.slope, 0);
    });

    it("should give infinity for a line parallel to Y-axis and in downWard direction", function() {
      const line = new Line({ x: 8, y: 5 }, { x: 8, y: 3 });
      assert.strictEqual(line.slope, Infinity);
    });

    it("should give infinity for a line parallel to Y-axis and in upWard direction", function() {
      const line = new Line({ x: 8, y: 3 }, { x: 8, y: 5 });
      assert.strictEqual(line.slope, Infinity);
    });

    it("should give not a number when both end points are same", function() {
      const line = new Line({ x: 8, y: 5 }, { x: 8, y: 5 });
      assert.isNaN(line.slope);
    });
  });

  describe("findX", function() {
    it("should give the X-coordinate of the Line for given Y-coordinate", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      assert.strictEqual(line.findX(2), 2);
    });

    it("should give NaN if both endPoints are same", function() {
      const line = new Line({ x: 4, y: 4 }, { x: 4, y: 4 });
      assert.isNaN(line.findX(2));
    });

    it("should give NaN if given point is outside the line Segment", function() {
      const line = new Line({ x: 4, y: 4 }, { x: 6, y: 6 });
      assert.isNaN(line.findX(2));
    });

    it("should give x of start point if there are multiple x values available for a given y", function() {
      const line = new Line({ x: -1, y: 1 }, { x: 1, y: 1 });
      assert.strictEqual(line.findX(1), -1);
    });
  });

  describe("findY", function() {
    it("should give the Y-coordinate of the Line for given X-coordinate", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      assert.strictEqual(line.findY(2), 2);
    });

    it("should give NaN if both endPoints are same", function() {
      const line = new Line({ x: 4, y: 4 }, { x: 4, y: 4 });
      assert.isNaN(line.findY(2));
    });

    it("should give NaN if given point is outside the line Segment", function() {
      const line = new Line({ x: 4, y: 4 }, { x: 6, y: 6 });
      assert.isNaN(line.findY(2));
    });

    it("should give y of start point if there are multiple y values available for a given y", function() {
      const line = new Line({ x: 1, y: 5 }, { x: 1, y: -1 });
      assert.strictEqual(line.findY(1), 5);
    });
  });

  describe("split", function() {
    it("should split a line in two exactly at the centre of line ", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const line1 = { endA: { x: 1, y: 1 }, endB: { x: 2, y: 2 } };
      const line2 = { endA: { x: 2, y: 2 }, endB: { x: 3, y: 3 } };
      const expected = [line1, line2];
      assert.deepStrictEqual(line.split(), expected);
    });

    it("should split lines of 0 length into two line of 0 length", function() {
      const line = new Line({ x: 1, y: 3 }, { x: 1, y: 3 });
      const line1 = { endA: { x: 1, y: 3 }, endB: { x: 1, y: 3 } };
      const line2 = { endA: { x: 1, y: 3 }, endB: { x: 1, y: 3 } };
      const expected = [line1, line2];
      assert.deepStrictEqual(line.split(), expected);
    });
  });

  describe("hasPoint", function() {
    it("should validate when point lies on the line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const point = new Point(2, 2);
      assert.ok(line.hasPoint(point));
    });

    it("should inValidate when point does not lies on the line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const point = new Point(2, 3);
      assert.notOk(line.hasPoint(point));
    });

    it("should inValidate when point are outside line segment", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const point = new Point(5, 5);
      assert.notOk(line.hasPoint(point));
    });

    it("should inValidate when point is not a instance of class Point", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const point = { x: 2, y: 2 };
      assert.notOk(line.hasPoint(point));
    });
  });

  describe("findPointFromStart", function() {
    it("should give point from start of a line when distance is given ", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      assert.deepStrictEqual(line.findPointFromStart(5), new Point(3, 4));
    });

    it("should give start point of a line when distance 0 is given ", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      assert.deepStrictEqual(line.findPointFromStart(0), new Point(0, 0));
    });

    it("should give end point of a line when distance is equal to length of line", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      assert.deepStrictEqual(line.findPointFromStart(10), new Point(6, 8));
    });

    it("should give null when distance is greater than length of line", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      assert.isNull(line.findPointFromStart(15));
    });

    it("should give null when distance is less than 0", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      assert.isNull(line.findPointFromStart(15));
    });
  });

  describe("findPointFromEnd", function() {
    it("should give point from End of a line when distance is given ", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      assert.deepStrictEqual(line.findPointFromEnd(5), new Point(3, 4));
    });

    it("should give end point of a line when distance 0 is given ", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      assert.deepStrictEqual(line.findPointFromEnd(0), new Point(6, 8));
    });

    it("should give start point of a line when distance is equal to length of line", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      assert.deepStrictEqual(line.findPointFromEnd(10), new Point(0, 0));
    });

    it("should give null when distance is greater than length of line", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      assert.isNull(line.findPointFromStart(15));
    });
  });
});
