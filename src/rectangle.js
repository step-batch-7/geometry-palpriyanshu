"use strict";
const Point = require("../src/point.js");
const Line = require("../src/line.js");

class Rectangle {
  constructor(endA, endC) {
    this.endA = new Point(endA.x, endA.y);
    this.endC = new Point(endC.x, endC.y);
  }

  toString() {
    const point1 = `(${this.endA.x},${this.endA.y})`;
    const point2 = `(${this.endC.x},${this.endC.y})`;
    return `[Rectangle ${point1} to ${point2}]`;
  }

  get sides() {
    const endB = { x: this.endC.x, y: this.endA.y };
    const endD = { x: this.endA.x, y: this.endC.y };
    const AB = new Line(this.endA, endB);
    const BC = new Line(endB, this.endC);
    const CD = new Line(this.endC, endD);
    const AD = new Line(this.endA, endD);
    return [AB, BC, CD, AD];
  }

  get area() {
    const length = this.sides[0].length;
    const width = this.sides[1].length;
    return length * width;
  }

  get perimeter() {
    const length = this.sides[0].length;
    const width = this.sides[1].length;
    return 2 * (length + width);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return this.endA.isEqualTo(other.endA) && this.endC.isEqualTo(other.endC);
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return this.sides.some(line => point.isOn(line));
  }
}

module.exports = Rectangle;
