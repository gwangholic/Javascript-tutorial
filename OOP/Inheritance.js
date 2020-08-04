/*
 Point to remember
 - It maintains an IS-A relationship
 - The extends keyword is used in class expressions or class declarations
 - Using extends keyword, we can acquire all the properties and behavior of the inbuilt object as well as custom classes.
 - we can also use a prototype-based approach to achieve inheritance
*/
class Moment extends Date {
    constructor() {
        super();
    }
}
var m = new Moment();
console.log("Current Date:")
console.log(m.getDate()+"-"+(m.getMonth()+1)+"-"+ m.getFullYear());