//This example will workfine in Windows Operating system.
// TO understand this example check - https://medium.com/@lazlojuly/are-node-js-modules-singletons-764ae97519af

const counter1 = require("./counter.js");
const counter2 = require("./Counter.js");

counter1.increment();
counter1.increment();
counter2.increment();

console.log(counter1.value); // prints undefined as value is private
console.log(counter1.get()); // prints 2
console.log(counter2.get());
