const areEqualCoordinates = function(coordinate1, coordinate2) {
  const abscissa = coordinate1.x == coordinate2.x;
  const ordinate = coordinate1.y == coordinate2.y;
  return abscissa && ordinate;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    return `Line (${this.endA.x},${this.endA.y})-----(${this.endB.x},${this.endB.y})`;
  }

  isEqual(otherLine) {
    const isLineInstance = otherLine instanceof Line;
    const isEqualEndA = areEqualCoordinates(this.endA, otherLine.endA);
    const isEqualEndB = areEqualCoordinates(this.endB, otherLine.endB);
    return isLineInstance && isEqualEndA && isEqualEndB;
  }
}

module.exports = Line;
