var x = 2; // integer number
var y = 3.14; // floating-point number
var z = 0xff; // hexadecimal number

var x = 1.57e4; // same as 15700
var y = 4.25e+6; // same as 4.25e6 or 4250000
var z = 4.25e-6; // same as 0.00000425

// Operating on Numbers and Strings
var x = 10;
var y = 20;
var z = "30";

// Adding a number with a number, the result will be sum of numbers
console.log(x + y); // 30

// Adding a string with a string, the result will be string concatenation
console.log(z + z); // '3030'

// Adding a number with a string, the result will be string concatenation
console.log(x + z); // '1030'

// Adding a string with a number, the result will be string concatenation
console.log(z + x); // '3010'

// Adding strings and numbers, the result will be string concatenation
console.log("The result is: " + x + y); // 'The result is: 1020'

// Adding numbers and strings, calculation performed from left to right
console.log(x + y + z); // 'The result is: 3030'

// Subtracting a number from a number
console.log(y - x); // 10

// Subtracting a number from a numeric string
console.log(z - x); // 20

// Multiplying a number with a numeric string
console.log(x * z); // 300

// Dividing a number with a numeric string
console.log(z / x); // 3

var x = 10;
var y = "foo";
var z = NaN;

// Subtracting a number from a non-numeric string
console.log(y - x); // NaN

// Multiplying a number with a non-numeric string
console.log(x * y); // NaN

// Dividing a number with a non-numeric string
console.log(x / y); // NaN

// Adding NaN to a number 
console.log(x + z); // NaN
						
// Adding NaN to a string 
console.log(y + z); // fooNaN

// Representing Infinity
var x = 5 / 0;
console.log(x); // Infinity

var y = -5 / 0;
console.log(y); // -Infinity

// Avoiding Precision Problems
var x = 0.1 + 0.2;
console.log(x); // 0.30000000000000004

var x = (0.1 * 10 + 0.2 * 10) / 10;
console.log(x); // 0.3

var x = 999999999999999;
console.log(x); // 999999999999999

var y = 9999999999999999;
console.log(y); // 10000000000000000

// Parsing Integers from Strings
console.log(parseInt("3.14"));  // 3
console.log(parseInt("50px"));  // 50
console.log(parseInt("12pt"));  // 12
console.log(parseInt("0xFF", 16));  // 255
console.log(parseInt("20 years"));  // 20
console.log(parseInt("Year 2048"));  // NaN
console.log(parseInt("10 12 2018"));  // 10

console.log(parseFloat("3.14"));  // 3.14
console.log(parseFloat("50px"));  // 50
console.log(parseFloat("1.6em"));  // 1.6
console.log(parseFloat("124.5 lbs"));  // 124.5
console.log(parseFloat("weight 124.5 lbs"));  // NaN
console.log(parseFloat("6.5 acres"));  // 6.5

// Converting Numbers to Strings
var x = 10;
var y = x.toString();

console.log(y); // '10'
console.log(typeof y); // string
console.log(typeof x); // number

console.log((12).toString()); // '12'
console.log((15.6).toString()); // '15.6'
console.log((6).toString(2)); // '110'
console.log((255).toString(16)); // 'ff

// Formatting Numbers in Exponential Notation
var x = 67.1234;


console.log(x.toExponential()); // 6.71234e+1
console.log(x.toExponential(6)); // 6.712340e+1
console.log(x.toExponential(4)); // 6.7123e+1
console.log(x.toExponential(2)); // 6.71e+1

// Formatting Numbers to Fixed Decimals
var x = 72.635;

console.log(x.toFixed()); // '73' (note rounding, no fractional part)
console.log(x.toFixed(2)); // '72.64' (note rounding)
console.log(x.toFixed(1)); // '72.6'

var y = 6.25e+5;
console.log(y.toFixed(2)); // '625000.00'

var z = 1.58e-4;
console.log(z.toFixed(2)); // '0.00' (since 1.58e-4 is equal to 0.000158)

// Formatting Numbers with Precision
var x = 6.235;

console.log(x.toPrecision()); // '6.235'
console.log(x.toPrecision(3)); // '6.24' (note rounding)
console.log(x.toPrecision(2)); // '6.2'
console.log(x.toPrecision(1)); // '6'

var y = 47.63;
console.log(y.toPrecision(2)); // '48' (note rounding, no fractional part)

var z = 1234.5;
console.log(z.toPrecision(2));  // '1.2e+3'

// Finding the Largest and Smallest Possible Numbers
var a = Number.MAX_VALUE;
console.log(a); // 1.7976931348623157e+308

var b = Number.MIN_VALUE;
console.log(b); // 5e-324

var x = Number.MAX_VALUE * 2;
console.log(x); // Infinity

var y = -1 * Number.MAX_VALUE * 2;
console.log(y); // -Infinity