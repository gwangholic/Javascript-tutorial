// Sorting an Array
var fruits = ["Banana", "Orange", "Apple", "Papaya", "Mango"];
var sorted = fruits.sort();

console.log(fruits); // Outputs: Apple, Banana, Mango, Orange, Papaya
console.log(sorted); // Outputs: Apple, Banana, Mango, Orange, Papaya

// Reversing an Array
var counts = ["one", "two", "three", "four", "five"];
var reversed = counts.reverse();

console.log(counts); // Outputs: five, four, three, two, one
console.log(reversed); // Outputs: five, four, three, two, one

// Sorting Numeric Arrays
var numbers = [5, 20, 10, 75, 50, 100];
numbers.sort(); // Sorts numbers array
console.log(numbers); // Outputs: 10, 100, 20, 5, 50, 75

var numbers = [5, 20, 10, 75, 50, 100];

// Sorting an array using compare function
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers); // Outputs: 5, 10, 20, 50, 75, 100

// Finding the Maximum and Minimum Value in an Array

var numbers = [3, -7, 10, 8, 15, 2];

// Defining function to find maximum value
function findmax(array) {
    return Math.max.apply(null, array);
}

// Defining function to find minimum value
function findmin(array) {
    return Math.min.apply(null, array);
}

console.log(findmax(numbers)); // Outputs: 15
console.log(findmin(numbers)); // Outputs: -7

// Sorting an Array of Objects
var persons = [
    {name: "Harry", age: 14},    
    {name: "Ethan", age: 30},
    {name: "Peter", age: 21},
    {name: "Clark", age: 42},
    {name: "Alice", age: 16}
];

// Sort by age
persons.sort(function (a, b) {
    return a.age - b.age;
});

console.log(persons);

// Sort by name
persons.sort(function(a, b) {
    var x = a.name.toLowerCase(); // ignore upper and lowercase
    var y = b.name.toLowerCase();
    if(x < y) {
        return -1;
    }
    if(x > y) {
        return 1;
    }
    // names must be equal
    return 0;
});

console.log(persons);
