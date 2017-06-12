function Point (x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function () {
    return `${this.x}, ${this.y}`
}



function Shape () {

}
Shape.prototype.addToPlane = function (x, y) {
    this.position = new Point (x, y)
}
Shape.prototype.move = function (x, y) {
    this.position = new Point (x, y)
}



function Circle (radius) {
    Shape.call(this)
    this.radius = radius
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.area = function () {return 2 * Math.PI * this.radius}
Circle.prototype.circumference = function () {return Math.PI * Math.pow(this.radius, 2)}
Circle.prototype.diameter = function () {return 2 * this.radius}



function Side (length) {
    this.length = length
}
function Polygon (sides) {
    Shape.call(this)
    this.sides = sides
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function () {return this.sides.reduce(function(a, b) {return a + b.length}, 0) }
Polygon.prototype.numberOfSides = function () {return this.sides.length}



function Quadrilateral (int1,int2,int3,int4) {
    let aarayOfSideMeasuraments = [int1,int2,int3,int4]
    let arrayOfSidesObjects = aarayOfSideMeasuraments.map( (side) => new Side(side) )
    Polygon.call(arrayOfSidesObjects)
    this.sides = arrayOfSidesObjects
    // this.int1 = int1
    // this.int2 = int2
    // this.int3 = int3
    // this.int4 = int4
}
Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral



function Triangle (int1, int2, int3) {
    let aarayOfSideMeasuraments = [int1,int2,int3]
    let arrayOfSidesObjects = aarayOfSideMeasuraments.map( (side) => new Side(side) )
    Polygon.call(arrayOfSidesObjects)
    this.sides = arrayOfSidesObjects
}
Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle



function Rectangle (width, height) {
    Quadrilateral.call(this, width, height, width, height)
    this.width = width
    this.height = height
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function () {return this.width * this.height}


function Square (length) {
    Rectangle.call(this, length, length, length, length)
    this.length = length
}
Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function () {
    for (var prop in this) {
        if(this.hasOwnProperty(prop)) {
            console.log(this + prop + " = " + this[prop])
        }
    }
}




