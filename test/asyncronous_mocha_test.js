/* 
This example explain's how to write asyncronous test cases using mocha js.
For asyncronous code testing, it (test case function call back) can take done function refrence and it can be used inside asyncronous code to indicate testcase completion.
Alternativly , we can return Promise object while testing asyncronous code.That promise should get resolve or reject before default timeout.
We can't use both Promise and done in same test case (it test function call),this is because both are mutually exclusive. 
 */

describe(`Testing asyncronous call's`, function () {

    it(`Test case without using done callback will pass`, function () {
        //This kind of test case setup can used to test syncronous code.
    });

    it(`Test case using done and without calling done callback will fail`, function (done) {

    });

    it(`Test case calling done callback will pass`, function (done) {
        //Asyncronous code
        setTimeout(done, 1000);
    });

    it(`Test case returning promise object with resolve call should pass`, function () {
        return new Promise(function (resolve, reject) {
            //Asyncronous code
            setTimeout(() => { resolve("Passing test case"); }, 1000);
        });
    });

    it(`Test case returning promise object with reject call will fail`, function () {
        return new Promise(function (resolve, reject) {
            //Asyncronous code
            setTimeout(() => { reject("Failing test case"); }, 1000);
        });
    });

    it(`Test case using custom time invoked on mocha context timeout function`, function () {
        //Mocha Context timeout function. 
        this.timeout(5000);
        let mocha=require('mocha');
        console.log(`Is this in this anonymous function is Mocha Context - ${this instanceof mocha.Context}`);
        return new Promise(function (resolve, reject) {
            //Asyncronous code
            setTimeout(() => { resolve("Passing test case"); }, 3000);
        });
    });

    it(`Test case failed due to arrow function used for defining testcase and missing mocha context on timeout function due to arrow function`, () => {
        // Refer - https://mochajs.org/#arrow-functions        
        this.timeout(5000);
        let mocha=require('mocha');
        console.log(`Is this in this arrow function is Mocha Context - ${this instanceof mocha.Context}`);
        console.log(`this context in this arrow function is testcase file Node Module/Object`)
        return new Promise(function (resolve, reject) {
            //Asyncronous code
            setTimeout(() => { resolve("Passing test case"); }, 3000);
        });
    });

});

