const Line = require("../src/line.js");
const assert = require("chai").assert;

describe("Line", function() {
  describe("toString", function() {
    it("should gives string representation of the Line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.toString();
      assert.deepStrictEqual(actual, `Line (1,2)-(3,4)`);
    });
  });

  describe("isEqual", function() {
    it("should validate when two Lines have same end points", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(line1.isEqual(line2));
    });

    it("should invalidate when two Lines have different end points", function() {
      const line1 = new Line({ x: 2, y: 4 }, { x: 3, y: 5 });
      const line2 = new Line({ x: 7, y: 9 }, { x: 3, y: 1 });
      assert.notOk(line1.isEqual(line2));
    });

    it("should invalidate when two objects are not instance of Line", function() {
      const line1 = new Line({ x: 2, y: 4 }, { x: 3, y: 5 });
      const line2 = ``;
      assert.notOk(line1.isEqual(line2));
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
    it("should validate when two lines are parallel", function() {
      const line1 = new Line({ x: 8, y: 5 }, { x: 6, y: 3 });
      const line2 = new Line({ x: 4, y: 4 }, { x: 2, y: 2 });
      const actual = line1.isParallelTo(line2);
      assert.ok(actual);
    });

    it("should invalidate when two lines are not isParallelTo", function() {
      const line1 = new Line({ x: 8, y: 5 }, { x: 6, y: 3 });
      const line2 = new Line({ x: -4, y: 4 }, { x: -2, y: 2 });
      const actual = line1.isParallelTo(line2);
      assert.notOk(actual);
    });

    it("should invalidate for two coincident lines ", function() {
      const line1 = new Line({ x: 8, y: 5 }, { x: 6, y: 3 });
      const line2 = new Line({ x: 8, y: 5 }, { x: 6, y: 3 });
      const actual = line1.isParallelTo(line2);
      assert.notOk(actual);
    });

    it("should invalidate for two lines with same ordinates", function() {
      const line1 = new Line({ x: 8, y: 5 }, { x: 6, y: 3 });
      const line2 = new Line({ x: 12, y: 5 }, { x: 10, y: 3 });
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
    it("should give positive slope of a line when change in both ordinates and abscissa is positive", function() {
      const line = new Line({ x: 8, y: 5 }, { x: 6, y: 3 });
      assert.strictEqual(line.slope, 1);
    });

    it("should give negative slope of a line when either change in ordinates or change in abscissa is negative", function() {
      const line = new Line({ x: 8, y: 3 }, { x: 6, y: 5 });
      assert.strictEqual(line.slope, -1);
    });

    it("should give the slope of given line if points are floating points numbers", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 1.5, y: 2.5 });
      assert.strictEqual(line.slope, 1.0);
    });

    it("should give 0 for a line parallel to X-axis", function() {
      const line = new Line({ x: 8, y: 5 }, { x: 6, y: 5 });
      assert.strictEqual(line.slope, -0);
    });

    it("should give infinity for a line parallel to Y-axis", function() {
      const line = new Line({ x: 8, y: 5 }, { x: 8, y: 3 });
      assert.strictEqual(line.slope, -Infinity);
    });

    it("should give not a number when both end points are same", function() {
      const line = new Line({ x: 8, y: 5 }, { x: 8, y: 5 });
      assert.isNaN(line.slope);
    });
  });
});
