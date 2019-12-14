const areEqualPoints = function(point1, point2) {
  const areXCoordinatesEqual = point1.x === point2.x;
  const areYCoordinatesEqual = point1.y === point2.y;
  return areXCoordinatesEqual && areYCoordinatesEqual;
};

const hasAbscissa = function(x, endA, endB) {
  return (x > endA.x && x < endB.x) || (x > endB.x && x < endA.x);
};

const hasOrdinate = function(y, endA, endB) {
  return (y > endA.y && y < endB.y) || (y > endB.y && y < endA.y);
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
    if (hasOrdinate(y, this.endA, this.endB)) {
      return (y - this.endA.y) / this.slope + this.endA.x;
    }
    return NaN;
  }

  findY(x) {
    if (hasAbscissa(x, this.endA, this.endB)) {
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
}

module.exports = Line;
