const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const testApp = require('../functionsToTest');

// Results
sayHelloResult = testApp.sayHello();
addNumbersResult = testApp.addNumbers(5,5);
multiplyNumbersResult = testApp.multiplyNumbers(5,5);
divideNumbersResult = testApp.divideNumbers(10,2);

describe('testApp', function(){
    describe('sayHello()', function(){
        it('sayHello should return hello', function(){
            //let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });

        it('sayHello should return type string', function(){
            //let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers()', function(){
        it('addNumbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.isAbove(addNumbersResult, 5);
        });

        it('addNumbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.equal(addNumbersResult, 10);
        });

        it('addNumbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.isBelow(addNumbersResult, 12);
        });

        it('addNumbers should return type number', function(){
            //let result = app.addNumbers(5,5);
            assert.typeOf(addNumbersResult, 'number');
        });
    });

    describe('multiplyNumbers()', function(){
        it('multiplyNumbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.isAbove(multiplyNumbersResult, 20);
        });

        it('multiplyNumbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.equal(multiplyNumbersResult, 25);
        });

        it('multiplyNumbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.isBelow(multiplyNumbersResult, 30);
        });

        it('multiplyNumbers should return type number', function(){
            //let result = app.addNumbers(5,5);
            assert.typeOf(multiplyNumbersResult, 'number');
        });
    });

    describe('divideNumbers()', function(){
        it('divideNumbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.isAbove(divideNumbersResult, 1);
        });

        it('divideNumbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.equal(divideNumbersResult, 3);
        });

        it('divideNumbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.isBelow(divideNumbersResult, 10);
        });

        it('divideNumbers should return type number', function(){
            //let result = app.addNumbers(5,5);
            assert.typeOf(divideNumbersResult, 'number');
        });
    });
});
