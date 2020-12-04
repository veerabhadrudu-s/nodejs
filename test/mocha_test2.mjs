/* 
    Sample example on mocha builk file execution.

    Always execute mocha mocha_test1.mjs and mocha_test2.mjs test files together 
    to see the mocha bulk test case file execution flow using as below sample command 
    npx mocha <path>/mocha_test1.mjs <path>/mocha_test2.mjs
    Also try executing in reverse order of file execution using as below sample command and see the output closely
    npx mocha <path>/mocha_test2.mjs <path>/mocha_test1.mjs

    To understand this example execution flow first refer nested_test_cases.js example and it's notes.
*/

describe('4', function () {
    it('4', function () {
        describe('5', function () {
            it('5', function () {})
        });
    })
});

describe('6', function () {
    it('6', function () {})
});