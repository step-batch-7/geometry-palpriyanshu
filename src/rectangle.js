"use strict";
const Point = require("../src/point.js");

class Rectangle {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }

  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }

  get area() {
    const point = new Point(this.endB.x, this.endA.y);
    const length = this.endA.findDistanceTo(point);
    const width = this.endB.findDistanceTo(point);
    return length * width;
  }
}

module.exports = Rectangle;
