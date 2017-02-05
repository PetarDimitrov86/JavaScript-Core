let expect = require('chai').expect;
let isSymmetric = require("../02-CheckForSymmetry").isSymmetric;

describe("isSymetric(arr) - check if an array is symmetric",function(){
    it('should return true for [1, 3, 1]', function(){
        expect(isSymmetric([1, 3, 1])).to.be.true
    });

    it('should return true for [-1, 3, 1]', function(){
        expect(isSymmetric([-1, 3, 1])).to.be.false
    });

    it('should return false for [1, 3, 1, 1]', function(){
        expect(isSymmetric([1, 3, 1, 1])).to.be.false
    });

    it('should return true for [1, 1]', function(){
        expect(isSymmetric([1, 1])).to.be.true
    });

    it('should return true for [1]', function(){
        expect(isSymmetric([1])).to.be.true
    });

    it('should return true for [1, pesho, pesho, 1]', function(){
        expect(isSymmetric([1, 'pesho', 'pesho', 1])).to.be.true
    });

    it('should return true for []', function(){
        expect(isSymmetric([])).to.be.true
    });

    it('should return false for passing a non-Array', function(){
        expect(isSymmetric(3)).to.be.false
    });

    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5] ", function() {
        let symmetric = isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5] );
        expect(symmetric).to.be.equal(true);
    });
});