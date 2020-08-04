emp = {
    id: 102,
    name: "Shyam Kumar",
    salary: 40000
}
console.log(emp.id+" "+emp.name+" "+emp.salary);

var emp = new Object();
emp.id = 101;
emp.name = "Ravi Malik";
emp.salary = 50000;
console.log(emp.id+" "+emp.name+" "+emp.salary);

function employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
e = new employee(103, "Vimal Jaiswal", 30000);
console.log(emp.id+" "+emp.name+" "+emp.salary);