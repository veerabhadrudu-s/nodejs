/*
First test case using Mocha
*/
let chai=require('chai');    

describe('This is my first test suite',function(){  

    it('This is my first test case',function(){
        let message="Hello";
        chai.expect(message.toUpperCase()).exist.to.be.equal('HELLO');
    })

});
