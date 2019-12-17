"use strict";
const Point = require("../src/point.js");
const Line = require("../src/line.js");

class Rectangle {
  constructor(endA, endC) {
    this.endB = new Point(endC.x, endA.y);
    this.diagonal = new Line(endA, endC);
    this.side1 = new Line(endA, this.endB);
    this.side2 = new Line(endC, this.endB);
  }

  toString() {
    const point1 = `(${this.diagonal.endA.x},${this.diagonal.endA.y})`;
    const point2 = `(${this.diagonal.endB.x},${this.diagonal.endB.y})`;
    return `[Rectangle ${point1} to ${point2}]`;
  }

  get area() {
    return this.side1.length * this.side2.length;
  }

  get perimeter() {
    return 2 * (this.side1.length + this.side2.length);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    const isDiagonalEqual = this.diagonal.length === other.diagonal.length;
    return (
      this.side1.isEqualTo(other.side1) &&
      this.side2.isEqualTo(other.side2) &&
      isDiagonalEqual
    );
  }
}

module.exports = Rectangle;
