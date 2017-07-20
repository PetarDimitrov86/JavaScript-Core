let expect = require('chai').expect;
let list = require('../02-AddDeleteInList').list;

describe("Using the custom list",function(){
    let myList;
    beforeEach(function(){ myList = (function(){
        return list;
    })();
    });

    it("should be empty when no elements are added", function () {
        expect(myList.toString()).to.equal('');
    });

    it("should work properly for adding one element", function () {
        myList.add(3);
        expect(myList.toString()).to.equal('3');
    });

    it("should work properly for adding elements", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);
        expect(myList.toString()).to.equal('3, 4, 5');
    });

    it("deleting not a number for index should return undefined", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);
        expect(myList.delete('1413')).to.be.undefined;
    });

    it("deleting floating point for index should return undefined", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);
        expect(myList.delete(4.51)).to.be.undefined;
    });

    it("deleting with index outside of range should return undefined", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);
        expect(myList.delete(4)).to.be.undefined;
    });

    it("deleting with negative index should return undefined", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);
        expect(myList.delete(-34)).to.be.undefined;
    });

    it("deleting with valid index should return proper collection", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);
        myList.delete(1);
        expect(myList.toString()).to.be.equal('3, 5');
    });

    it("deleting with valid index should show the deleted element", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);
        expect(myList.delete(1)).to.be.equal(4);
    });
});