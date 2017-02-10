let expect = require('chai').expect;
let mathEnforcer = require('../03-MathEnforcer').mathEnforcer;

describe("mathEnforcer() - Simple function for some math operations",function(){
    let math;
    beforeEach(function() {
        math = mathEnforcer;
    });

    describe('addFive', function() {
        it('should return 10 for math.addFive(5)', function () {
            expect(math.addFive(5)).to.be.equal(10)
        });

        it('should return -5 for math.addFive(-10)', function () {
            expect(math.addFive(-10)).to.be.equal(-5)
        });

        it('should return 7.5 for math.addFive(2.5)', function () {
            expect(math.addFive(2.5)).to.be.equal(7.5)
        });

        it('should return undefined for math.addFive("5")', function () {
            expect(math.addFive('5')).to.be.undefined
        });
    });

    describe('subtractTen', function() {
        it('should return 10 for math.subtractTen(20)', function () {
            expect(math.subtractTen(20)).to.be.equal(10)
        });

        it('should return -20 for math.subtractTen(-10)', function () {
            expect(math.subtractTen(-10)).to.be.equal(-20)
        });

        it('should return 7.5 for math.subtractTen(17.5)', function () {
            expect(math.subtractTen(17.5)).to.be.equal(7.5)
        });

        it('should return undefined for math.subtractTen("5")', function () {
            expect(math.subtractTen('5')).to.be.undefined
        });
    });

    describe('sum', function() {
        it('should return the right value for sum of two numbers math.sum(8, 7)', function () {
            expect(math.sum(8, 7)).to.be.equal(15)
        });

        it('should return the right value for sum of two numbers math.sum(8,3, 7,4)', function () {
            expect(math.sum(8.3, 7.4)).to.be.closeTo(15.6, 15.8)
        });

        it('should return undefined if first parameter is not a number math.sum("pesho", 7)', function () {
            expect(math.sum("pesho", 7)).to.be.undefined
        });

        it('should return undefined if second parameter is not a number math.sum(10, "Pesho")', function () {
            expect(math.sum(10, "Pesho")).to.be.undefined
        });

        it('should return Nan if second parameter is missing math.sum(10)', function () {
            expect(math.sum(10)).to.be.NaN
        });
    });
});