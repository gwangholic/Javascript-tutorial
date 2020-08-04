// class Employee {
//     constructor() {
//         this.id = 101;
//         this.name = "Martin Roy";
//     }
// };
// var emp = new Employee();
// console.log(emp.id + " " + emp.name);

class CompanyName {
    constructor() {
        this.Company = "Javatpoint";
    }
};

class Employee extends CompanyName {
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
    }
}
var emp = new Employee(1, "john");
console.log(emp.id + " " + emp.name + " " + emp.Company);