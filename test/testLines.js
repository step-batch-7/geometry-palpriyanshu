const Line = require("../src/line.js");
assert = require("assert");

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
      assert.ok(!line1.isEqual(line2));
    });

    it("should invalidate when two objects are not instance of Line", function() {
      const line1 = new Line({ x: 2, y: 4 }, { x: 3, y: 5 });
      const line2 = ``;
      assert.ok(!line1.isEqual(line2));
    });
  });
});
