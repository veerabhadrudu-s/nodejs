/* 
    Sample example on mocha builk file execution.

    Always execute mocha mocha_test1.mjs and mocha_test2.mjs test files together 
    to see the mocha bulk test case file execution flow using as below sample command 
    npx mocha <path>/mocha_test1.mjs <path>/mocha_test2.mjs
    Also try executing in reverse order of file execution using as below sample command and see the output closely
    npx mocha <path>/mocha_test2.mjs <path>/mocha_test1.mjs

    To understand this example execution flow first refer nested_test_cases.js example and it's notes.
*/

describe('1', function () {
    it('1', function (done) {
        this.timeout(10000);
        describe('3', function () {
            it('3', function () {

            })
        });
        setTimeout(() => done(), 5000);
    })
});

describe('2', function () {
    it('2', function () {})
});