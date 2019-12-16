class Circle {
  constructor(centre, radius) {
    this.centre = centre;
    this.radius = radius;
  }

  toString() {
    return `[Circle @(${this.centre.x},${this.centre.y}) radius ${this.radius}]`;
  }
}

module.exports = Circle;
