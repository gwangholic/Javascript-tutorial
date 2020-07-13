// Using the Switch...Case Statement
var d = new Date();

switch(d.getDay()) {
    case 0:
        console.log("Today is Sunday.");
        break;
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;
    case 5:
        console.log("Today is Friday.");
        break;
    case 6:
        console.log("Today is Saturday.");
        break;
    default:
        console.log("No information available for that day.");
        break;
}

switch(d.getDay()) {
    default:
        console.log("Looking forward to the weekend.");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 0:
        console.log("Today is Sunday");
        break;
}

// Multiple Cases Sharing Same Action
var d = new Date();

switch(d.getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It is a weekday.");
        break;
    case 0:
    case 6:
        console.log("It is a weekend day.");
    default:
        console.log("Enjoy every day of your life.")

}