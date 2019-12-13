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
    let x = (this.endA.x - this.endB.x) ** 2;
    let y = (this.endA.y - this.endB.y) ** 2;
    return Math.sqrt(x - y);
  }

  parallel(other) {
    const slopeOfThisLine =
      (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
    const slopeOfOtherLine =
      (other.endB.y - other.endA.y) / (other.endB.x - other.endA.x);
    return slopeOfOtherLine == slopeOfThisLine;
  }
}

module.exports = Line;
