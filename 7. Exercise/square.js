class Shape {

  name;
  sides;
  sideLength;


  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter(sides, sideLength) {
    return sides * sideLength;
  }
}

class Square extends Shape {
  constructor(sideLengths){
    super("square", 4, sideLengths);
  }

  calcArea(sideLength) {
    return sideLength ** 2;
  }
}

let squarePerimeter = new Shape("4-side", 4, 5);
console.log(squarePerimeter.calcPerimeter(4,5));

let squareArea = new Square(5);
console.log(squareArea.calcArea(5));

let triangle = new Shape("3-side", 3, 3);
console.log(triangle.calcPerimeter(3,3));