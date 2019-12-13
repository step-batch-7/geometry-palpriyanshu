const Line = require("../src/line.js");
assert = require("assert");

describe("Line", function() {
  describe("toString", function() {
    it("should gives string representation of the Line", function() {
      const a = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = a.toString();
      assert.deepStrictEqual(actual, `Line (1,2)--------(3,4)`);
    });
  });

  describe("isEqualTo", function() {
    it("should validate when two Lines have same end points", function() {
      const a = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const b = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(a.isEqualTo(b));
    });

    it("should invalidate when two Lines have different end points", function() {
      const a = new Line({ x: 2, y: 4 }, { x: 3, y: 5 });
      const b = new Line({ x: 7, y: 9 }, { x: 3, y: 1 });
      assert.ok(!a.isEqualTo(b));
    });

    it("should invalidate when two Objects are not instance of Line", function() {
      const a = new Line({ x: 2, y: 4 }, { x: 3, y: 5 });
      const b = { endA: { x: 2, y: 4 }, endB: { x: 3, y: 4 } };
      assert.ok(!a.isEqualTo(b));
    });
  });
});
