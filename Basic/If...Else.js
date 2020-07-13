// The if Statement
var now = new Date();
var dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6

if(dayOfWeek == 1) {
    console.log("Have a nice weekend!");
}

// The if...else Statement
var now = new Date();
var dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6

if(dayOfWeek == 5) {
    console.log("Have a nice weekend!");
} else {
    console.log("Have a nice day!");
}

// The if...else if... else Statement
var now = new Date();
var dayOfWeek = now.getDay(); /// Sunday - Saturday : 0 - 6

if(dayOfWeek == 5) {
    console.log("Have a nice weekend!");
} else if(dayOfWeek == 0) {
    console.log("Have a nice Sunday!");
} else {
    console.log("Have a nice day!");
}

// The Ternary Operator
var userType;
var age = 21;
if(age < 18) {
    userType = 'Child';
} else {
    userType = 'Adult';
}
console.log(userType); // Displays Adult

var age = 21;
var userType = age < 18 ? 'Child' : 'Adult';
console.log(userType) // Displays Adult


