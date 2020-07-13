var myString = 'Hello World!'; // Single quoted string
var myString = "Hello World!"; // Double quoted string

var str1 = "it's okay";
var str2 = 'He said "Goodbye"';
var str3 = "She replied 'Calm down, please'";
//var str4 = 'Hi, there!";  Syntax error - quotes must match

var str1 = 'it\'s okay';
var str2 = "He said \"Goodbye\"";
var str3 = 'She replied \'Calm down, please\'';

// Escape Sequences
var str1 = "The quick brown fox \n jumps over the lazy dog.";
console.log("<pre>" + str1 + "</pre>"); // Create line break
 
var str2 = "C:\Users\Downloads";
console.log(str2); // Prints C:UsersDownloads
 
var str3 = "C:\\Users\\Downloads";
console.log(str3); // Prints C:\Users\Downloads

var str1 = "This is a paragraph of text.";
console.log(str1.length); // Prints 28
 
var str2 = "This is a \n paragraph of text.";
console.log(str2.length); // Prints 30, because \n is only one character

// Finding a String Another String
var str = "If the facts don't fit the theory, change the facts.";
var pos = str.indexOf("facts");
console.log(pos); // 0utputs: 7

var pos = str.lastIndexOf("facts");
console.log(pos); // 0utputs: 46

 
// Searching forwards
var pos1 = str.indexOf("facts", 20);
console.log(pos1); // 0utputs: 46
 
// Searching backwards
var pos2 = str.lastIndexOf("facts", 20);
console.log(pos2); // 0utputs: 7

// Searching for a Pattern Inside a String
var str = "Color red looks brighter than color blue.";
 
// Case sensitive search
var pos1 = str.search("color");
console.log(pos1); // 0utputs: 30
 
// Case insensitive search using regexp
var pos2 = str.search(/color/i);
console.log(pos2); // 0utputs: 0

// Extracting a Substring from a String
var str = "The quick brown fox jumps over the lazy dog.";
var subStr = str.slice(4, 15);

console.log(subStr); // Prints: quick brown

console.log(str.slice(-28, -19)); // Prints: fox jumps
console.log(str.slice(31)); // Prints: the lazy dog.

// Extracting a Fixed Numver of Characters from a String
console.log(str.substr(4, 15)); // Prints: quick brown fox
console.log(str.substr(-28, -19)); // Prints nothing
console.log(str.substr(-28, 9)); // Prints: fox jumps
console.log(str.substr(31)); // Prints: the lazy dog.

// Replacing the Contents of a String
var str = "Color red looks brighter than color blue.";
var result = str.replace("color", "paint");
console.log(result); // Outputs: Color red looks brighter than paint blue.

var result = str.replace(/color/ig, "paint");
console.log(result); // 0utputs: paint red looks brighter than paint blue.

// Converting a String to Uppercase or Lowercase
var str = "Hello World!";
var result = str.toUpperCase();
console.log(result); // Prints: HELLO WORLD!

var result = str.toLowerCase();
console.log(result); // Prints: hello world!

// Concatenating Two or More Strings
var hello = "Hello";
var world = "World";
var greet = hello + " " + world;
console.log(greet); // Prints: Hello World

var wish = "Happy";
    wish += " New Year";
console.log(wish); // Prints: Happy New Year

// Accessing Individual Characters from a String
var str = "Hello World!";
console.log(str.charAt()); // Prints: H
console.log(str.charAt(6)); // Prints: W
console.log(str.charAt(30)); // Prints: nothing
console.log(str.charAt(str.length - 1)); // Prints: !

console.log(str); // Prints: H
console.log(str[6]); // Prints: W
console.log(str[30]); // Prints: undefined
console.log(str[str.length - 1]); // Prints: !

// Splitting a String into an Array
var fruitsStr = "Apple, Banana, Mango, Orange, Papaya";
var fruitsArr = fruitsStr.split(", ");

console.log(fruitsArr[0]); // Prints: Apple
console.log(fruitsArr[2]); // Prints: Mango
console.log(fruitsArr[fruitsArr.length - 1]); // Prints: Papaya

// Loop through all the elements of the fruits array
for(var i in fruitsArr) {
    console.log("<p>" + fruitsArr[i] + "</p>");
}

var str = "INTERSTELLAR";
var strArr = str.split("");
console.log(strArr[0]);
console.log(strArr[1]);
console.log(strArr[strArr.length - 1]);

// Loop through all the elements of the characters array print them
for(var i in strArr) {
    console.log("<br>" + strArr[i]);
}