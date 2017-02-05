let expect = require("chai").expect;
let sum = require('../01-SumOfNumbers').sum;

describe ("sum(arr) - summing an array of numbers", function(){
    it("should return 7 for [3,4]", function(){
       expect(sum([3,4])).to.be.equal(7)
    });

    it("should return 0 for []", function(){
        expect(sum([])).to.be.equal(0)
    });

    it("should return NaN for ['pesho']", function(){
        expect(sum(['pesho'])).to.be.NaN
    });

    it("should return NOT 3 for [1, 1']", function(){
        expect(sum([1,1])).not.to.be.equal(3);
    });
});