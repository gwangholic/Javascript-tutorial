function Employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Employee.prototype.fullName = function() {
   return this.firstName + " " + this.lastName;
}

var employee1 = new Employee("Martin", "Roy");
var employee2 = new Employee("Duke", "William");
console.log(employee1.fullName())
console.log(employee2.fullName())

Employee.prototype.company = "Javatpoint";

console.log(employee1.fullName() + " " + employee1.company);
console.log(employee2.fullName() + " " + employee2.company);