/*
Calculator unit test case file
*/
let calculatorModule=require('./calculator');
let chai=require('chai');    

describe('This is calcualtor test suite',function(){   
    let calculator;
    before(function(){
        //console.log(calculatorModule);
        calculator=new calculatorModule.calculator();

    });

    it('This is a addition test case',function(){        
        chai.expect(calculator.calculate(20,10,"+")).to.equal(30);
    });

    it('This is a subtraction test case',function(){        
        chai.expect(calculator.calculate(20,10,"-")).to.equal(10);
    });

    it('This is a NaN test case',function(){
        chai.expect(calculator.calculate(10,undefined,"-")).to.NaN;
    });

    it('This is a Infinity test case',function(){
        chai.expect(calculator.calculate(10,0,"/")).to.equal(Infinity);
    });

});
