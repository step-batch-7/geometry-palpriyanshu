class Line {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `Line { x: ${this.x}, y: ${this.y} }`;
  }
}

module.exports = Line;
