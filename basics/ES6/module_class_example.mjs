/* 
    Example on mixing/using both ES6 and CommonJS Modules.
*/

import {
    Person
} from './Person_ES6.mjs';
import Employee from './Employee_CJS.js';

let person = new Person('Veera', 32);
person.printPersonDetails();

let employee = new Employee("Veera", 32, "Software Engineer");
employee.printEmployeeDetails();