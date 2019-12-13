const areEqualPoints = function(point1, point2) {
  const areXCoordinatesEqual = point1.x === point2.x;
  const areYCoordinatesEqual = point1.y === point2.y;
  return areXCoordinatesEqual && areYCoordinatesEqual;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    return `Line (${this.endA.x},${this.endA.y})-(${this.endB.x},${this.endB.y})`;
  }

  isEqual(other) {
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
    return Math.sqrt(dx ** 2 - dy ** 2);
  }

  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }

  parallel(other) {
    return this.slope == other.slope;
  }
}

module.exports = Line;
