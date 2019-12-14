const Point = require("../src/point.js");

const areEqualPoints = function(point1, point2) {
  const areXCoordinatesEqual = point1.x === point2.x;
  const areYCoordinatesEqual = point1.y === point2.y;
  return areXCoordinatesEqual && areYCoordinatesEqual;
};

const hasCoordinate = function(coordinate, A, B) {
  return (
    (coordinate >= A && coordinate <= B) || (coordinate >= B && coordinate <= A)
  );
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) {
      return false;
    }
    return (
      areEqualPoints(this.endA, other.endA) &&
      areEqualPoints(this.endB, other.endB)
    );
  }

  get length() {
    const dx = this.endA.x - this.endB.x;
    const dy = this.endA.y - this.endB.y;
    return Math.hypot(dx, dy);
  }

  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }

  isParallelTo(other) {
    if (!(other instanceof Line)) {
      return false;
    }
    return this.endA.y !== other.endA.y && this.slope == other.slope;
  }

  findX(y) {
    if (hasCoordinate(y, this.endA.y, this.endB.y)) {
      return (y - this.endA.y) / this.slope + this.endA.x;
    }
    return NaN;
  }

  findY(x) {
    if (hasCoordinate(x, this.endA.x, this.endB.x)) {
      return (x - this.endA.x) * this.slope + this.endA.y;
    }
    return NaN;
  }

  split() {
    const midOfX = (this.endA.x + this.endB.x) / 2;
    const midOfY = (this.endA.y + this.endB.y) / 2;
    const line1 = new Line(this.endA, { x: midOfX, y: midOfY });
    const line2 = new Line({ x: midOfX, y: midOfY }, this.endB);
    return [line1, line2];
  }

  hasPoint(other) {
    if (!(other instanceof Point)) return false;
    return (
      hasCoordinate(other.y, this.endA.y, this.endB.y) &&
      hasCoordinate(other.x, this.endA.x, this.endB.x)
    );
  }
}

module.exports = Line;
