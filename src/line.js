"use strict";

const Point = require("../src/point.js");

const isCoordinateInRange = function(coordinate, range) {
  const [start, end] = range.sort((a, b) => a - b);
  return coordinate >= start && coordinate <= end;
};

const arePointsCollinear = function(point1, point2, point3) {
  const [x1, y1] = [point1.x, point1.y];
  const [x2, y2] = [point2.x, point2.y];
  const [x3, y3] = [point3.x, point3.y];
  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) === 0;
};

class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }

  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) {
      return false;
    }
    return this.endA.isEqualTo(other.endA) && this.endB.isEqualTo(other.endB);
  }

  get length() {
    return this.endA.findDistanceTo(this.endB);
  }

  get slope() {
    const dx = this.endA.x - this.endB.x;
    const dy = this.endA.y - this.endB.y;
    return dy / dx == -Infinity ? Infinity : dy / dx;
  }

  isParallelTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      !arePointsCollinear(this.endA, other.endA, other.endB) &&
      this.slope == other.slope
    );
  }

  findX(y) {
    if (!isCoordinateInRange(y, [this.endA.y, this.endB.y])) {
      return NaN;
    }
    if (this.slope == 0) return this.endA.x;
    return (y - this.endA.y) / this.slope + this.endA.x;
  }

  findY(x) {
    if (!isCoordinateInRange(x, [this.endA.x, this.endB.x])) {
      return NaN;
    }
    if (this.slope === Infinity) return this.endA.y;
    return (x - this.endA.x) * this.slope + this.endA.y;
  }

  split() {
    const midPoint = {
      x: (this.endA.x + this.endB.x) / 2,
      y: (this.endA.y + this.endB.y) / 2
    };
    const line1 = new Line(this.endA, midPoint);
    const line2 = new Line(midPoint, this.endB);
    return [line1, line2];
  }

  hasPoint(other) {
    return (
      other instanceof Point &&
      (other.x === this.findX(other.y) || other.y === this.findY(other.x))
    );
  }

  findPointFromStart(distance) {
    const distanceRatio = distance / this.length;
    const x = (1 - distanceRatio) * this.endA.x + distanceRatio * this.endB.x;
    const y = (1 - distanceRatio) * this.endA.y + distanceRatio * this.endB.y;
    return distance > this.length ? null : new Point(x, y);
  }

  findPointFromEnd(distance) {
    return this.findPointFromStart(this.length - distance);
  }
}

module.exports = Line;
