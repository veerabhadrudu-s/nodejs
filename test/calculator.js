/*
This is a simple calculator application intended for testing purpose.
*/

class Calculator {
    calculate(firstOperand, secondOperand, operation) {
        return eval(`${firstOperand} ${operation} ${secondOperand}`);
    }
}

module.exports = {
    calculator: Calculator
};