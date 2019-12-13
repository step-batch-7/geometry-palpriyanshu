const isEqualCoordinates = function(coordinate1, coordinate2) {
  const abscissa = coordinate1.x == coordinate2.x;
  const ordinate = coordinate1.y == coordinate2.y;
  return abscissa && ordinate;
};

class Line {
  constructor(endA, endB) {
    [this.endA, this.endB] = [endA, endB];
  }

  toString() {
    return `Line (${+this.endA.x},${+this.endA.y})--------(${+this.endB
      .x},${+this.endB.y})`;
  }

  isEqualTo(otherLine) {
    const type = otherLine instanceof Line;
    const equalEndA = isEqualCoordinates(this.endA, otherLine.endA);
    const equalEndB = isEqualCoordinates(this.endB, otherLine.endB);
    return type && equalEndA && equalEndB;
  }
}

module.exports = Line;
