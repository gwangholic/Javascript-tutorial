/*
Point to remember
 - The static keyword is used to declare a static method
 - The static method can be of any name
 - A class can contain more than one static method with a similar name,
 the JavaScript always invokes the last one.
 - The static method can be used to create utility functions.
 - We can use this keyword to call a static method within another static method.
 - We cannot use this keyword directly to call a static method withiin the non-static method.
 In such case, we can call the static method either using the class name of as the property of the constructor
 */
class Test {
    constructor() {
        console.log(Test.display());
        console.log(this.constructor.display());
    }
    static display() {
        return "static method is invoked"
    }
    static display1() {
        return "static method is invoked"
    }
    static display2() {
        return "static method is invoked again"
    }
    static display2() {
        return "static method is invoked again"
    }
    show() {
        return "static method is invoked"
    }
}

console.log(Test.display1());
console.log(Test.display2());
var t = new Test();
// t.display1();  error
t.show();