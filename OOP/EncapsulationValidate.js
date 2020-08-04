class Student {
    constructor() {
        var name;
        var marks;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getMarks() {
        return this.marks;
    }
    setMarks(marks) {
        if(marks<0 || marks>100) {
            console.log("Invalid Marks");
        } else{
            this.marks = marks;
        }
    }
}

var stud = new Student();
stud.setMarks(110);
stud.setName("John");