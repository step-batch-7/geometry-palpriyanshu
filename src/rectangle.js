"use strict";
const Point = require("../src/point.js");

class Rectangle {
  #endB;
  constructor(endA, endC) {
    this.endA = new Point(endA.x, endA.y);
    this.endC = new Point(endC.x, endC.y);
    this.#endB = new Point(this.endC.x, this.endA.y);
  }

  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endC.x},${this.endC.y})]`;
  }

  get length() {
    return this.endA.findDistanceTo(this.#endB);
  }

  get width() {
    return this.endC.findDistanceTo(this.#endB);
  }

  get area() {
    return this.length * this.width;
  }

  get perimeter() {
    return 2 * (this.length + this.width);
  }
}

module.exports = Rectangle;
