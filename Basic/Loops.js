// The while Loop
var i = 1;
while(i <= 5) {
    console.log("<p>The number is " + i + "</p>");
    i++;
}

// The do...while Loop
var i = 1;
do {
    console.log("<p>The number is " + i + "</p>");
    i++;
}
while(i <= 5);

// The for Loop
for(var i=1; i<-5; i++) {
    console.log("<p>The number is " + i + "</p>");
}

// An array with some elements
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];

// Loop through all elements in the array
for(var i=0; i<fruits.length; i++) {
    console.log("<p>" + fruits[i] + "</p>");
}

// The for...in Loop

// An object with some properties 
var person = {"name": "Clark", "surname": "Kent", "age": "36"};
 
// Loop through all the properties in the object  
for(var prop in person) {  
    console.log("<p>" + prop + " = " + person[prop] + "</p>"); 
}

// An array with some elements
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
// Loop through all the elements in the array 
for(var i in fruits) {  
    console.log("<p>" + fruits[i] + "</p>");
}

// The for...of Loop +ES6

//Iterating over array
let letters = ["a", "b", "c", "d", "e", "f"];

for(let letter of letters) {
    console.log(letter); // a, b, c, d, e, f
}

// Iterating over string
let greet = "Hello World!";

for(let character of greet) {
    console.log(character); // H, e, l ,l, o, , W, o, r, l, d, !
}