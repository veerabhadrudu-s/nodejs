function Employee(name, age, profession) {

    this.name = name;
    this.age = age;
    this.profession = profession;

    this.printEmployeeDetails = function () {
        console.log(`Employee with name ${this.name} has age ${this.age} and his profession is ${this.profession} `);
    }

}

module.exports = Employee;