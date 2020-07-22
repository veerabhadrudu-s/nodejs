//Here in this example both ways i.e Constructor function and ES6 class works.

/* function Employee(name, age, profession) {

    this.name = name;
    this.age = age;
    this.profession = profession;  
}

Employee.prototype.printEmployeeDetails = function () {
    console.log(`Employee with name ${this.name} has age ${this.age} and his profession is ${this.profession} `);
};
 */

class Employee {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    printEmployeeDetails() {
        console.log(`Employee with name ${this.name} has age ${this.age} and his profession is ${this.profession} `);
    }
}

module.exports = Employee;