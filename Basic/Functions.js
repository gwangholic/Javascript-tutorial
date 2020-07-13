// Defining and Calling a Function

// Defining function
function sayHello() {
    console.log("Hello, welcome to this website!");
}

// Calling function
sayHello(); // Outputs: Hello, welcome to this website!

// Adding Parameters to Functions

// Defining function
function displaySum(num1, num2) {
    var total = num1 + num2;
    console.log(total);
}

// Calling function
displaySum(6, 20); // Outputs: 26
displaySum(-5, 17); // Outputs: 12

// Defining function
function showFullname(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
 
// Calling function
showFullname("Clark", "Kent"); // 0utputs: Clark Kent
showFullname("John"); // 0utputs: John undefined

// Default Values for Function Parameters +ES6
function sayHello(name = 'Guest') {
    console.log('Hello, ' + name);
}

sayHello(); // Outputs: Hello, Guest
sayHello('John'); // Outputs: Hello, John

function sayHello(name) {
    var name = name || 'Guest'; 
    console.log('Hello, ' + name);
}

sayHello(); // 0utputs: Hello, Guest
sayHello('John'); // 0utputs: Hello, John

// Returning Values from a Function
// Defining function
function getSum(num1, num2) {
    var total = num1 + num2;
    return total;
}
 
// Displaying returned value
console.log(getSum(6, 20)); // 0utputs: 26
console.log(getSum(-5, 17)); // 0utputs: 12

// Defining function
function divideNumbers(dividend, divisor){
    var quotient = dividend / divisor;
    var arr = [dividend, divisor, quotient];
    return arr;
}
 
// Store returned value in a variable
var all = divideNumbers(10, 2);
 
// Displaying individual values
console.log(all[0]); // 0utputs: 10
console.log(all[1]); // 0utputs: 2
console.log(all[2]); // 0utputs: 5

// Working with Function Expressions
// Function Declaration
function getSum(num1, num2) {
    var total = num1 + num2;
    return total;
}
 
// Function Expression
var getSum = function(num1, num2) {
    var total = num1 + num2;
    return total;
};

console.log(getSum(5, 10)); // Outputs: 15

var sum = getSum(7, 25);
console.log(sum); // Outputs: 32

declaration(); // Outputs: Hi, I'm a function declaration!
function declaration() {
    console.log("Hi, I'm a function declaration!");
}
 
//expression(); // Uncaught TypeError: undefined is not a function
var expression = function() {
    console.log("Hi, I'm a function expression!");
};

// Understanding the Variable Scope

// Defining function
function greetWorld() {
    var greet = "Hello World!";
    console.log(greet);
}
 
greetWorld(); // Outputs: Hello World!
 
// console.log(greet); // Uncaught ReferenceError: greet is not defined

var greet = "Hello World!";
 
// Defining function
function greetWorld() {
    console.log(greet);
}
 
greetWorld();  // Outputs: Hello World!
 
console.log(greet); // Outputs: Hello World!