// Creating Objects
var person = {
    name: "Peter",
    age: 28,
    gender: "Male",
    displayName: function() {
        console.log(this.name);
    }
};

// Accessing Object's Properties
var book = {
    "name": "Harry Potter and the Goblet of Fire",
    "author": "J. K. Rowling",
    "year": 2000
};

// Dot notation
console.log(book.author); // Prints: J. K. Rowling

// Bracket notation
console.log(book["year"]); // Prints: 2000

var book = {
    name: "Harry Potter and the Goblet of Fire",
    author: "J. K. Rowling",
    "publication date": "8 July 2000"
};

// Bracket notation
console.log(book["publication date"]); // Prints: 8 July 2000

// Looping Through Object's Properties
var person = {
    name: "Peter",
    age: 28,
    gender: "Male"
};

// Iterating over object properties
for(var i in person) {
    console.log(person[i] + "<br>"); //Prints: name, age and gender
}

// Setting Object's Properties
var person = {
    name: "Peter",
    age: 28,
    gender: "Male"
};

// Setting a new property
person.country = "United States";
console.log(person.country); // Prints: United States

person["email"] = "peterparker@mail.com";
console.log(person.email);

// Updating existing property
person.age = 30;
console.log(person.age); // Prints: 30

person["name"] = "Peter Parker";
console.log(person.name);

// Deleting Object's Properties
var person = {
    name: "Peter",
    age: 28,
    gender: "Male",
    displayname: function() {
        console.log(this.name);
    }
};

// Deleting property
delete person.age;
console.log(person.age); // Outputs: undefined

var person = {
    name: "Peter",
    age: 28,
    gender: "Male",
    displayName: function() {
        console.log(this.name);
    }
};

person.displayName(); // Outputs: Peter
person["displayName"](); // Outputs: Peter

// Manipulating by Value vs Reference
var message = "Hello World!";

var greet = message; // Assign message variable to a new variable
greet = "Hi, there!";

console.log(message); // Prints: Hello World!
console.log(greet); // Prints: Hi, there!

var person = {
    name: "Peter",
    age: 28,
    gender: "Male"
};

var user = person; // Assign person variable to a new variable
user.name = "Harry";

console.log(person.name);  // Prints: Harry
console.log(user.name);  // Prints: Harry