let expect = require('chai').expect;
let isOddOrEven = require('../01-EvenOrOdd').isOddOrEven;

describe("isOddOrEven() - tells you whether a given string length is odd or even",function(){
    it('should return even for ("abcd")', function(){
        expect(isOddOrEven('abcd')).to.be.equal('even')
    });

    it('should return odd for ("abc")', function(){
        expect(isOddOrEven('abc')).to.be.equal('odd')
    });

    it('should return even for empty string', function(){
        expect(isOddOrEven('')).to.be.equal('even')
    });

    it('should return undefined if input is not a string', function(){
        expect(isOddOrEven(4)).to.be.undefined
    });
});