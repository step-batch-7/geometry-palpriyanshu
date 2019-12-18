"use strict";
const Point = require("../src/point.js");
const Line = require("../src/line.js");

const isCoordinateInRange = function(coordinate, range) {
  const [start, end] = range.sort((a, b) => a - b);
  return coordinate >= start && coordinate <= end;
};

const getSides = function(endA, endC) {
  const endB = { x: endC.x, y: endA.y };
  const endD = { x: endA.x, y: endC.y };
  const AB = new Line(endA, endB);
  const BC = new Line(endB, endC);
  const CD = new Line(endC, endD);
  const AD = new Line(endA, endD);
  return [AB, BC, CD, AD];
};

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

  get area() {
    const length = getSides(this.endA, this.endC)[0].length;
    const width = getSides(this.endA, this.endC)[1].length;
    return length * width;
  }

  get perimeter() {
    const length = getSides(this.endA, this.endC)[0].length;
    const width = getSides(this.endA, this.endC)[1].length;
    return 2 * (length + width);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return this.endA.isEqualTo(other.endA) && this.endC.isEqualTo(other.endC);
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return getSides(this.endA, this.endC).some(line => point.isOn(line));
  }

  covers(point) {
    if (!(point instanceof Point)) return false;
    return (
      isCoordinateInRange(point.x, [this.endA.x, this.endC.x]) &&
      isCoordinateInRange(point.y, [this.endA.y, this.endC.y])
    );
  }
}

module.exports = Rectangle;
