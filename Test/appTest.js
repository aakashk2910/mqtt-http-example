const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const testApp = require('../functionsToTest');

// Results
sayHelloResult = testApp.sayHello();
addNumbersResult = testApp.addNumbers(5,5);

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
            assert.isAbove(addNumbersResult, 12);
        });

        it('addNumbers should return type number', function(){
            //let result = app.addNumbers(5,5);
            assert.typeOf(addNumbersResult, 'number');
        });
    });
});
