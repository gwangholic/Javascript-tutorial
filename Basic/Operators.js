// Arithmetic Operators

var x = 10;
var y = 4;
console.log(x + y) // Outputs: 14
console.log(x - y) // Outputs: 6
console.log(x * y) // Outputs: 40
console.log(x / y) // Outputs: 2.5
console.log(x % y) // Outputs: 2

// Assignment Operator
var x; // Declaring Variable

x = 10;
console.log(x); // Outputs: 10

x = 20;
x += 30;
console.log(x); // Outputs: 50

x = 50;
x -= 20;
console.log(x); // Outputs: 30
 
x = 5;
x *= 25;
console.log(x); // Outputs: 125
 
x = 50;
x /= 10;
console.log(x); // Outputs: 5
 
x = 100;
x %= 15;
console.log(x); // Outputs: 10

// String Operators
var str1 = "Hello";
var str2 = " World!";

console.log(str1 + str2);

str1 += str2;
console.log(str1);

// Incrementing and Decrementing Operators
var x; // Declaring Variable

x = 10;
console.log(++x);   // Outputs: 11
console.log(x);     // Outputs: 11

x = 10;
console.log(x++);   // Outputs: 10
console.log(x);     // Outputs: 11

x = 10;
console.log(--x);   // Outputs: 9
console.log(x);     // Outputs: 9

x = 10;
console.log(x--);   // Outputs: 10
console.log(x);     // Outputs: 9

// Logical Operators
var year = 2018;

// Leap years ard divisible by 400 or by 4 but not 100
if((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))){
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year");
}

// Comparison Operators
var x = 25;
var y = 35;
var z = "25";

console.log(x == z);  // Outputs: true
console.log(x === z); // Outputs: false
console.log(x != y);  // Outputs: true
console.log(x !== z); // Outputs: true
console.log(x < y);   // Outputs: true
console.log(x > y);   // Outputs: false
console.log(x <= y);  // Outputs: true
console.log(x >= y);  // Outputs: false