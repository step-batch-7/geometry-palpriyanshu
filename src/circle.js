const Point = require("./point.js");

class Circle {
  constructor(centre, radius) {
    this.PI = 22 / 7;
    this.centre = new Point(centre.x, centre.y);
    this.radius = radius;
  }

  toString() {
    return `[Circle @(${this.centre.x},${this.centre.y}) radius ${this.radius}]`;
  }

  isEqual(other) {
    if (!(other instanceof Circle)) return NaN;
    return this.centre.isEqualTo(other.centre) && this.radius === other.radius;
  }

  get area() {
    return this.PI * this.radius ** 2;
  }
}

module.exports = Circle;
