let expect = require('../../node_modules/chai/chai').expect;
let SortedList = require('../02-SortedList').SortedList;

describe("Using a sorted list",function(){
    let myList;
    beforeEach(function() {
        myList = new SortedList();
    });

    describe('constructor & methods', function () {
        it("should have a constructor & methods", function () {
            expect(SortedList.prototype).to.haveOwnProperty('add');
            expect(SortedList.prototype).to.haveOwnProperty('remove');
            expect(SortedList.prototype).to.haveOwnProperty('get');
            expect(SortedList.prototype).to.haveOwnProperty('sort');
            expect(SortedList.prototype).to.haveOwnProperty('vrfyRange');
        });

        it("should have size prop", function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
            expect(myList.size).to.equal(0);
        });
    });

    it("should be a type of class", function () {
        expect(typeof myList).to.equal('object');
    });

    it("should have 0 size when created", function () {
        expect(myList.size).to.equal(0);
    });

    it("should increase size when adding new elements", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);
        expect(myList.size).to.equal(3);
    });

    it("should throw error if given index is out of range with a bigger number", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);
        let func = function(){
            myList.vrfyRange(10);
        };
        expect(func).to.be.throw(Error, "Index was outside the bounds of the collection.");
    });

    it("should throw error if given index is out of range with a negative number", function () {
        myList.add(3);
        let func = function(){
            myList.vrfyRange(-3);
        };
        expect(func).to.be.throw(Error, "Index was outside the bounds of the collection.");
    });

    it("should throw error if the collection is empty", function () {
        let func = function(){
            myList.vrfyRange(15);
        };
        expect(func).to.be.throw(Error, "Collection is empty.");
    });

    it("should remove element with a valid index", function () {
        myList.add(3);
        myList.add(4);
        myList.add(5);
        myList.remove(1);
        expect(myList.size).to.equal(2);
    });

    it("should sort the collection automatically after each added number", function () {
        myList.add(15);
        myList.add(4);
        myList.add(22);
        expect(myList.get(0)).to.equal(4);
        expect(myList.get(1)).to.equal(15);
    });

    it("should throw error if given index is out of range with a negative number", function () {
        myList.add(3);
        let func = function(){
            myList.remove(-3);
        };
        expect(func).to.be.throw(Error, "Index was outside the bounds of the collection.");
    });

    it("should throw error if given index is out of range with a negative number", function () {
        myList.add(3);
        let func = function(){
            myList.get(13);
        };
        expect(func).to.be.throw(Error, "Index was outside the bounds of the collection.");
    });

    it("should throw error if given index is out of range with a negative number", function () {
        let func = function(){
            myList.get(3);
        };
        expect(func).to.be.throw(Error, "Collection is empty.");
    });
});