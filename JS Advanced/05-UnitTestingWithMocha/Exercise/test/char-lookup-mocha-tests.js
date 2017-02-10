let expect = require('chai').expect;
let lookupChar = require('../02-CharLookup').lookupChar;

describe("lookupChar(string, index) - returns the char of a string at a given index",function(){
    it('should return undefined for passing a non-string as first argument(14, 3)', function(){
        expect(lookupChar(14, 2)).to.be.undefined;
    });

    it('should return undefined for passing a non-string as first argument({name : "Pesho"}, 3)', function(){
        expect(lookupChar({name : "Pesho"}, 2)).to.be.undefined;
    });

    it('should return undefined for passing a non-integer as second argument("someText", "3")', function(){
        expect(lookupChar('someText', "3")).to.be.undefined;
    });

    it('should return undefined for passing a floating-point number as second argument("someText", 3.14)', function(){
        expect(lookupChar('someText', 3.14)).to.be.undefined;
    });

    it('should return incorrect index for ("someText", -1)', function(){
        expect(lookupChar('someText', -1)).to.be.equal("Incorrect index")
    });

    it('should return incorrect index for ("someText", 8)', function(){
        expect(lookupChar('someText', 8)).to.be.equal("Incorrect index")
    });

    it('should return last character for ("someText", 7)', function(){
        expect(lookupChar('someText', 7)).to.be.equal("t")
    });

    it('should return Incorrect index ("", 0)', function(){
        expect(lookupChar('', 0)).to.be.equal("Incorrect index")
    });

    it('should return first character for ("someText", 0)', function(){
        expect(lookupChar('someText', 0)).to.be.equal("s")
    });

    it('should return proper character for ("someText", 4)', function(){
        expect(lookupChar('someText', 4)).to.be.equal("T")
    });
});