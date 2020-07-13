// Generating Output in JavaScript

// 1. Writing Output to Browser Console

// Printing a simple text message
console.log("Hello World"); // Prints: Hello World!

// Printing a variable value
var x = 10;
var y = 20;
var sum = x + y;
console.log(sum); // Prints: 30

// 2. Displaying Output in Alert Dialog Boxes

// Displaying a simple text message
console.log("Hello World"); // Outputs: Hello World!

// Displaying a variable value
var x = 10;
var y = 20;
var sum = x + y;
console.log(sum); // Outputs: 30

// 3. Writing Output to the Browser Window

// Printing a simple text message
console.log("Hello World!"); // Prints: Hello World!

// Printing a variable value 
var x = 10;
var y = 20;
var sum = x + y;
console.log(sum); // Prints: 30

// 4. Inserting Output Inside an HTML Element

<p id="greet"></p>
<p id="result"></p>

<script>
// Writing text string inside an element
document.getElementById("greet").innerHTML = "Hello World!";

// Writing a variable value inside an element
var x = 10;
var y = 20;
var sum = x + y;
document.getElementById("result").innerHTML = sum;
</script>