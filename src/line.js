const areEqualPoints = function(point1, point2) {
  const abscissa = point1.x === point2.x;
  const ordinate = point1.y === point2.y;
  return abscissa && ordinate;
};

class Line {
  constructor(endA, endB) {
    this.endA = { ...endA };
    this.endB = { ...endB };
  }

  toString() {
    return `Line (${this.endA.x},${this.endA.y})-(${this.endB.x},${this.endB.y})`;
  }

  isEqual(otherLine) {
    return (
      otherLine instanceof Line &&
      areEqualPoints(this.endA, otherLine.endA) &&
      areEqualPoints(this.endB, otherLine.endB)
    );
  }
}

module.exports = Line;
