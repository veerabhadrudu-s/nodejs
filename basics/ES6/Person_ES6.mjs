export class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printPersonDetails() {
        console.log(`Person with name ${this.name} has age ${this.age}`);
    }

}