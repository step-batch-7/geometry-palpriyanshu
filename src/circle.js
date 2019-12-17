"use strict";

const Point = require("./point.js");

class Circle {
  constructor(centre, radius) {
    this.centre = new Point(centre.x, centre.y);
    this.radius = radius;
  }

  toString() {
    return `[Circle @(${this.centre.x},${this.centre.y}) radius ${this.radius}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Circle)) return NaN;
    return this.centre.isEqualTo(other.centre) && this.radius === other.radius;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }

  hasPoint(point) {
    const dx = point.x - this.centre.x;
    const dy = point.y - this.centre.y;
    return this.radius === Math.hypot(dx, dy);
  }
}

module.exports = Circle;
