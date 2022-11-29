// function to find the lenght of the diagonal of a square of a given side

const S = 9;

function findDiagonal() {
  return Math.sqrt(2) * S;
}

console.log(S);

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.

const side1 = 5;
const side2 = 6;
const side3 = 7;
let side = (side1 + side2 + side3) / 2;
let area = Math.sqrt(side * ((side - side1) * (side - side2) * (side - side3)));
console.log(area);

// Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.

function cirlce(radius) {
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
  this.perimeter = function () {
    return 2 * Math.PI * this.radius;
  };
}
var c = new cirlce(3);
console.log("Area = ", c.area().toFixed(2));
console.log("perimeter =", c.perimeter().toFixed(2));

// Write a JavaScript program that accepts two integers and displays the larger of the two.

let num1 = window.prompt("Input the First integer", "0");
let num2 = window.prompt("Input the second integer", "0");

if (parseInt(num1, 10) > parseInt(num2, 10)) {
  console.log("the larger of " + num1 + " and " + num2 + " is " + num1 + ".");
} else {
  if (parseInt(num2, 10) > parseInt(num1, 10)) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
  } else {
    console.log("The values " + num1 + " and " + num2 + " are equal.");
  }
}

// Write a JavaScript program that checks whether an integer is an even or an odd number.

let number = 8;

let remainder = number % 2;

if (remainder == 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}
