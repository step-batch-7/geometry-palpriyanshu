"use strict";
const Point = require("../src/point.js");
const Line = require("../src/line.js");

const isCoordinateInRange = function(coordinate, range) {
  const [start, end] = range.sort((a, b) => a - b);
  return coordinate > start && coordinate < end;
};

const getSides = function(vertexA, vertexC) {
  const vertexB = { x: vertexC.x, y: vertexA.y };
  const vertexD = { x: vertexA.x, y: vertexC.y };
  const AB = new Line(vertexA, vertexB);
  const BC = new Line(vertexB, vertexC);
  const CD = new Line(vertexC, vertexD);
  const AD = new Line(vertexA, vertexD);
  return [AB, BC, CD, AD];
};

class Rectangle {
  constructor(vertexA, vertexC) {
    this.vertexA = new Point(vertexA.x, vertexA.y);
    this.vertexC = new Point(vertexC.x, vertexC.y);
  }

  toString() {
    const point1 = `(${this.vertexA.x},${this.vertexA.y})`;
    const point2 = `(${this.vertexC.x},${this.vertexC.y})`;
    return `[Rectangle ${point1} to ${point2}]`;
  }

  get area() {
    const [side1, side2] = getSides(this.vertexA, this.vertexC);
    return side1.length * side2.length;
  }

  get perimeter() {
    const [side1, side2] = getSides(this.vertexA, this.vertexC);
    return 2 * (side1.length + side2.length);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return (
      this.vertexA.isEqualTo(other.vertexA) &&
      this.vertexC.isEqualTo(other.vertexC)
    );
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return getSides(this.vertexA, this.vertexC).some(line => point.isOn(line));
  }

  covers(point) {
    if (!(point instanceof Point)) return false;
    return (
      isCoordinateInRange(point.x, [this.vertexA.x, this.vertexC.x]) &&
      isCoordinateInRange(point.y, [this.vertexA.y, this.vertexC.y])
    );
  }
}

module.exports = Rectangle;
