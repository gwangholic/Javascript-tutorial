// Data Types in JavaScript

// The String Data Type
var a = 'Hi there'; // using single quotes
var b = "Hi there!"; // using double quotes

var a = "Let's have a cup of coffee."; // single quote inside double quotes
var b = 'He said "Hello" and left'; // double quote inside single quotes
var c = "We\'ll never give up."; // escaping single quote with backslash

// The Number Data Type
var a = 25;         // integer
var b = 80.5;       // floating-point number
var c = 4.25e+6;    // exponential notation, same as 4.25e6 or 4250000
var d = 4.25e-6;    // exponential notation, same as 0.00000425

console.log(16 / 0);  // Output: Infinity
console.log(-16 / 0); // Output: -Infinity
console.log(16 / -0); // Output: -Infinity

console.log("Some text" / 2);       // Output: NaN
console.log("Some text" / 2 + 10);  // Output: NaN
console.log(Math.sqrt(-1));         // Output: NaN

// The Boolean Data Type
var isReading = true;   // yes, I'm reading
var isSleeping = false; // no, I'm not sleeping

var a = 2, b = 5, c = 10;
 
console.log(b > a) // Output: true
console.log(b > c) // Output: false

// The Undefined Data Type
var a;
var b = "Hello World!"
 
console.log(a) // Output: undefined
console.log(b) // Output: Hello World!

// The Null Data Type

var a = null;
console.log(a); // Output: null
 
var b = "Hello World!"
console.log(b); // Output: Hello World!
 
b = null;
console.log(b) // Output: null

// The Object Data Type
var emptyObject = {};
var person = {"name": "Clark", "surname": "Kent", "age": "36"};
 
// For better reading
var car = {
    "modal": "BMW X3",
    "color": "white",
    "doors": 5
}

// The Array Data Type
var colors = ["Red", "Yellow", "Green", "Orange"];
var cities = ["London", "Paris", "New York"];
 
console.log(colors[0]);   // Output: Red
console.log(cities[2]);   // Output: New York

 // The Function Data Type
 var greeting = function(){ 
    return "Hello World!"; 
}
 
// Check the type of greeting variable
console.log(typeof greeting) // Output: function
console.log(greeting());     // Output: Hello World!

function createGreeting(name){
    return "Hello, " + name;
}
function displayGreeting(greetingFunction, userName){
    return greetingFunction(userName);
}
 
var result = displayGreeting(createGreeting, "Peter");
console.log(result); // Output: Hello, Peter

// The typeof Operator
// Numbers
typeof 15;  // Returns: "number"
typeof 42.7;  // Returns: "number"
typeof 2.5e-4;  // Returns: "number"
typeof Infinity;  // Returns: "number"
typeof NaN;  // Returns: "number". Despite being "Not-A-Number"
 
// Strings
typeof '';  // Returns: "string"
typeof 'hello';  // Returns: "string"
typeof '12';  // Returns: "string". Number within quotes is typeof string
 
// Booleans
typeof true;  // Returns: "boolean"
typeof false;  // Returns: "boolean"
 
// Undefined
typeof undefined;  // Returns: "undefined"
typeof undeclaredVariable; // Returns: "undefined"
 
// Null
typeof Null;  // Returns: "object"
 
// Objects
typeof {name: "John", age: 18};  // Returns: "object"
 
// Arrays
typeof [1, 2, 4];  // Returns: "object"
 
// Functions
typeof function(){};  // Returns: "function"