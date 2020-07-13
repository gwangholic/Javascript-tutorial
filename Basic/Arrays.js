// Creating an Array
var colors = ["Red", "Green", "Blue"];
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
var cities = ["London", "Paris", "New York"];
var person = ["john", "Wick", 32];

// Accessing the Elements of an Array
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];


console.log(fruits[0]); // Prints: Apple
console.log(fruits[1]); // Prints: Banana
console.log(fruits[2]); // Prints: Mango
console.log(fruits[fruits.length - 1]); // Prints: Papaya

// Getting the Length of an Array
console.log(fruits.length); // Prints: 5

// Looping Through Array Elements
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];

// Iterates over array elements
for(var i = 0; i < fruits.length; i++) {
    console.log(fruits[i] + "<br>"); // Print array element
}

// Iterates over array elements
for(var fruit in fruits) {
    console.log(fruit + "<br>"); // Print array element
}

// Loop through all the elements in the array
for(var i in fruits) {
    console.log(fruits[i] + "<br>");
}

// Adding New Elements to an Array
var colors = ["Red", "Green", "Blue"];
colors.push("Yellow");

console.log(colors); // Prints: Yellow, Red, Green, Blue
console.log(colors.length); // Prints: 4

var colors = ["Red", "Green", "Blue"];
colors.push("Pink", "Violet");
colors.unshift("Yellow", "Grey");

console.log(colors); // Prints: Yellow, Grey, Red, Green, Blue, Pink
console.log(colors.length); // Prints: 7

// Removing Elements from an Array
var colors = ["Red", "Green", "Blue"];
var last = colors.pop();

console.log(last); // Prints: Blue
console.log(colors.length); // Prints: 2

var colors = ["Red", "Green", "Blue"];
var first = colors.shift();

console.log(first); // Prints: Red
console.log(colors.length); // Prints: 2

// Adding or Removing Elements at Any Position
var colors = ["Red", "Green", "Blue"];
var removed = colors.splice(0,1); // Remove the first element

console.log(colors); // Prints: Green, Blue
console.log(removed); // Prints: Red (one item array)
console.log(removed.length); // Prints: 1

removed = colors.splice(1, 0, "Pink", "Yellow"); // Insert two items at position one
console.log(colors); // Prints: Green, Pink, Yellow, Blue
console.log(removed); // Empty array
console.log(removed.length); // Prints: 0

removed = colors.splice(1, 1, "Purple", "Violet"); // Insert two values, remove one
console.log(colors); // Prints: Green, Purple, Violet Yellow, Blue
console.log(removed); // Pink
console.log(removed.length); // Prints: 1

// Creating a String from an Array
var colors = ["Red", "Green", "Blue"];

console.log(colors.join()); // Prints: Red,Green,Blue
console.log(colors.join("")); // Prints: RedGreenBlue
console.log(colors.join("-")); // Prints: Red-Green-Blue
console.log(colors.join(", ")); // Prints: Red, Green, Blue

var colors = ["Red", "Green", "Blue"];
console.log(colors.toString()); // Prints: Red,Green,Blue

// Extractin a Portion of an Array
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
var subarr = fruits.slice(1, 3);
console.log(subarr); // Prints: Banana, Mango

console.log(fruits.slice(2)); // Prints: Mango, Orange, Papaya
console.log(fruits.slice(-2)); // Prints: Orange, Papaya
console.log(fruits.slice(2, -1)); // Prints: Mango, Orange

// Merging Two or More Arrays
var pets = ["Cat", "Dog", "Parrot"];
var wilds = ["Tiger", "Wolf", "Zebra"];

// Creating new array by combining pets and wilds arrays
var animals = pets.concat(wilds);
console.log(animals); // Prints: Cat, Dog, Parrot, Tiger, Wolf, Zebra

var pets = ["Cat", "Dog", "Parrot"];
var wilds = ["Tiger", "Wolf", "Zebra"];
var bugs = ["Ant", "Bee"];

// Creating new array by combining pets, wilds and bugs arrays
var animals = pets.concat(wilds, bugs);
console.log(animals); // Prints: Cat, Dog, Parrot, Tiger, Wolf, Zebra, Ant, Bee

// Searching Through an Array
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];

console.log(fruits.indexOf("Apple")); // Prints: 0
console.log(fruits.indexOf("Banana")); // Prints: 1
console.log(fruits.indexOf("Pineapple")); // Prints: -1

var arr = [1, 0, 3, 1, false, 5, 1, 4, 7];

// Searching forwards, starting at from index
console.log(arr.indexOf(1, 2)); // Prints: 3
// Searching backwords, starting at from index
console.log(arr.lastIndexOf(1, 2)); // Prints: 0

console.log(arr.includes(1)); // Prints: true
console.log(arr.includes(6)); // Prints: false
console.log(arr.includes(1, 2)); // Prints: true
console.log(arr.includes(3, 4)); // Prints: false

var result = arr.find(function(element) {
    return element > 4;
});
console.log(result); // Prints: 5

var result = arr.findIndex(function(element) {
    return element > 6;
});
console.log(result); // Prints: 8

var result = arr.filter(function(element) {
    return element > 4;
});
console.log(result); // Prints: 5, 7
console.log(result.length); // Prints: 2