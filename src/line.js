class Line {
  constructor(endA, endB) {
    this.line = { endA, endB };
  }

  toString() {
    const x1 = this.line.endA.x;
    const y1 = this.line.endA.y;
    const x2 = this.line.endB.x;
    const y2 = this.line.endB.y;

    return `Line (${x1},${y1})--------(${x2},${y2})`;
  }

  isEqualTo(otherLine) {
    return this.toString() == otherLine.toString();
  }
}

module.exports = Line;
