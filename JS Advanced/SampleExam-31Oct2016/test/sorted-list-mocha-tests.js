let expect = require('chai').expect;
let SortedList = require('../02-SortedList').SortedList;

describe("SortedList() - let you use store a sorted collection",function(){
    let sortedList;                         // Must be outside the beforeEach scope
    beforeEach(function() {     
        sortedList = new SortedList();          // Create new instance before each IT, so that we do not keep any changes made from the tests
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
            expect(SortedList.prototype).to.haveOwnProperty('size');
            expect(sortedList.size).to.equal(0);
        });
    });

    describe("creating a new instance creates", function(){
        it('should select with a list of zero elements', function(){
            expect(sortedList.list.length).to.be.equal(0)
        });

        it('should return that the collection inside is of type array/object', function(){
            expect(typeof sortedList.list).to.be.equal('object')
        });
    });

    describe("testing the size property", function(){
        it('adding one element should change property size of collection', function(){
            sortedList.add(10);
            expect(sortedList.size).to.be.equal(1)
        });

        it('size should be zero if no elements are added', function(){
            expect(sortedList.size).to.be.equal(0)
        });

        it('size should should only have a getter and not a setter', function(){
            sortedList.size = 10;
            expect(sortedList.size).to.be.equal(0)
        });
    });

    describe("testing the get method", function(){
        it('from three elements, first should be the middle number', function(){
            sortedList.add(10);
            sortedList.add(5);
            sortedList.add(30);
            expect(sortedList.get(1)).to.be.equal(10)
        });

        it('from three elements, index 2 should be the last number', function(){
            sortedList.add(10);
            sortedList.add(5);
            sortedList.add(30);
            expect(sortedList.get(2)).to.be.equal(30)
        });
    });
    describe("testing the add method", function(){
        it('adding one element should change the size of the collection', function(){
            sortedList.add(5);
            expect(sortedList.size).to.be.equal(1)
        });

        it('adding three elements should change the size to 3', function(){
            sortedList.add(5);
            sortedList.add(6);
            sortedList.add(1);
            expect(sortedList.size).to.be.equal(3)
        });

        it('adding three elements should sort them in a proper way. First element should be smallest', function(){
            sortedList.add(5);
            sortedList.add(1);
            sortedList.add(6);
            expect(sortedList.get(0)).to.be.equal(1)
        });

        it('adding three elements should sort them in a proper way. Last element should be the biggest', function(){
            sortedList.add(50);
            sortedList.add(150);
            sortedList.add(30);
            expect(sortedList.get(2)).to.be.equal(150)
        });
    });

    describe("testing the remove method", function(){
        beforeEach(function() {
            sortedList.add(50);
            sortedList.add(150);
            sortedList.add(30);
         });

        it('removing one of three elements should reduce collection size', function(){
            sortedList.remove(1);
            expect(sortedList.size).to.be.equal(2)
        });

        it('removing from an invalid index throws error', function(){
            let func = function(){
                sortedList.remove(4);
            };
            expect(func).to.be.throw(Error, "Index was outside the bounds of the collection.")
        });

        it('removing one of three elements should remove the right element and propery sort them', function(){
            let expectedArr = [30, 150];
            sortedList.remove(1);
            expect(sortedList.list.toString()).to.be.equal(expectedArr.toString())
        });
    });

    describe("testing the sort method", function(){
        it('adding three elements should change the size to 3', function(){
            sortedList.list = [10, 5, 25, 3, 40];
            sortedList.sort();
            let sortedListExpected = [3, 5, 10, 25, 40];
            expect(sortedList.list.toString()).to.be.equal(sortedListExpected.toString())
        });
    });

    describe("testing the vrfyRange method", function(){
        it('passing any index of the collection is empty should throw an empty collection error', function(){
            let func = function(){
                sortedList.vrfyRange(2);
            };
            expect(func).to.be.throw(Error, "Collection is empty.")
        });

        it('passing a negative index should throw an out of bounds error', function(){
            sortedList.add(1523);
            let func = function(){
                sortedList.vrfyRange(-10);
            };
            expect(func).to.be.throw(Error, "Index was outside the bounds of the collection.")
        });

        it('passing a index bigger than collection length - 1 should throw an out of bounds error', function(){
            sortedList.add(1523);
            sortedList.add(412);
            sortedList.add(75);
            let func = function(){
                sortedList.vrfyRange(3);
            };
            expect(func).to.be.throw(Error, "Index was outside the bounds of the collection.")
        });
    });
});
